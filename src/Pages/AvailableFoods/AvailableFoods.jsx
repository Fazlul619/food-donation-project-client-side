import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import clockImg from "../../assets/banner img/3898370_time_clock_icon.png";
import peopleImg from "../../assets/banner img/3289562_family_group_peers_people_icon.png";
import donarImg from "../../assets/banner img/5402435_account_profile_user_avatar_man_icon.png";
import { Helmet } from "react-helmet";
const AvailableFoods = () => {
  const [title, setTitle] = useState("Available Foods");
  const data = useLoaderData();
  const [layoutStatus, setLayoutStatus] = useState(false);
  const [searchedWords, setSearchedWords] = useState("");
  const [sort, setSort] = useState(false);

  const availableFood = data.filter((food) => food.Status === "available");
  let searchedItems = availableFood.filter((food) =>
    food.foodName.toLowerCase().includes(searchedWords.toLowerCase())
  );

  const sortedData = sort
    ? availableFood.slice().sort((a, b) => {
        const dateA = new Date(a.expireDate);
        const dateB = new Date(b.expireDate);

        return dateA - dateB;
      })
    : availableFood;

  console.log(sortedData);

  return (
    <>
      <Helmet>
        <title>SustenanceSwap|{title}</title>
      </Helmet>

      <div className="mb-5 w-full relative">
        <div className="relative">
          <input
            type="text"
            value={searchedWords}
            onChange={(e) => setSearchedWords(e.target.value)}
            className="bg-gray-100 outline-none border-none w-full px-2 py-3 "
          />

          <span
            className="absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer"
            onClick={() => setSearchedWords("")}
          >
            <AiFillCloseCircle className="text-2xl" />
          </span>
        </div>

        {searchedWords && searchedItems.length > 0 ? (
          <div className="absolute w-full max-h-96 overflow-auto p-2 bg-gray-300">
            {searchedItems.map((item) => (
              <Link
                to={`/foodItemViewDetails/${item._id}`}
                key={item._id}
                className="flex items-start justify-between mb-4"
              >
                <div className="flex gap-4">
                  <div>
                    <img
                      src={item.foodImage}
                      alt={item.foodName}
                      className="w-40 object-cover rounded-sm"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">{item.foodName}</h3>
                    <span>Quantity: {item.foodQuantity}</span>
                    <span>Expires on: {item.expireDate}</span>
                    <p>
                      Pick it up from:{" "}
                      <span className="font-semibold font-serif">
                        {item.pickupLocation}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <img
                    src={item.photo ? `${item.photo}` : `${donarImg}`}
                    alt={item.name ? `${item.name}` : `${donarImg}`}
                    className="w-14 rounded-full"
                  />
                  <h5 className="font-mono text-xs">
                    Donated by:{" "}
                    <span className="font-semibold underline">
                      {item.name ? `${item.name}` : `${donarImg}`}
                    </span>
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      <div className="my-5">
        <button
          onClick={() => setSort(!sort)}
          className={`w-fit px-3 p-2 rounded-sm border-2 border-sky-300 ${
            sort ? "bg-sky-300" : null
          }`}
        >
          Sort by expire date
        </button>
      </div>

      <div
        className={`grid w-full${
          layoutStatus
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {sortedData.map((food) => {
          const {
            foodName,
            foodImage,
            foodQuantity,
            pickupLocation,
            additionalNotes,
            expireDate,

            photo,

            name,
            _id,
          } = food;

          return (
            <div
              key={_id}
              className=" mb-4 w-96  border rounded-xl border-green-400"
            >
              <div className="flex gap-2  p-4">
                <img
                  className="w-6 h-6 rounded-xl"
                  src={photo ? `${photo}` : `${donarImg}`}
                  alt=""
                />
                <p>{name ? `${name}` : "Donar Name"}</p>
              </div>
              <figure>
                <img className="w-full h-64" src={foodImage} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <div className="w-24 text-center">
                    <p className="font-bold bg-green-700  p-1 text-white rounded-lg">
                      {foodName}
                    </p>
                  </div>
                  <div className="w-24 text-center">
                    <p className="font-bold bg-green-700  p-1 text-white rounded-lg">
                      {pickupLocation}
                    </p>
                  </div>
                </div>

                <p className="font-medium">{additionalNotes}</p>
                <div className=" flex justify-between p-2">
                  <div className="flex items-center font-semibold">
                    <img className="w-6 h-6" src={clockImg} alt="" />
                    <p>{expireDate}</p>
                  </div>
                  <div className="flex items-center font-semibold gap-2">
                    <img className="w-5 h-5" src={peopleImg} alt="" />
                    <p className="text-xl">{foodQuantity}</p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/foodItemViewDetails/${_id}`}>
                    <button className="btn btn-outline btn-success">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Button onClick={() => setLayoutStatus(!layoutStatus)} className="my-5">
        Change layout
      </Button>
    </>
  );
};

export default AvailableFoods;
