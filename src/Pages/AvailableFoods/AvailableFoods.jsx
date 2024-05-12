import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AvailableFoods = () => {
  const data = useLoaderData();
  const [layoutStatus, setLayoutStatus] = useState(false);

  const availableFood = data.filter((food) => food.Status === "available");

  return (
    <>
      <div
        className={`grid w-full ${
          layoutStatus ? "grid-cols-2" : " grid-cols-3"
        }`}
      >
        {availableFood.map((food) => {
          const {
            foodName,
            foodImage,
            foodQuantity,
            pickupLocation,
            additionalNotes,
            expireDate,
            Status,
            photo,
            email,
            name,
            _id,
          } = food;

          return (
            <div key={_id}>
              <h1>{foodName}</h1>
              <p>{additionalNotes}</p>
              <img src={foodImage} alt={foodName} className="w-40 rounded-md" />
            </div>
          );
        })}
      </div>

      <Button onClick={() => setLayoutStatus(!layoutStatus)}>
        Change layout
      </Button>
    </>
  );
};

export default AvailableFoods;
