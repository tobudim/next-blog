import Head from "next/head";
import Link from "next/link";

import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

const name = "Dimitri Bourreau";

export default function Layout({ children, home, blogPost }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dimitri Bourreau : développeur front-end"
        />
        <meta
          name="og:title"
          content="Dimitri Bourreau : Développeur front-end"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.navBar}>
          <ul>
            <li>
              <Link href="/">
                <a>Dimitri Bourreau</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        {home && (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h2>Dimitri : développeur Bordelais</h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {blogPost && (
        <div className={styles.backToHome}>
          <Link href="/blog/">
            <a>← Revenir à la liste des articles</a>
          </Link>
        </div>
      )}
    </div>
  );
}
