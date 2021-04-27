import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";

export function NavMenu() {
  const [abaAtiva, setAbaAtiva] = useState("");
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
        <li
          className={abaAtiva == "" && styles.active}
          onClick={() => setAbaAtiva("")}
        >
          <Link href="/">
            <a>
              <img src="pedidos.svg" alt="Meus pedidos" />
              <span>Meus pedidos</span>
            </a>
          </Link>
        </li>
        <li
          className={abaAtiva == "dados" && styles.active}
          onClick={() => setAbaAtiva("dados")}
        >
          <Link href="/dados">
            <a>
              <img src="person.svg" alt="Meus dados" />
              Meus dados
            </a>
          </Link>
        </li>
        <li
          className={abaAtiva == "enderecos" && styles.active}
          onClick={() => setAbaAtiva("enderecos")}
        >
          <Link href="/enderecos">
            <a>
              <img src="nav-enderecos.svg" alt="Endereços" />
              Endereços
            </a>
          </Link>
        </li>
        <li
          className={abaAtiva == "medidas" && styles.active}
          onClick={() => setAbaAtiva("medidas")}
        >
          <Link href="/medidas">
            <a>
              {" "}
              <img src="nav-medidas.svg" alt="Minhas medidas" />
              Minhas medidas
            </a>
          </Link>
        </li>
        <li
          className={abaAtiva == "conta" && styles.active}
          onClick={() => setAbaAtiva("conta")}
        >
          <Link href="/conta">
            <a>
              {" "}
              <img src="nav-conta.svg" alt="Minha conta" />
              Minha conta
            </a>
          </Link>
        </li>
        <li>
          <a className={styles.sair}>
            <img src="nav-sair.svg" alt="Sair" />
            Sair
          </a>
        </li>
      </ul>
    </div>
  );
}
