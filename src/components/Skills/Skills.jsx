import styles from "./Skills.module.css";

const skills = [
  { name: "HTML5", icon: "🖥️", level: 90 },
  { name: "CSS3", icon: "🎨", level: 85 },
  { name: "JavaScript", icon: "📜", level: 88 },
  { name: "TypeScript", icon: "📘", level: 82 },
  { name: "React", icon: "⚛️", level: 90 },
  { name: "Node.js", icon: "🖥️", level: 85 },
  { name: "express.js", icon: "🚂", level: 80 },
  { name: "mongoDB", icon: "🗄️", level: 88 },
  { name: "java", icon: "☕", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Expertise</h2>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.icon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
