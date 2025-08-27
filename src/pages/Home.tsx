export default function Home() {
  return (
    <div>
      {/* Hero */}
      <header className="hero text-center">
        <div className="hero-content">
          <img
            src="/img/Capa-ScoreTurbo.png"
            alt="Capa Score Turbo 1000"
            className="hero-image mx-auto"
          />
          <h1 className="text-3xl font-bold mt-4">Score Turbo 1000®</h1>
          <p className="mt-2">
            Aprenda educação financeira e descubra como melhorar seu histórico de crédito.
          </p>

          <p className="info-text mt-4">
            Após o pagamento aprovado, você receberá o produto digital no seu
            e-mail em até 2 horas. Caso não receba, envie o comprovante para{" "}
            <strong>chfdigital4@gmail.com</strong> ou no WhatsApp{" "}
            <strong>(11) 96636-5271</strong>.
          </p>
        </div>
      </header>

      {/* Benefícios */}
      <section className="benefits mt-8">
        <h2 className="text-2xl font-semibold mb-4">Benefícios</h2>
        <div className="benefit-list grid gap-4">
          <div className="benefit-card p-4 shadow rounded bg-white">
            <h3>✔️ Educação Financeira</h3>
            <p>Entenda como funciona o score de crédito e como organizá-lo.</p>
          </div>
          <div className="benefit-card p-4 shadow rounded bg-white">
            <h3>✔️ Mais Oportunidades</h3>
            <p>Aumente suas chances de aprovação ao manter seu CPF saudável.</p>
          </div>
          <div className="benefit-card p-4 shadow rounded bg-white">
            <h3>✔️ Segurança</h3>
            <p>Conteúdo 100% legal e baseado em práticas de mercado.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta text-center mt-12">
        <h2 className="text-xl font-bold">
          Não perca a chance de mudar sua vida financeira
        </h2>
        <p className="mt-2">
          De <span className="old-price line-through">R$ 87,90</span> por apenas{" "}
          <span className="new-price text-green-600 font-bold">R$ 29,90</span> até o fim do mês!
        </p>
        <a
          href="https://pag.ae/7_Zi-W1r7"
          className="cta-button inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero aprender agora
        </a>
      </section>
    </div>
  );
}
