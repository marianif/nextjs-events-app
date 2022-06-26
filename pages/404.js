import { Layout } from "../components";
import { FaExclamationTriangle } from "react-icons/fa";
import styles from "@/styles/404.module.css";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <p>Sorry there is nothing here</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
