import React from "react";
import styles from "./styles.module.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.main}>{children}</main>;
};

export default RootLayout;
