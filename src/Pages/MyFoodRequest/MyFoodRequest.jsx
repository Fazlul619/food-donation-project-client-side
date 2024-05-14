import { useLoaderData } from "react-router-dom";
import MyFoodRequestedTable from "./MyFoodRequestedTable";
import { Helmet } from "react-helmet";
import { useState } from "react";

const MyFoodRequest = () => {
  const [title, setTitle] = useState("My Food Request");
  const requestedFoodData = useLoaderData();
  const requestedFood = requestedFoodData.filter(
    (food) => food.Status === "requested"
  );
  console.log(requestedFood);

  return (
    <div>
      <Helmet>
        <title>SustenanceSwap|{title}</title>
      </Helmet>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th> Donar Information</th>
                <th>Food Name</th>
                <th> Pick Up Location</th>
                <th>Quantity</th>
                <th>Expire Date</th>
                <th>Requested Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requestedFood.map((Foods) => (
                <MyFoodRequestedTable
                  key={Foods._id}
                  Foods={Foods}
                ></MyFoodRequestedTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
