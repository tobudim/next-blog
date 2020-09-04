import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>404 - Page inconnue</h1>
      <Link href="/">
        <a>
          <h3>Revenir à l&apos;accueil</h3>
        </a>
      </Link>
    </Layout>
  );
}
