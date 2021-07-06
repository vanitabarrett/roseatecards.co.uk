const fs = require("fs");
const prettier = require("prettier");
const FileHound = require('filehound');

const files = FileHound.create()
  .paths('dist')
  .ext('html')
  .find();

const TOP_LEVEL_PATH = ["/"];
const MID_LEVEL_PATH = ["/cards", "/contact", "/privacy-policy", "/accessibility", "/wedding", "/our-papers", "/cookies", "/newsletter-signup", "/gifts"];

files.then(function(paths) {
  const pagesSitemap = paths.map(pathItem => {
    let path = pathItem.replace("dist", "").replace(".html", "")

    // Handle homepage
    if (path === "/index") {
      path = "/"
    }

    // Set prorities
    let priority = "0.64"

    if (TOP_LEVEL_PATH.indexOf(path) != "-1") {
      priority = "1.00"
    } else if (MID_LEVEL_PATH.indexOf(path) != "-1") {
      priority = "0.80"
    }

    return `
          <url>
            <loc>https://roseatecards.co.uk${path}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>${priority}</priority>
          </url>
        `;
  }).join("")

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formatted = sitemap => prettier.format(sitemap, { parser: "html" });
  const formattedSitemap = [formatted(generatedSitemap)];
  fs.writeFileSync("dist/sitemap.xml", formattedSitemap, "utf8");
});
