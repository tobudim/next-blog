import Head from "next/head";
import Link from "next/link";

import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

const name = "Dimitri Bourreau";
export const siteTitle = "Dimitri Bourreau : Développeur front-end";

export default function Layout({ children, home, blogIndex, blogPost }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dimitri Bourreau : développeur front-end"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home & <h1>{name}</h1>}

        {blogIndex &
        (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}

        {blogPost &
        (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {blogPost &
      (
        <div className={styles.backToHome}>
          <Link href="/blog/">
            <a>← Revenir à la liste des articles</a>
          </Link>
        </div>
      )}
    </div>
  );
}
