import Head from "next/head";

import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import postStyles from "../../styles/blogPost.module.css";
import { markdownBody } from "../../styles/markdown.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout blogPost>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div
          className={`${postStyles.postContent} ${markdownBody}`}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
