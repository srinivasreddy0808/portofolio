import { FiDownload } from "react-icons/fi";
import styles from "./About.module.css";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src="./profile.jpg" alt="Working" className={styles.image} />
          </div>
          <div className={styles.text}>
            <p>
              I&#39; m a passionate Full Stack Developer with 3 months of
              internship experience in building web applications. I specialize
              in React, Node.js, and modern web technologies.
            </p>
            <p>
              My journey in tech started when I built my first website at the my
              seconde year of college. Since then, I&#39; ve worked with various
              projects and different fields, delivering scalable solutions.
            </p>
            <button
              className={styles.downloadButton}
              onClick={handleDownloadCV}
            >
              <FiDownload />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
