import fs from "fs";
import matter from "gray-matter";
import path from "path";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(sortByYear) {
  const fileNames = fs.readdirSync(postsDirectory);

  let allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return { id, ...matterResult.data };
  });

  if (sortByYear) {
    let yearSortedPosts = {};
    allPostsData.forEach((post) => {
      const { date } = post;
      const year = date.slice(0, 4);
      if (typeof yearSortedPosts[year] === "undefined")
        return (yearSortedPosts[year] = [post]);
      return yearSortedPosts[year].push(post);
    });
    for (let year in yearSortedPosts) {
      yearSortedPosts[year] = sortByDate(yearSortedPosts[year]);
    }
    return yearSortedPosts;
  }

  return sortByDate(allPostsData);
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  let postPath = path.join(postsDirectory, `${id}.md`);
  if (id === "intro") postPath = path.join(process.cwd(), "pages", "intro.md");
  const fileContents = fs.readFileSync(postPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    ...matterResult.data,
    contentHtml,
  };
}

function sortByDate(postsArray) {
  return postsArray.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}
