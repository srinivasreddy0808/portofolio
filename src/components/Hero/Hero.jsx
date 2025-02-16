import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <img
          src="./profile.jpg"
          alt="Profile"
          className={styles.profileImage}
        />
        <h1 className={styles.title}> I am Srinivasreddy </h1>
        <p className={styles.subtitle}>Full Stack Developer</p>
        <a href="#projects" className={styles.ctaButton}>
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
