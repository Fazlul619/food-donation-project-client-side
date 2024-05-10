import img1 from "../../../assets/banner img/banner-1.jpg";
import img2 from "../../../assets/banner img/banner-2.jpg";
import img3 from "../../../assets/banner img/banner-3.jpg";
import img4 from "../../../assets/banner img/banner-4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white p-12 space-y-7 ">
            <h2 className="text-6xl font-bold w-1/2">
              Your Gateway to Sharing Surplus Food
            </h2>
            <p>
              It encapsulates the essence of your platforms mission—to foster
              connections through sharing while combating food waste.
            </p>
            <div>
              <button className="btn btn-outline btn-success">
                {" "}
                Share Food!
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white p-12 space-y-7 ">
            <h2 className="text-6xl font-bold w-1/2">
              Your Gateway to Sharing Surplus Food
            </h2>
            <p>
              It encapsulates the essence of your platforms mission—to foster
              connections through sharing while combating food waste.
            </p>
            <div>
              <button className="btn btn-outline btn-success">
                Share Food!
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white p-12 space-y-7 ">
            <h2 className="text-6xl font-bold w-1/2">
              Your Gateway to Sharing Surplus Food
            </h2>
            <p>
              It encapsulates the essence of your platforms mission—to foster
              connections through sharing while combating food waste.
            </p>
            <div>
              <button className="btn btn-outline btn-success">
                {" "}
                Share Food!
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white p-12 space-y-7 ">
            <h2 className="text-6xl font-bold w-1/2">
              Your Gateway to Sharing Surplus Food
            </h2>
            <p>
              It encapsulates the essence of your platforms mission—to foster
              connections through sharing while combating food waste.
            </p>
            <div>
              <button className="btn btn-outline btn-success">
                {" "}
                Share Food!
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
