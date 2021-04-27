import styles from "../styles/Home.module.scss";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Pedidos } from "../components/Pedidos/Pedidos";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seox</title>
      </Head>
      <Header />
      <Pedidos />
      <Footer />
    </div>
  );
}
