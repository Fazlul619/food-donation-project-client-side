import { Link } from "react-router-dom";
import { FaGitlab } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import img from "../../assets/banner img/loginpage-img.jpg";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen">
      <img className="h-full w-full rounded-xl opacity-75" src={img} alt="" />
      <div className="hero-content flex-col lg:flex-row ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-outline btn-success font-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className=" text-center">
            Do not Have An Account?
            <br />
            <Link className="font-bold text-green-900" to="/register">
              Register
            </Link>
          </p>
          <div className="card-body text-2xl items-center ">
            <p>
              <button className="mx-5">
                <FcGoogle />
              </button>
              <button>
                <FaGitlab />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
