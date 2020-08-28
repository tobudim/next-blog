import Head from "next/head";
import Link from "next/link";

import Date from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Home({ allPostsData }) {
  return (
    <Layout blogIndex>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Blog de Dimitri Bourreau</h2>
        <p>Indépendance numérique, programmation et partage.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Articles</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

        <hr />
        <small className={utilStyles.lightText}>
          Ce blog, fièrement, ni ne vous traque, ni ne transmet votre visite et
          ses détails aux GAFAM.
        </small>
      </section>
    </Layout>
  );
}
