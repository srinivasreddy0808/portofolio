import styles from "./Projects.module.css";

const projects = [
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    image:
      "https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1684330691489-2eb2620db612?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["javascript", "React", "Node.js", "express.js"],
    demo: "https://promanage-todo.vercel.app/login",
    github: "https://github.com/srinivasreddy0808/frontend-todo-management",
  },
  {
    title: "Interactive Web Story Platform",
    description:
      "A Interactive Web Story Platform where users can create and read stories",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
    technologies: ["React", "Node.js", "MongoDB", "express.js"],
    demo: "https://the-web-stories.vercel.app/",
    github: "https://github.com/srinivasreddy0808/the-web-stories",
  },
  {
    title: "Ultimate Quiz Management App",
    description:
      "Ultimate Quiz Management App where users can create and read quizzes and track analytics of quiz",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["Node.js", "React", "vite", "express.js"],
    demo: "https://quizzze.vercel.app/",
    github: "https://github.com/srinivasreddy0808/frontend-quiz-management",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.demo} className={styles.link}>
                    Live Demo
                  </a>
                  <a href={project.github} className={styles.link}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
