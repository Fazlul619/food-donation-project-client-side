import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import logoImg from "../../../assets/banner img/10559920_food_aid_support_donation_charity_icon.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLink = (
    <>
      <li>
        <Link className="font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/availableFoods">
          Available Foods
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/addFood">
          Add Food
        </Link>
      </li>
      {user ? (
        <li>
          <Link className="font-bold" to="/manageMyFoods">
            Manage My Foods
          </Link>
        </li>
      ) : (
        ""
      )}

      <li>
        <Link className="font-bold" to="/myFoodRequest">
          My Food Request
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 h-24 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <img src={logoImg} alt="" />
          <a className="text-xl font-bold ml-4 ">SustenanceSwap</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-success"
            >
              SIGN OUT
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-success">LOGIN</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
