import { useContext } from "react";
import { Context } from "../Context/Context";

const Cart = () => {
  const { cart, total, sumar, restar } = useContext(Context);
  console.log(cart);
  return (
    <>
      <div className="row container" style={{ margin: "auto", color: "#fff" }}>
        {cart.length > 0 ? (
          cart.map((intem, index) => (
            <div className="  " style={{ border: "1px solid #fff" }}>
              <div
                style={{
                  color: "#00000",
                  marginBottom: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  border: " 1px solid black",
                }}
              >
                <div className="">
                  <img
                    src={intem.img}
                    alt=""
                    style={{ width: "150px", height: "150px" }}
                  />

                  <div
                    className="texto-detalle "
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h5 style={{ fontSize: "18px" }}>{intem.name}</h5>
                  </div>
                </div>
                <div style={{ display: "flex", alignSelf: "center" }}>
                  <p>${intem.price}</p>
                  <button
                    style={{
                      height: "25px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => sumar(intem.id)}
                  >
                    +
                  </button>
                  <p>{intem.count}</p>
                  <button
                    style={{
                      height: "25px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => restar(intem.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>no hay nada en el carrito de compra</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
