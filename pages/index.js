import Head from "next/head";

import Layout from "../components/layout";
import { getPostData } from "../lib/posts";

export async function getStaticProps() {
  const intro = await getPostData("intro");
  return {
    props: {
      intro,
    },
  };
}

export default function Home({ intro }) {
  return (
    <Layout home>
      <Head>
        <title>Dimitri Bourreau : Développeur front-end</title>
      </Head>

      <div dangerouslySetInnerHTML={{ __html: intro.contentHtml }} />
    </Layout>
  );
}
