import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import styles from "./Contact.module.css";

const Contact = () => {
  const handleSendMessage = () => {
    alert("Message sent successfully!");
  };
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <div className={styles.grid}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input type="email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea rows="4" className={styles.textarea}></textarea>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              onClick={handleSendMessage}
            >
              Send Message
            </button>
          </form>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoText}>
              <FiMail className={styles.icon} />
              srinivasreddybrockk@example.com
            </p>
            <h3 className={styles.infoTitle}>Social Links</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/srinivasreddy0808"
                className={styles.socialLink}
              >
                <FiGithub className={styles.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/srinivasreddy-gujjula-a45b21267"
                className={styles.socialLink}
              >
                <FiLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
