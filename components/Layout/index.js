import { Meta, Header, Footer, Showcase } from "..";
import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";

const Layout = ({ title, description, keywords, children }) => {
  const router = useRouter();
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
