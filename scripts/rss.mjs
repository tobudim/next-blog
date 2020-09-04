import fs from "fs";
import path from "path";

import { getSortedPostsData } from "../lib/posts.js";

Rss();

export default function Rss(req, res) {
  const xmlRss = getXml();
  return fs.writeFileSync(
    path.join(__dirname, "..", "public", "feed.xml"),
    xmlRss
  );
}

function getXml() {
  let xml = "";
  const posts = getSortedPostsData();
  xml += `
    <?xml version="1.0" ?>
    <rss version="2.0">
      <channel>
        <title>Blog de Dimitri Bourreau</title>
        <link>https://dimitribourreau.com</link>
        <description>Indépendance numérique, programmation et partage.</description>
        <language>fr</language>
        <lastBuildDate></lastBuildDate>
  `;
  posts.forEach((post) => {
    console.log(post);
  });
  xml += `
      </channel>
    </rss>
  `;
  return xml;
}

// const blogPostsRssXml = (blogPosts) => {
//   let latestPostDate = "";
//   let rssItemsXml = "";
//   blogPosts.forEach((post) => {
//     const postDate = Date.parse(post.createdAt);
//     if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
//       latestPostDate = post.createdAt;
//     }
//     rssItemsXml += `
//       <item>
//         <title>${post.title}</title>
//         <link>
//           ${post.href}
//         </link>

//         <pubDate>${post.createdAt}</pubDate>
//         <description>
//         <![CDATA[${post.text}]]>
//         </description>
//     </item>`;
//   });
//   return {
//     rssItemsXml,
//     latestPostDate,
//   };
// };
