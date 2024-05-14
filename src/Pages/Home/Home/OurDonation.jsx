import { useEffect, useState } from "react";
import clockImg from "../../../assets/banner img/3898370_time_clock_icon.png";
const OurDonation = () => {
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    fetch("topDonation.json")
      .then((res) => res.json())
      .then((data) => setDonation(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {donation.map((donate) => (
          <div key={donate.id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full h-64 "
                  src={donate.Donation_Image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <div className="w-24 text-center">
                    <p className="font-bold bg-green-700  p-1 text-white rounded-lg">
                      {donate.Place_Name}
                    </p>
                  </div>
                  <div className=" flex justify-between p-2">
                    <div className="flex items-center font-semibold">
                      <img className="w-6 h-6" src={clockImg} alt="" />
                      <p>{donate.Donation_Date}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 gap-2 p-4">
                  <img
                    className="w-12 h-12 rounded-xl"
                    src={donate.Donor_Image}
                    alt=""
                  />
                  <p className="font-bold">{donate.Donor_Name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDonation;
