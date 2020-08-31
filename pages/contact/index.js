import Layout from "../../components/layout";
import contactStyles from "../../styles/contact.module.css";
import utilsStyles from "../../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout contact>
      <h1>Contact</h1>

      <p>Vous pouvez me joindre en passant par ici :</p>
      <p>
        <ul className={`${utilsStyles.list} ${contactStyles.contactList}`}>
          <li className={utilsStyles.listItem}>
            <a href="https://www.linkedin.com/in/dimitri-bourreau-94a4b3151/">
              <img src="/images/linkedin.png" alt="LinkedIn logo" />
            </a>
          </li>
          <li>
            <a href="https://www.malt.fr/profile/dimitribourreau">
              <img src="/images/malt.png" alt="Malt logo" />
            </a>
          </li>
        </ul>
      </p>
    </Layout>
  );
}
