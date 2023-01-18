import styles from "./ActionButtom.module.css";
const ActionButton = ({ estado, name, current, type, onAction }) => {
  const submit = () => {
    if (type === "roll") {
      const newNumber = Math.floor(Math.random() * 6) + 1;
      onAction(newNumber);
      return;
    }
    if (type === "hold") {
      onAction(current);
      return;
    }
    if (type === "new") {
      onAction();
      return;
    }
  };

  return (
    <button
      onClick={submit}
      disabled={estado}
      className={`${styles.btn} ${styles[type]}`}
    >
      {name}
    </button>
  );
};
export default ActionButton;
