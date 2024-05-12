import { Link } from "react-router-dom";
import errorImg from "../../assets/banner img/404-error.jpg";
const Error = () => {
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-36 border">
          <figure className="">
            <img src={errorImg} alt="404 Error" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold"> 404 Error!</h2>
            <p>
              The link you clicked may be broken or the page may have been
              removed or renamed
            </p>
            <div className="card-actions ">
              <Link to="/">
                <button className="btn btn-primary">Go Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
