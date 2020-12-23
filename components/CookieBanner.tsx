import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const { asPath } = useRouter();

  function acceptCookies() {
    document.cookie = 'cookie_preferences=1;expires=' + cookieExpiry() + ';domain=' + window.location.hostname + ';path=/';
    setShowBanner(false);
  }

  function rejectCookies() {
    deleteAllCookies();

    document.cookie = 'cookie_preferences=0;expires=' + cookieExpiry() + ';domain=' + window.location.hostname + ';path=/';
    setShowBanner(false);
  }

  useEffect(() => {
    const cookiePreferencesSet = getCookie('cookie_preferences');
    setShowBanner(!cookiePreferencesSet);
  }, []);

  return (showBanner && asPath !== '/cookies') && (
    <div role='region' aria-label='cookie banner' className="cookie-banner">
      <div className="cookie-banner__wrapper">
        <div className="cookie-banner__text-wrapper">
          <h2 className="cookie-banner__heading">We'd like to set analytics cookies - is that ok?</h2>
          <p>Analytics cookies help us understand how our website is being used.</p>
        </div>

        <div className="cookie-banner__buttons">
          <button className="cookie-banner__button" onClick={acceptCookies}>Accept analytics cookies</button>
          <button className="cookie-banner__button" onClick={rejectCookies}>Reject analytics cookies</button>
        </div>
      </div>
    </div>
  ) || null
}

export function cookieExpiry() {
  const date = new Date();
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year expiry
  return date.toUTCString();
}

export function getCookie(name) {
  const nameEQ = name + '='
  const cookies = document.cookie.split(';')

  for (let i = 0, len = cookies.length; i < len; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length)
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length)
    }
  }
  return false
}

export function deleteAllCookies() {
  // Delete all previously set cookies
  document.cookie.split(';').forEach(function(c) {
    document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=' + window.location.hostname + ';';
  });

  // Disable GA, otherwise it sets cookies again
  window['ga-disable-UA-181888970-2'] = true;
  window['ga-disable-G-Q3YFKQ1M65'] = true;
}