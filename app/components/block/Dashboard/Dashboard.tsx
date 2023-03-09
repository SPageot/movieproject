import React from "react";
import styles from "./dashboard.module.css";

function Dashboard({ children }) {
  return <section className={styles.dashboard_container}>{children}</section>;
}

export { Dashboard };
