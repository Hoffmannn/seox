import styles from "./item.module.scss";

export function Item({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.imagem} alt="" />
      <div>
        <div>
          <p className={styles.nome}>{item.nome}</p>
          <p className={styles.preco}>{item.precoFormatado}</p>
        </div>

        <div>
          <p className={styles.quantidade}>
            {item.quantidadeFormatada}{" "}
            {item.quantidade == 1 ? "unidade" : "unidades"}
          </p>
          <p className={styles.cor}>Cor: {item.cor}</p>
          <p className={styles.tamanho}> Tamanho: {item.tamanho}</p>
        </div>
      </div>
      <div className={styles.avalie}>
        <img src="item-estrela.svg" alt="Avalie" />
        <p>Avalie este produto</p>
      </div>
    </div>
  );
}
