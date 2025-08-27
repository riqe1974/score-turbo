import { useEffect } from "react";

export default function App() {
  // Adiciona a tag global do Google Ads
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-11301013487";
    script.async = true;
    document.body.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11301013487');
    `;
    document.body.appendChild(inlineScript);
  }, []);

  return (
    <div>
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <img
            src="/img/Capa-ScoreTurbo.png"
            alt="Capa Score Turbo 1000"
            className="hero-image"
          />
          <h1>Score Turbo 1000®</h1>
          <p>Aprenda estratégias financeiras para organizar seu histórico de crédito.</p>
          <p className="info-text">
            Após o pagamento aprovado, você receberá o produto digital no seu
            e-mail em até 2 horas. Caso não receba, envie o comprovante para{" "}
            <strong>chfdigital4@gmail.com</strong> ou no WhatsApp{" "}
            <strong>(11) 96636-5271</strong>.
          </p>
          
        </div>
      </header>

      {/* Benefícios */}
      <section className="benefits">
        <h2>Benefícios</h2>
        <div className="benefit-list">
          <div className="benefit-card">
            <h3>✔️ Descubra técnicas que podem ajudar a melhorar sua relação com o crédito.</h3>
            <p>Ganhe até +200 pontos no seu score em poucas semanas.</p>
          </div>
          <div className="benefit-card">
            <h3>✔️ Crédito Liberado</h3>
            <p>
              Mais chances de aprovação em cartões, empréstimos e financiamentos.
            </p>
          </div>
          <div className="benefit-card">
            <h3>✔️ Segurança</h3>
            <p>Metodologia validada, sem golpes ou atalhos ilegais.</p>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="how-it-works">
        <h2>Como Funciona</h2>
        <ol>
          <li>1️⃣ Você acessa o material exclusivo após a compra.</li>
          <li>2️⃣ Segue os passos simples e práticos.</li>
          <li>3️⃣ Em poucas semanas você já entende melhor como funciona o score.</li>
        </ol>
      </section>

      {/* Depoimentos */}
      <section className="testimonials">
        <h2>O que nossos clientes dizem</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <img src="/img/Tonja-King.png" alt="Cliente 1" loading="lazy" />
            <p>"Aprendi a organizar minhas finanças e entendi melhor meu score!" – Maria</p>
          </div>
          <div className="testimonial">
            <img src="/img/Scott-Clearman.png" alt="Cliente 2" loading="lazy" />
            <p>"Consegui aprovação rápida no financiamento." – João</p>
          </div>
          <div className="testimonial">
            <img src="/img/Geneve.png" alt="Cliente 4" loading="lazy" />
            <p>"Minha empresa conseguiu crédito em tempo recorde!" – Carla</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>📈 Em quanto tempo vejo resultados?</h3>
            <p>Normalmente entre 30 a 60 dias, dependendo do seu histórico.</p>
          </div>
          <div className="faq-item">
            <h3>🔒 É seguro?</h3>
            <p>Sim! Utilizamos apenas métodos legais e seguros.</p>
          </div>
          <div className="faq-item">
            <h3>💳 Posso pagar no cartão?</h3>
            <p>Sim, aceitamos cartão, Pix e boleto via PagSeguro.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <footer className="footer-cta">
        <h2>Não perca a chance de mudar sua vida financeira</h2>
        <p>
          De <span className="old-price">R$ 87,90</span> por apenas{" "}
          <span className="new-price">R$ 29,90</span> promoção por tempo limitado!
        </p>
        <a
          href="https://pag.ae/7_Zi-W1r7"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero aprender agora
        </a>

        {/* Termos e Privacidade */}
     {/* Termos e Privacidade */}
<div className="legal">
  <details>
    <summary>Termos de Uso</summary>
    <p>
      Este site tem caráter informativo e educacional. Não garantimos
      resultados individuais, que podem variar de pessoa para pessoa.
      O usuário concorda em utilizar as informações de forma legal,
      assumindo total responsabilidade pelas suas decisões financeiras.
    </p>
  </details>
  <details>
    <summary>Política de Privacidade</summary>
    <p>
      Seus dados pessoais estão protegidos. Não compartilhamos suas
      informações com terceiros, exceto quando necessário para
      processamento do pagamento. Utilizamos cookies apenas para
      melhorar sua experiência.
    </p>
  </details>

  {/* Empresa */}
  <p className="company">
    CHF Serviços em Tecnologia - CNPJ: 11.338.930/0001-76
  </p>

  {/* Compra Segura */}
  <div className="secure-purchase">
    <img src="/img/pagar-com-pagBank.gif" alt="PagBank" />
    <p>Compra 100% segura - Ambiente PagBank</p>
  </div>
</div>

      </footer>
    </div>
  );
}
