import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FoodItemCard from "./FoodItemCard";
import OurTeamMembers from "./OurTeamMembers";
import OurDonation from "./OurDonation";
import { Helmet } from "react-helmet";
import { useState } from "react";
const Home = () => {
  const [title, setTitle] = useState("HOME");
  const foodItems = useLoaderData();

  const sortedQuantity = foodItems.slice().sort((a, b) => {
    return b.foodQuantity - a.foodQuantity;
  });

  const limitedDate = sortedQuantity.slice(0, 6);

  return (
    <div>
      <Helmet>
        <title>SustenanceSwap|{title}</title>
      </Helmet>
      <Banner></Banner>
      <div className="w-full">
        <div className="my-6">
          <h1 className="text-3xl font-semibold md:text-5xl text-center">
            Featured Foods
          </h1>
          <p className="text-center m-2">
            Explore our Featured Foods: a showcase of delicious meals donated
            with love. Join us in fighting hunger, one bite at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mb-10">
          {limitedDate.map((foodItem) => (
            <FoodItemCard key={foodItem._id} foodItem={foodItem}></FoodItemCard>
          ))}
        </div>
        <Link
          to={"/availableFoods"}
          className="w-full grid place-items-center mb-5"
        >
          <button className="btn btn-outline btn-success">Show All</button>
        </Link>
      </div>
      <div className="my-6">
        <h1 className="text-3xl font-semibold md:text-5xl text-center">
          Our Top Donation
        </h1>
        <p className="text-center mt-2">
          Our top donation shines as a symbol of profound generosity, lighting
          the way toward a brighter tomorrow for all in need.
        </p>
      </div>
      <OurDonation></OurDonation>
      <OurTeamMembers></OurTeamMembers>
    </div>
  );
};

export default Home;
