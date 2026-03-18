

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-left">
        <div className="logo-footer">EM</div>
        <div className="footer-texts">
          <p>&copy; 2026 Eisenhower Matrix | Built with ❤️ by Costance</p>
          <p className="credits">
            🙏 Thanks to{" "}
            <a
              href="https://en.wikipedia.org/wiki/Time_management#Eisenhower_Matrix"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dwight D. Eisenhower
            </a>{" "}
            for the matrix
          </p>
        </div>
      </div>
      <div className="footer-right">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;