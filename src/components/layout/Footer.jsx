import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <p className="footer-brand">Rangel Shot</p>
          <p>Fotografía y video para historias que merecen permanecer.</p>
        </div>
        <nav aria-label="Navegación secundaria">
          <Link to="/servicios">Servicios</Link>
          <Link to="/nosotros">Sobre nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} Cristian Rangel
          <br />
          Ocaña, Colombia
        </p>
      </div>
    </footer>
  );
}
