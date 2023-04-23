import { Context } from "../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import icono from "../Components/assets/Img/icono-pizza.png";
import ojos from "../Components/assets/Img/eyes.png";

export default function Home() {
  const navigate = useNavigate();
  const { dato } = useContext(Context);
  const { addCart } = useContext(Context);

  return (
    <>
      <div className="row">
        {dato.map((intem, index) => (
          <div key={index} className="col- col-sm-4 col-lg-3 mb-4 cartas">
            <div className="card">
              <div className="card-body">
                <div
                  style={{
                    backgroundImage: `url(${intem.img})`,
                    width: "100%",
                    height: "150px",
                    backgroundSize: "cover",
                  }}
                ></div>
                <h3 className="card-title">{intem.name}</h3>
                <hr></hr>
                <h5 className="">ingredientes:</h5>
                {intem.ingredients.map((ingredient, i) => (
                  <p key={i} className="">
                    <img src={icono} alt="" height="20" width="20" />{" "}
                    {ingredient}
                  </p>
                ))}
                <hr></hr>
                <div className="d-flex gap-2">
                  <button
                    style={{ background: "#4BD4E5", border: "none" }}
                    onClick={() => navigate(`/pizza/${intem.id}`)}
                  >
                    Ver más <img src={ojos} className="pl-2" />
                  </button>

                  <button
                    style={{ background: "#DF1B04", border: "none" }}
                    onClick={() => addCart(intem.id)}
                  >
                    Añadir <img src={ojos} className="pl-2" />
                  </button>
                </div>

                <h5>$:{intem.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
