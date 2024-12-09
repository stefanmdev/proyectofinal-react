import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>TiendaVirtual</h3>
        <p>Tu mejor opción para videojuegos y más</p>
      </div>
      <div className="footer-links">
        <a href="#">Términos y Condiciones</a> |
        <a href="#">Política de Privacidad</a> |
        <a href="#">Contacto</a>
      </div>
      <div className="footer-bottom">
        © 2024 TiendaVirtual. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
