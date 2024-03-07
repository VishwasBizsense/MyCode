import styles from './footer.module.css';

export default function Footer({ doneCount, totalCount }) {
  return <div className={styles.footer}>
    <span className={styles.spanElement}>Completed {doneCount} out of {totalCount} tasks.</span>
  </div>;
}
