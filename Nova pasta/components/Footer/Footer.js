import styles from "./styles.module.scss";
export function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <div>
          <p>Formas de pagamento</p>
          <img src="formas-pagamento.png" alt="Formas de pagamento" />
        </div>
        <div>
          <img src="site-blindado.png" alt="Site Blindado" />
          <img src="reclame-aqui.png" alt="Reclame Aqui" />
          <img src="footer-compra-segura.svg" alt="Compra segura" />
        </div>
      </div>
      <div>
        <p>
          Preços e condições de pagamento exclusivos para compras via Internet.
          Vendas sujeitas à analise e confirmação de dados. Fica garantida a
          empresa a eventual retificação das ofertas e erros de digitação que
          possam ter sido veiculados, podendo ser estornado a compra.
          77.941.490/0225-58 - Gazin Industria e Comercio De Móveis e
          Eletrodomesticos LTDA - ROD PR 082 SN - Centro - CEP: 87485000 -
        </p>
      </div>
    </footer>
  );
}
