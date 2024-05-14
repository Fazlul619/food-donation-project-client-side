import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ManageMyFoodTable from "./ManageMyFoodTable";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);

  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foodItem/manageMyFood", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  const filteredFoodData = foodData.filter((myFoods) =>
    myFoods.email && user.email
      ? myFoods.email === user.email
      : myFoods.name === user.displayName
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foodItem/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const updatedFoodData = foodData.filter((food) => food._id !== id);
            setFoodData(updatedFoodData);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Food Name</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredFoodData.map((Foods) => (
              <ManageMyFoodTable
                key={Foods._id}
                Foods={Foods}
                handleDelete={handleDelete}
              ></ManageMyFoodTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
