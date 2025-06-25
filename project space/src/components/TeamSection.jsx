import styles from './TeamSection.module.css';

const teamMembers = [
  { name: "John Doe", role: "Electronic Expert", image: "team-1.jpg" },
  { name: "Jane Smith", role: "Circuit Designer", image: "team-2.jpg" },
  { name: "Alex Johnson", role: "Systems Engineer", image: "team-3.jpg" },
  { name: "Emily Brown", role: "Tech Lead", image: "team-4.jpg" },
];

const TeamSection = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Our <span className={styles.titleHighlight}>EXPERT</span> Team
    </h1>
    <div className={styles.grid}>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.card} style={{ '--index': index }}>
          <img src={member.image} alt={member.name} className={styles.image} />
          <h3 className={styles.name}>{member.name}</h3>
          <p className={styles.role}>{member.role}</p>
          <div className={styles.socialLinks}>
            <a href="#" className={`${styles.socialIcon} ${styles.facebook}`}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={`${styles.socialIcon} ${styles.twitter}`}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={`${styles.socialIcon} ${styles.instagram}`}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={`${styles.socialIcon} ${styles.linkedin}`}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TeamSection;