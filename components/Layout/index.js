import { Meta, Header, Footer } from "..";
import styles from "../../styles/Layout.module.css";

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
