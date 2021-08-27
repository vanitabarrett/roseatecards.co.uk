const fs = require("fs");
const shopData = JSON.parse(fs.readFileSync('./shop-data.json', 'utf-8'))

const allProducts = shopData.map(({ subCategories }) => subCategories.map(({ products }) => products).flat()).flat();

const XMLProducts = allProducts.map(( product ) => {
  return `<item>
            <g:id>${product.id}</g:id>
            <g:title>${product.title}</g:title>
            <g:description>${product.description.split('\n')[0]}</g:description>
            <g:link>${product.url}</g:link>
            <g:image_link>${product.images[0]['url_fullxfull']}</g:image_link>
            <g:brand>Roseate Cards</g:brand>
            <g:condition>new</g:condition>
            <g:availability>in stock</g:availability>
            <g:price>${product.price}</g:price>
            <g:shipping>
              <g:country>UK</g:country>
              <g:service>Standard</g:service>
              <g:price>0 GBP</g:price>
            </g:shipping>
          </item>`;
})

const shopXML = `<?xml version="1.0"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Roseate Cards</title>
    <link>https://roseatecards.co.uk/</link>
    <description>Sustainable Greetings Cards and Wedding Stationery</description>
    ${XMLProducts.join('').replace(/&/g, '&amp;')}
  </channel>
</rss>`;

fs.writeFileSync("dist/commerce.xml", shopXML, "utf8");
