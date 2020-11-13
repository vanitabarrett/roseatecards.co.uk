# roseatecards.co.uk

This is a [Next.js](https://nextjs.org/) website for roseatecards.co.uk.

## Getting Started

First, you'll need to get the shop data from Etsy, using your Etsy API key and the `generate-shop-data` npm command, e.g.:

```bash
ETSY_API_KEY=1234567890 npm run generate-shop-data
```

This will get the first 100 listings from Etsy and for each, split it into separate listings if the listing contains an [allowed variation](./scripts/generateShopData.js#4). It will also put all the listings into their respective categories and sub-categories, based on a tag in the format `Category--Sub Category`, extract image descriptions from the product description and output this to [shop-data.json](./shop-data.json);

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

When you edit a page, it auto-updates in the browser.

## More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
