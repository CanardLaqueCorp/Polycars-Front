function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <p style={{ margin: 0 }}>
        &copy; {currentYear} My Website. All Rights Reserved.
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <a href="https://www.facebook.com/">
          <i
            className="fab fa-facebook fa-2x"
            style={{ color: "#fff", marginRight: "1rem" }}
          ></i>
        </a>
        <a href="https://www.twitter.com/">
          <i
            className="fab fa-twitter fa-2x"
            style={{ color: "#fff", marginRight: "1rem" }}
          ></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram fa-2x" style={{ color: "#fff" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
