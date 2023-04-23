const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="Happy-cake">
          <h2 style={{ marginLeft: "7px" }}>🍕🍕¡Pizzería Mamma Mia!🍕🍕</h2>
        </div>
        <div className="autor ">
          <h2 style={{ marginRight: "7px" }}>Francisco August</h2>
          <div className="d-flex justify-content-center gap-2">
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="/">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
