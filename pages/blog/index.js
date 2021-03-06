import Head from "next/head";
import Link from "next/link";

import Date from "../../components/date";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps() {
  const yearSortedPosts = getSortedPostsData(true);
  return { props: { yearSortedPosts } };
}

export default function Home({ yearSortedPosts }) {
  return (
    <Layout blogIndex>
      <Head>
        <title>Dimitri Bourreau : Blog</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h2>
          Blog de Dimitri Bourreau{" "}
          <a
            className={utilStyles.rssLink}
            href="https://dimitribourreau.me/rss.xml"
          >
            Flux RSS
          </a>
        </h2>
        <p>Indépendance numérique, programmation et partage.</p>
      </section>

      <section className={`${utilStyles.headingMùd} ${utilStyles.padding1px}`}>
        {Object.keys(yearSortedPosts).map((year) => (
          <div key={year}>
            <h3>{year}</h3>
            <ul className={utilStyles.list}>
              {yearSortedPosts[year].map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href="/blog/[id]" as={`/blog/${id}`}>
                    <a>
                      {title}
                      <small
                        className={utilStyles.lightText}
                        style={{ marginLeft: "15px" }}
                      >
                        <Date dateString={date} />
                      </small>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <hr className={utilStyles.divider} />
        <small className={utilStyles.lightText}>
          Ce blog, fièrement, ni ne vous traque, ni ne transmet votre visite et
          ses détails à quiconque.
        </small>
      </section>
    </Layout>
  );
}
