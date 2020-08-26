const { getSortedPostsData } = require("../lib/posts");

export default function generateRssFeed() {
  const posts = getSortedPostsData();
  let feed = `
		<?xml version="1.0" ?>
			<rss version="2.0">
				<channel>
						<title>La suite logique</title>
						<link>https://www.lasuitelogique.com</link>
						<description>Indépendance numérique, programmation et partage.</description>
						<language>fr</language>
	`;
  // <lastBuildDate>${latestPostDate}</lastBuildDate>

  posts.forEach((post) => {
    return `
			<item>
				<title>${post.title}</title>
			</item>
		`;
  });

  feed += `
				</channel>
			</rss>
	`;

  return feed;
}
