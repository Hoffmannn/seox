import { useState } from "react";
import { NavMenu } from "../NavMenu/NavMenu";
import styles from "./styles.module.scss";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <>
      <header className={styles.headerContainer}>
        <img
          src="/header-nav-button.svg"
          alt="Navigation button"
          className={styles.navButton}
          onClick={() => toggleNav()}
        />
        <p className={styles.logo}>Logo</p>

        <div className={styles.barraPesquisa}>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="O que você procura hoje?"
          />
          <a href="#">
            <img src="/search.svg" alt="Pesquisar" />
          </a>
        </div>

        <a href="#">Comprar</a>

        <div className={styles.carrinhoEUsuario}>
          <a href="#" className={styles.carrinho}>
            <img src="header-cart.svg" alt="Carrinho" />
          </a>

          <img className={styles.pessoa} src="person.svg" alt="Pessoa" />
          <span>Olá, Jaqueline</span>
        </div>
      </header>

      <div className={`${styles.navMenu} ${isNavOpen ? styles.visible : ""}`}>
        <NavMenu />
      </div>
    </>
  );
}
