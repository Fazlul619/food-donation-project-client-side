import { useLoaderData } from "react-router-dom";
import bgImage from "../../assets/banner img/food-donations-to-fight-hunger-by-sharing-free-food-with-people-free-photo.jpg";
import clockImg from "../../assets/banner img/3898370_time_clock_icon.png";
import peopleImg from "../../assets/banner img/3289562_family_group_peers_people_icon.png";

const FoodItemViewDetails = () => {
  const food = useLoaderData();
  const {
    foodImage,
    foodName,
    foodQuantity,

    name,
    pickupLocation,
    expireDate,
    additionalNotes,
  } = food;
  return (
    <div className="mb-10">
      <section className="relative">
        {/* BG Image */}
        <img
          src={bgImage}
          className="absolute -z-10 inline-block h-full w-full object-cover rounded-xl"
        />
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Component */}
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Heading Content */}
            <div className="max-w-[720px]">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-white md:text-6xl">
                {foodName}
              </h1>
              <p className="mb-6 max-w-[528px] text-xl text-white md:mb-10">
                {additionalNotes}
              </p>
              <div className="flex gap-5">
                <div className="w-24 text-center">
                  <p className="font-bold bg-green-700  p-1 text-white rounded-lg">
                    {name}
                  </p>
                </div>
                <div className="w-24 text-center">
                  <p className="font-bold bg-green-700  p-1 text-white rounded-lg">
                    {pickupLocation}
                  </p>
                </div>
              </div>
              <div className=" flex p-2 text-white gap-6">
                <div className="flex items-center font-semibold gap-2">
                  <img
                    className="w-6 h-6 bg-[#c9fd02] rounded"
                    src={clockImg}
                    alt=""
                  />
                  <p>{expireDate}</p>
                </div>
                <div className="flex items-center font-semibold gap-2">
                  <img
                    className="w-6 h-6 bg-[#c9fd02] rounded"
                    src={peopleImg}
                    alt=""
                  />
                  <p className="text-xl">{foodQuantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="#"
                  className=" mr-5 inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
                >
                  Request
                </a>
              </div>
            </div>
            {/* Image Div */}
            <div>
              <img
                src={foodImage}
                alt=""
                className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodItemViewDetails;
