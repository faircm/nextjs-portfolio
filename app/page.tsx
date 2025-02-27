import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Hi, I'm Chris.</p>
        <ul>
          <li>Software Engineer</li>
          <li>Portfolio-haver (pending)</li>
          <li>Node.js, Next.js, React, ASP.NET, SQL, MongoDB</li>
        </ul>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://linkedin.com/in/cmfairchild/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert_effect"
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={20}
            height={20}
          />
          Linkedin
        </a>
        <a
          href="https://medium.com/@fair-cm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert_effect"
            aria-hidden
            src="/medium.svg"
            alt="Medium icon"
            width={20}
            height={20}
          />
          Medium
        </a>
        <a
          href="https://github.com/faircm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert_effect"
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={20}
            height={20}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
