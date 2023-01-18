import styles from "./img.module.css";

const ImgAction = ({ numero }) => {
  return (
    <img
      src={`/img/dice-${numero}.png`}
      className={styles.img}
      alt="numero tal do dados"
    />
  );
};
export default ImgAction;
