import React from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
const FooterView = ({ version }) => {
  return (
    <div className={clsx(`fixed-bottom container-flaut   ${styles.footer}`)}>
      <p className={clsx(`text-end pt-2 ${styles.textColor}`)}>
        API Version: {version}
      </p>
    </div>
  );
};

export default FooterView;
