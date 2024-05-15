import { Link } from "react-router-dom";
import img from "../assets/banner img/loginpage-img.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
const Register = () => {
  const [title, setTitle] = useState("Register");

  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState(" ");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // console.log(name, email, password, photo);

    setRegisterError(" ");
    setRegisterSuccess(" ");

    if (password.length < 6) {
      setRegisterError("Password Should Be At Least 6 Characters Or Longer");
      return;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      setRegisterError(
        "Password Must Be At Least One Upper Case And One Lower Case Characters"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        // console.log(result);
        toast.success("User Created Successfully");
        registerSuccess;
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>SustenanceSwap|{title}</title>
      </Helmet>
      <div className="hero min-h-screen my-5">
        <img className="h-full w-full rounded-xl opacity-75" src={img} alt="" />
        <div className="hero-content flex-col lg:flex-row ">
          <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-3xl text-center font-bold">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute top-[63%] left-[85%]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              {registerError && (
                <p className="text-red-700 text-center">{registerError}</p>
              )}
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline btn-success font-bold"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className=" text-center my-4">
              Already Have An Account?
              <br />
              <Link className="font-bold text-green-900" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
