import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import data from "../../pedidos.json";
import { Pedido } from "./Pedido/Pedido";
import styles from "./styles.module.scss";

export function Pedidos() {
  const pedidos = data.map((pedido) => {
    const itens = pedido.itens.map((item) => {
      const quantidadeFormatada = item.quantidade.toString().padStart(2, "0");
      return {
        ...item,
        quantidadeFormatada,
        precoFormatado: item.valor.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
      };
    });

    const pedidoRecebido = format(
      new Date(pedido.andamentoStatus.pedidoRecebido),
      "dd/MMM/ kk:mm",
      {
        locale: ptBR,
      }
    );

    const pagamentoAprovado = format(
      new Date(pedido.andamentoStatus.pagamentoAprovado),
      "dd/MMM/ kk:mm",
      {
        locale: ptBR,
      }
    );

    const emSeparacao = format(
      new Date(pedido.andamentoStatus.emSeparacao),
      "dd/MMM/ kk:mm",
      {
        locale: ptBR,
      }
    );

    const emTransporte = format(
      new Date(pedido.andamentoStatus.emTransporte),
      "dd/MMM/ kk:mm",
      {
        locale: ptBR,
      }
    );

    const pedidoEntregue = format(
      new Date(pedido.andamentoStatus.pedidoEntregue),
      "dd/MMM/ kk:mm",
      {
        locale: ptBR,
      }
    );

    const andamentoStatus = {
      pedidoRecebido,
      pagamentoAprovado,
      emSeparacao,
      emTransporte,
      pedidoEntregue,
    };

    return {
      ...pedido,
      itens,
      andamentoStatus,
      freteFormatado: pedido.frete.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
      valorFormatado: pedido.valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
    };
  });
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Meus pedidos</h2>
      <section>
        {pedidos.map((pedido) => {
          return <Pedido pedido={pedido} />;
        })}
      </section>
    </div>
  );
}
