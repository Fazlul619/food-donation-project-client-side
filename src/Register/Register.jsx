import { Link } from "react-router-dom";
import img from "../assets/banner img/loginpage-img.jpg";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen my-20">
      <img className="h-full w-full rounded-xl opacity-75" src={img} alt="" />
      <div className="hero-content flex-col lg:flex-row ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
    </div>
  );
};

export default Register;
