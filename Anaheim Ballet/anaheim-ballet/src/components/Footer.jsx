import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-divider"></div>

      <div className="footer-content">
        <p>
          © ANAHEIM BALLET • 280 East Lincoln Avenue • Anaheim, CA 92805 •{" "}
          <a href="mailto:info@anaheimballet.org">info@anaheimballet.org</a> •{" "}
          <a href="tel:17144906150">(714) 490-6150</a>
        </p>

        <p className="footer-nonprofit">
          Anaheim Ballet School is the official school of Anaheim Ballet, a
          501(c)(3) not-for-profit organization.
        </p>

        <div className="footer-socials">
          <a href="http://instagram.com/anaheimballet" aria-label="Instagram">📸</a>
          <a href="https://www.youtube.com/channel/UCZBhh_lXVtGuExwP9xAYcoA" aria-label="YouTube">▶️</a>
          <a href="https://www.facebook.com/anaheimballet" aria-label="Facebook">📘</a>
          <a href="mailto:info@anaheimballet.org" aria-label="Email">✉️</a>
        </div>
      </div>
    </footer>
  );
}
