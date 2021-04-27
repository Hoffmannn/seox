import styles from "../styles/Home.module.scss";
import Head from "next/head";
import { Pedidos } from "../components/Pedidos/Pedidos";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seox</title>
      </Head>
      <Pedidos />
    </div>
  );
}
