import { useLoaderData } from "react-router-dom";
import bgImage from "../../assets/banner img/food-donations-to-fight-hunger-by-sharing-free-food-with-people-free-photo.jpg";
import clockImg from "../../assets/banner img/3898370_time_clock_icon.png";
import peopleImg from "../../assets/banner img/3289562_family_group_peers_people_icon.png";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const FoodItemViewDetails = () => {
  const [title, setTitle] = useState("View Details");
  const food = useLoaderData();
  const {
    foodImage,
    foodName,
    foodQuantity,
    email,
    _id,
    name,
    pickupLocation,
    expireDate,
    additionalNotes,
  } = food;

  const [additionalNote, setAdditionalNote] = useState(additionalNotes);
  const theStatus = "requested";
  // const requestedDate = currentDate;
  const updatedFood = {
    additionalNotes: additionalNote,
    theStatus,
    requestedDate: new Date(),
  };
  // console.log(additionalNote);

  const handleFoodRequest = (id) => {
    fetch(`https://food-web-server-side.vercel.app/foodItem/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "You have requested the food successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  const currentDate = new Date();

  return (
    <div>
      <Helmet>
        <title>SustenanceSwap|{title}</title>
      </Helmet>
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

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <div className="flex items-center">
                      <Button
                        className="bg-[#c9fd02]
                      px-6 py-4 text-center font-bold text-black transition
                      hover:border-black hover:bg-white md:mr-6 lg:mr-8 text-lg"
                      >
                        Request
                      </Button>
                    </div>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="overflow-auto h-full">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Hi, here is the details of the food item you are going
                        to request!
                      </AlertDialogTitle>

                      <AlertDialogDescription className="flex flex-col gap-3">
                        <span>
                          Please check and you can add an additional note if you
                          would like! Then just request.
                        </span>
                        <span className="flex flex-col gap-3">
                          <span>
                            <label
                              htmlFor="foodName"
                              className="text-black font-medium"
                            >
                              Name
                            </label>

                            <input
                              disabled
                              value={foodName}
                              id="foodName"
                              className="input w-full font-semibold mt-2"
                            />
                          </span>

                          <span className="flex items-start gap-3">
                            <span>
                              <label className="text-black font-medium ">
                                Image
                              </label>

                              <img
                                src={foodImage}
                                alt={foodName}
                                className="h-[80px] w-[200px] object-cover rounded-md mt-2"
                              />
                            </span>
                            <span>
                              <label
                                htmlFor="foodId"
                                className="text-black font-medium"
                              >
                                ID
                              </label>

                              <input
                                disabled
                                value={_id}
                                id="foodId"
                                className="input w-full font-semibold mt-2"
                              />
                            </span>
                          </span>

                          <span className="flex items-start gap-3">
                            <span>
                              <label
                                htmlFor="user_email"
                                className="text-black font-medium"
                              >
                                Your Email
                              </label>

                              <input
                                disabled
                                value={email ? email : "Not Found!"}
                                id="user_email"
                                className="input w-full font-semibold mt-2"
                              />
                            </span>
                            <span>
                              <label
                                htmlFor="foodId"
                                className="text-black font-medium"
                              >
                                Donator&apos;s Name
                              </label>

                              <input
                                disabled
                                value={name}
                                id="foodId"
                                className="input w-full font-semibold mt-2"
                              />
                            </span>
                          </span>

                          <span className="flex items-start gap-3">
                            <span>
                              <label
                                htmlFor="user_email"
                                className="text-black font-medium"
                              >
                                Request Date
                              </label>

                              <input
                                disabled
                                value={currentDate}
                                id="user_email"
                                className="input w-full font-semibold mt-2"
                              />
                            </span>
                            <span>
                              <label
                                htmlFor="foodId"
                                className="text-black font-medium"
                              >
                                Pick Up Location
                              </label>

                              <input
                                disabled
                                value={pickupLocation}
                                id="foodId"
                                className="input w-full font-semibold mt-2"
                              />
                            </span>
                          </span>

                          <span className="flex items-start gap-3">
                            <span className="w-full">
                              <label
                                htmlFor="user_email"
                                className="font-medium text-red-500 "
                              >
                                Expire Date
                              </label>

                              <input
                                disabled
                                value={expireDate}
                                id="user_email"
                                className="input w-full font-semibold mt-2"
                              />
                            </span>
                          </span>

                          <span className="w-full">
                            <label
                              htmlFor="additionalNotes"
                              className="font-medium text-black"
                            >
                              Additional Notes
                            </label>

                            <input
                              value={additionalNote}
                              onChange={(e) =>
                                setAdditionalNote(e.target.value)
                              }
                              id="additionalNotes"
                              className="input w-full font-semibold mt-2 bg-gray-100"
                            />
                          </span>
                        </span>
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleFoodRequest(_id)}>
                        Request
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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
    </div>
  );
};

export default FoodItemViewDetails;
