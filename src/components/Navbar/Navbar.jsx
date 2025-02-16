import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Portfolio</div>

        <div className={styles.menu}>
          <a
            href="#home"
            className={activeSection === "home" ? styles.active : ""}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? styles.active : ""}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? styles.active : ""}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? styles.active : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? styles.active : ""}
          >
            Contact
          </a>
        </div>

        <div className={styles.mobileMenu}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string,
};

export default Navbar;
