import "../styles/globals.scss";
import { Header } from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
