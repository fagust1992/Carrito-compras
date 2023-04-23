import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";

const NavBar = () => {
  const { total } = useContext(Context);
  return (
    <nav className="navbar navbar-light  menu">
      <div class="container-fluid">
        <div className="nav-item">
          <Link to="/"> 🍕🍕¡Pizzería Mamma Mia!🍕🍕</Link>
        </div>

        <div className="d-flex gap-2">
          <div className="nav-item">
            <Link
              to="/cart
            "
            >
              <i class="fa-solid fa-cart-arrow-down icono"></i> {total}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
