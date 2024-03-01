//This is a structural component not a functional one .
import styles from "./bodycontainer.module.css";

export default function BodyContainer({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
