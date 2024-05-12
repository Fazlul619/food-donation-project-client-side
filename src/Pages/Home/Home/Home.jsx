import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FoodItemCard from "./FoodItemCard";

const Home = () => {
  const foodItems = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div>
        <div className="my-6">
          <h1 className="text-center text-2xl font-bold">Featured Foods</h1>
          <p className="text-center">
            Explore our Featured Foods: a showcase of delicious meals donated
            with love. Join us in fighting hunger, one bite at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mb-10">
          {foodItems.map((foodItem) => (
            <FoodItemCard key={foodItem._id} foodItem={foodItem}></FoodItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
