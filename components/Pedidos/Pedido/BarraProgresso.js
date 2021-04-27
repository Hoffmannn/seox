import styles from "./barraprogresso.module.scss";

export function BarraProgresso({ status, andamento }) {
  console.log(status);
  return (
    <div
      className={`${styles.progresso} 
      ${status == 0 ? styles.recebido : ""}
      ${status == 1 ? styles.aprovado : ""}
      ${status == 2 ? styles.separacao : ""}
      ${status == 3 ? styles.aCaminho : ""}
      ${status == 4 ? styles.entregue : ""}
      `}
    >
      <div className={styles.barraProgresso}>
        <div className={styles.progressoCompleto}></div>
      </div>
      <div>
        <div className={styles.recebido}>
          {status == 0 && <img src="pedido-recebido.svg" />}
        </div>
        <div className={styles.aprovado}>
          {status == 1 && <img src="pedido-aprovado.svg" />}
        </div>
        <div className={styles.separacao}>
          {status == 2 && <img src="pedido-separação.svg" />}
        </div>
        <div className={styles.aCaminho}>
          {status == 3 && <img src="pedido-caminho.svg" />}
        </div>
        <div className={styles.entregue}>
          {status == 4 && <img src="pedido-entregue.svg" />}
        </div>
      </div>

      <div className={styles.horariosStatus}>
        <div>
          <p>Pedido recebido</p>
          <span>{andamento.pedidoRecebido}</span>
        </div>
        <div>
          <p>Pedido aprovado</p>
          <span>{andamento.pagamentoAprovado}</span>
        </div>
        <div>
          <p>Em separação</p>
          <span>{andamento.emSeparacao}</span>
        </div>
        <div>
          <p>Em transporte</p>
          <span>{andamento.emTransporte}</span>
        </div>
        <div>
          <p>Pedido entregue</p>
          <span>{andamento.pedidoEntregue}</span>
        </div>
      </div>
    </div>
  );
}
