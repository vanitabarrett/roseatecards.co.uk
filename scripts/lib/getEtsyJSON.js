const https = require('https');
const limit = require('simple-rate-limiter');
const querystring = require('querystring');

const apiKey = process.env.ETSY_API_KEY;

if (!apiKey) {
  console.error('Error: You must provide an Etsy API key with the `ETSY_API_KEY` environment variable');
  process.exit(1);
}

const MAX_NO_OF_REQUESTS = 10;
const MAX_REQUESTS_DURATION = 1000;
const API_HOST = 'openapi.etsy.com';

function getJSON(uri, query = {}, successCallback, failureCallback) {
  const queryParamsString = querystring.stringify({ api_key: apiKey, limit: 999, ...query });
  const path = `${uri}?${queryParamsString}`;
  const options = {
    host: API_HOST,
    port: 443,
    path,
    method: 'GET'
  };

  https.request(options, function (res) {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', function (chunk) {
      body += chunk;
    });
    res.on('end', function () {
      const parsedResponse = JSON.parse(body);
      successCallback(parsedResponse);
    });
  }).on('error', (err) => {
    failureCallback(err);
  }).end();
}

const throttledGetJSON = limit(getJSON).to(MAX_NO_OF_REQUESTS).per(MAX_REQUESTS_DURATION);

function promisifiedThrottledGetJSON(uri, query) {
  return new Promise((resolve, reject) => {
    throttledGetJSON(
      uri,
      query,
      (response) => {
        resolve(response);
      },
      (err) => {
        reject(err)
      }
    );
  });
}

module.exports = promisifiedThrottledGetJSON;
