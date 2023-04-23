import s2 from "../Components/assets/Img/otro2.jpg";
import s1 from "../Components/assets/Img/otro.jpg";
import s3 from "../Components/assets/Img/otro3.jpg";

const Header = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={s2} className="d-block w-100" alt="..." />
            <div className="texto ">
              <h4 style={{ color: "black" }}> ¡Pizzería Mamma Mia!</h4>
              <p style={{ color: "black" }}>
                ¡Tenemos las mejores pizzas que podrás encontrar!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={s1} class="d-block w-100" alt="..." />
            <div className="texto">
              <h5>La mejor Atencion</h5>
              <p>Tenemos estacionamiento</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={s3} class="d-block w-100" alt="..." />
            <div className="texto">
              <p>Ambiente para tomar batidos con tu mejores compañias</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Header;
