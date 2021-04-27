import styles from "./styles.module.scss";

export function NavMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="person.svg" alt="Avatar" className={styles.iconeAvatar} />

        <div className={styles.alterarFoto}>
          <img src="nav-camera.svg" alt="Alterar foto" />
        </div>
      </div>

      <h3 className={styles.nome}>Jaqueline de Oliveira</h3>

      <ul className={styles.links}>
        <li className={styles.active}>
          <a href="#">
            <img src="pedidos.svg" alt="Meus pedidos" />
            <span>Meus pedidos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="person.svg" alt="Meus dados" />
            Meus dados
          </a>
        </li>
        <li>
          <a href="#">
            <img src="nav-enderecos.svg" alt="Endereços" />
            Endereços
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img src="nav-medidas.svg" alt="Minhas medidas" />
            Minhas medidas
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img src="nav-conta.svg" alt="Minha conta" />
            Minha conta
          </a>
        </li>
        <li>
          <a href="#" aria-disabled>
            <img src="nav-sair.svg" alt="Sair" />
            Sair
          </a>
        </li>
      </ul>
    </div>
  );
}
