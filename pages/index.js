import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </section>
    </Layout>
  );
}
