import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FoodItemCard from "./FoodItemCard";
import OurTeamMembers from "./OurTeamMembers";

const Home = () => {
  const foodItems = useLoaderData();

  const sortedQuantity = foodItems.slice().sort((a, b) => {
    return b.foodQuantity - a.foodQuantity;
  });

  const limitedDate = sortedQuantity.slice(0, 6);

  return (
    <div>
      <Banner></Banner>
      <div className="w-full">
        <div className="my-6">
          <h1 className="text-center text-2xl font-bold">Featured Foods</h1>
          <p className="text-center">
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
      <OurTeamMembers></OurTeamMembers>
    </div>
  );
};

export default Home;
