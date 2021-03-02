import cn from "classnames";
import KwentaLogo from "@components/icons/icon-platform";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={cn(styles.footer)}>
      <div className={styles["footer-legal"]}>
        <div className={styles["footer-copyright"]}></div>
      </div>
    </footer>
  );
}
