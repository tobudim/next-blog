import Layout from "../components/layout";
import { getHomeIntro } from "../lib/posts";

export default function Home() {
  const intro = getHomeIntro("homepage-intro");
  return (
    <Layout home>
      <p>
        Développeur front-end Node.js, React.js et Vue.js.{" "}
        <span role="img" aria-label="developer">
          👨‍💻
        </span>
      </p>
      {intro}
    </Layout>
  );
}
