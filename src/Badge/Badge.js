import React from "react";
import styles from "./Badge.module.css";

const Badge = (props) => {
  const { label, className } = props;
  return <span className={`${styles.badge} ${className}`}>{label}</span>;
};

export default Badge;
