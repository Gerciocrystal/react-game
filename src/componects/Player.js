import styles from "./Player.module.css";
const Player = ({ type, current, score }) => {
  return (
    <section className={`${styles.section_container} ${styles[type]}`}>
      <div className={styles.name}>Player 1</div>
      <span className={styles.score}>{score}</span>

      <div className={styles.current}>
        <div className={styles.current__label}>current</div>
        <div className={styles.current__score}>{current}</div>
      </div>
    </section>
  );
};
export default Player;
