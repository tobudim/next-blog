// import { getAllPostsIds } from "../lib/posts";

// export default function Rss(req, res) {
//   res.setHeader("Content-Type", "text/xml");
//   res.write(
//     `<?xml version="1.0" ?>
// 			<rss version="2.0">
// 			<channel>
// 				<title>Blog de Dimitri Bourreau</title>
// 				<link>https://dimitribourreau.com</link>
// 				<description>Indépendance numérique, programmation et partage.</description>
// 				<language>fr</language>
// 				<lastBuildDate></lastBuildDate>
// 			</channel>
// 		`
//   );
// }

// export async function getStaticProps() {
//   const ids = getAllPostsIds();
//   const posts = ids.map(async (id) => await getPostData(id));
//   return {
//     props: {
//       posts,
//     },
//   };
// }

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

// // const getRssXml = (blogPosts) => {
// //   const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);
// //   return `<?xml version="1.0" ?>
// //   <rss version="2.0">
// //     <channel>
// //         <title>Blog by Fredrik Bergqvist</title>
// //         <link>https://www.bergqvist.it</link>
// //         <description>${shortSiteDescription}</description>
// //         <language>en</language>
// //         <lastBuildDate>${latestPostDate}</lastBuildDate>
// //         ${rssItemsXml}
// //     </channel>
// //   </rss>`;
// // };

// // export class Rss extends React.Component {
// //   static async getInitialProps({ res }) {
// //     if (!res) {
// //       return;
// //     }
// //     const blogPosts = getRssBlogPosts();
// //     res.write(getRssXml(blogPosts));
// //     res.end();
// //   }
// // }
