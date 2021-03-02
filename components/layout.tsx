import cn from "classnames";
import { SkipNavContent } from "@reach/skip-nav";
import styles from "./layout.module.css";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
};

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
}: Props) {
  return (
    <>
      <div className={styles.background}>
        {!hideNav && (
          <header className={cn(styles.header)}>
            <div className={styles["header-logos"]}>
              <a className={styles.logo}>
                <img src="logo.svg" width="100%" height="100%" />
                <p>Sapper</p>
              </a>
            </div>
            <div className={cn(styles["header-right"])}>
              <a
                href="https://kwenta.io"
                className={cn(styles["footer-link"], styles["footer-logo"])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles["secondary-text"]}>
                  Asset Tracking for{" "}
                  <img src="solana-sol-logo.png" width="20px" height="20px" />
                </div>
              </a>
            </div>
          </header>
        )}
        <div className={styles.page}>
          <main className={styles.main} style={layoutStyles}>
            <SkipNavContent />
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
