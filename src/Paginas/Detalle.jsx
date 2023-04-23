import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Context";
import icono from "../Components/assets/Img/icono-pizza.png";
import ojos from "../Components/assets/Img/eyes.png";

export default function Detalle() {
  const { id } = useParams();
  console.log(id);
  const { dato, addCart } = useContext(Context);

  const x = dato.findIndex((x) => x.id === id);
  console.log(dato[x]);

  return (
    <>
      {dato[x] ? (
        <div className="padre  row">
          <div className="col  " style={{ color: "#fff" }}>
            <div className="imagen-carta">
              <img src={dato[x].img} alt="" className="imagen-detalle" />
            </div>
            <div
              className="texto-detalle "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1 style={{ fontSize: "18px" }}>{dato[x].name}</h1>
              <hr></hr>
              <p>{dato[x].desc}</p>
              <div className="ingredientes">
                <h4 style={{ fontSize: "18px" }}>Ingredientes:</h4>
                {dato[x].ingredients.map((ingredient, i) => (
                  <p key={i} className="">
                    <img src={icono} alt="" height="20" width="20" />{" "}
                    {ingredient}
                  </p>
                ))}
                <h2 style={{ fontSize: "18px" }}> precio:${dato[x].price}</h2>
              </div>
              <button
                style={{ background: "#DF1B04", border: "none" }}
                onClick={() => addCart(dato[x].id)}
              >
                Añadir{" "}
                <img
                  src={ojos}
                  className="pl-2"
                  alt="Ícono de añadir al carrito"
                />
              </button>
            </div>
            <div>f</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
