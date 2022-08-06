import React from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
const Footer = () => {
  return (
    <div className={clsx(`fixed-bottom container-flaut   ${styles.footer}`)}>
      <p className={clsx(`text-end pt-2 ${styles.textColor}`)}>Footer</p>
    </div>
  );
};

export default Footer;
