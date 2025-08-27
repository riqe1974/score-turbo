import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      {/* Cabeçalho simples, sem links */}
      <header className="header">
        <h1 className="site-title">Score Turbo 1000®</h1>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/termos">Termos de Uso</Link> |{" "}
          <Link to="/privacidade">Política de Privacidade</Link> |{" "}
          <Link to="/sobre">Sobre Nós</Link>
        </div>
        <p className="company">
          CHF Serviços em Tecnologia - CNPJ: 11.338.930/0001-76
        </p>
        <div className="secure">
          <img src="/img/pagar-com-pagBank.png" alt="PagBank" />
          <p>Compra 100% segura - Ambiente PagBank</p>
        </div>
      </footer>
    </div>
  );
}
