import { useEffect, useState } from "react";
import { BarraProgresso } from "./BarraProgresso";
import { Item } from "./Item";
import styles from "./pedido.module.scss";
export function Pedido({ pedido }) {
  //   Status de entrega:
  //    recebido:  0,
  //    aprovado:  1,
  //    separacao: 2,
  //    a caminho: 3,
  //    entregue:  4,
  //    cancelado: 5

  const [status, setStatus] = useState("");
  const [textoStatus, setTextoStatus] = useState("");
  const [isPedidoOpen, setIsPedidoOpen] = useState(false);
  function togglePedido() {
    setIsPedidoOpen(!isPedidoOpen);
  }

  function getStatus() {
    switch (pedido.status) {
      case 0:
        setStatus("recebido");
        setTextoStatus("O pedido foi recebido");
        break;
      case 1:
        setStatus("aprovado");
        setTextoStatus("O pagamento foi aprovado!");
        break;
      case 2:
        setStatus("separação");
        setTextoStatus("Seu pedido está em separação");
        break;
      case 3:
        setStatus("caminho");
        setTextoStatus("Seu pedido está a caminho");
        break;
      case 4:
        setStatus("entregue");
        setTextoStatus("Pedido entregue!");
        break;
      case 5:
        setStatus("cancelado");
        setTextoStatus("Seu pedido foi cancelado");
        break;
    }
  }

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div
      className={`${styles.container} 
      ${isPedidoOpen ? styles.active : ""}
      ${pedido.status == 0 ? styles.recebido : ""}
      ${pedido.status == 1 ? styles.aprovado : ""}
      ${pedido.status == 2 ? styles.separacao : ""}
      ${pedido.status == 3 ? styles.aCaminho : ""}
      ${pedido.status == 4 ? styles.entregue : ""}
      ${pedido.status == 5 ? styles.cancelado : ""}`}
    >
      <div className={styles.statusPedido}>
        <img src={`pedido-${status}.svg`} alt={`Pedido ${status}`} />
        <div>
          <div>
            <img src="pedidos.svg" alt="" />
            <p>Pedido #{pedido.codigo}</p>
          </div>
          <span>{textoStatus}</span>
        </div>
      </div>

      <div className={styles.iconesEValor}>
        <div className={styles.iconesItens}>
          <img src={pedido.itens[0].imagem} className={styles.primeiroItem} />
          {pedido.itens.length > 1 && (
            <img src={pedido.itens[1].imagem} className={styles.segundoItem} />
          )}
          {pedido.itens.length > 2 && (
            <img src="pedido-mais-itens.svg" className={styles.maisItens} />
          )}
        </div>
        <div className={styles.valorPedido}>
          {pedido.valorFormatado}
          <span>
            {pedido.itens.length == 1 && "1 item"}
            {pedido.itens.length > 1 && `${pedido.itens.length} itens`}
          </span>
        </div>
      </div>

      <div className={styles.botaoDetalhes}>
        <button onClick={() => togglePedido()}>
          <span>Mais detalhes</span>
          <img src="seta.svg" />
        </button>
      </div>

      <div className={styles.maisDetalhes}>
        <div className={styles.frete}>
          <img src="pedido-frete.svg" />
          <div>
            <p>Frete:</p>
            <p>
              <span>{pedido.freteFormatado}</span>
              <span>via {pedido.tipoFrete}</span>
            </p>
          </div>
        </div>
        <div className={styles.formaPagamento}>
          <p>Forma de Pagamento:</p>
          <p>{pedido.formaPagamento}</p>
        </div>

        {pedido.status != 5 && (
          <div className={styles.statusEntrega}>
            {pedido.status == 4 && (
              <div className={styles.entregue}>
                <p>Entregue dia:</p>
                <p className={styles.dataEntrega}>{pedido.dataEntrega}</p>
              </div>
            )}
            {pedido.status != 4 && (
              <button className={styles.codigoRastreamento}>
                <img
                  src="pedido-copiar-rastreamento.svg"
                  alt="Copiar código de rastreamento"
                />
                <span>{pedido.codigoRastreamento}</span>
              </button>
            )}
            <button>
              <img src="pedido-mais.svg" />
            </button>
          </div>
        )}
      </div>

      {pedido.status != 5 && (
        <BarraProgresso
          status={pedido.status}
          andamento={pedido.andamentoStatus}
        />
      )}

      <div className={styles.itens}>
        {pedido.itens.map((item) => {
          return <Item item={item} />;
        })}
      </div>
    </div>
  );
}
