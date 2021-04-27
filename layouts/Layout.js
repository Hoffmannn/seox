import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
