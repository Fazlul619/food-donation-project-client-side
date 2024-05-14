import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const UpdateAFood = () => {
  const [title, setTitle] = useState("Update Food");
  const foods = useLoaderData();
  const {
    _id,
    foodImage,
    foodName,
    foodQuantity,

    pickupLocation,
    expireDate,
    additionalNotes,
  } = foods;

  const [Status, setStatus] = useState("");
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;

    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const additionalNotes = form.additionalNotes.value;
    const expireDate = form.expireDate.value;

    const updatedAFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      additionalNotes,
      expireDate,
      Status,
    };
    form.foodName.value = "";
    form.foodImage.value = "";
    form.foodQuantity.value = "";
    form.pickupLocation.value = "";
    form.additionalNotes.value = "";
    form.expireDate.value = "";

    console.log(updatedAFood);
    // send data to the server
    fetch(`http://localhost:5000/foodItem/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedAFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Food Updated Successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>SustenanceSwap|{title}</title>
      </Helmet>
      <div className="bg-[#F4F3F0] p-24 my-5 rounded-xl">
        <h2 className="text-3xl font-extrabold">Update Your Food:{foodName}</h2>
        <form onSubmit={handleUpdateFood}>
          {/* form row food name and food image */}
          <div className="md:flex">
            <div className="md: w-1/2">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Food Name</span>
                </div>
                <input
                  type="text"
                  name="foodName"
                  defaultValue={foodName}
                  placeholder="Food Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md: w-1/2 ml-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Food Image</span>
                </div>
                <input
                  type="text"
                  name="foodImage"
                  defaultValue={foodImage}
                  placeholder="Food Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form Food Quantity and Pickup Location */}
          <div className="md:flex">
            <div className="md: w-1/2">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text">Food Quantity</span>
                </div>
                <input
                  min={1}
                  type="number"
                  defaultValue={foodQuantity}
                  name="foodQuantity"
                  placeholder="Food Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md: w-1/2 ml-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Pickup Location</span>
                </div>
                <input
                  type="text"
                  name="pickupLocation"
                  defaultValue={pickupLocation}
                  placeholder="Pickup Location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row expire date and additional note */}
          <div className="md:flex">
            <div className="md: w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Additional Notes</span>
                </div>
                <input
                  type="text"
                  name="additionalNotes"
                  defaultValue={additionalNotes}
                  placeholder="Additional Notes"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md: w-1/2 ml-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Expire Date</span>
                </div>
                <input
                  type="date"
                  name="expireDate"
                  defaultValue={expireDate}
                  placeholder="Expire Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Food status */}
          <div className="md:flex mb-8 justify-center  items-center">
            <div className="md: w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Food Status</span>
                </div>
                <select
                  value={Status}
                  onChange={handleStatus}
                  className="select select-bordered"
                >
                  <option>Food Status</option>
                  <option value="available">available</option>
                  <option value="requested">requested</option>
                </select>
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add"
            className="btn btn-block btn-outline btn-success"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateAFood;
