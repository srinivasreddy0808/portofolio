import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "John Doe",
    role: "Tech Lead at TechCorp",
    content: "An exceptional developer with strong problem-solving skills.",
    image: "./nagaseshu1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Project Manager at DevFirm",
    content: "Delivers high-quality code consistently and meets deadlines.",
    image: "./group1.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.header}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.image}
                />
                <div>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
              <p className={styles.content}>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
