import clockImg from "../../../assets/banner img/3898370_time_clock_icon.png";
import peopleImg from "../../../assets/banner img/3289562_family_group_peers_people_icon.png";
import donarImg from "../../../assets/banner img/5402435_account_profile_user_avatar_man_icon.png";
const FoodItemCard = ({ foodItem }) => {
  const {
    _id,
    foodImage,
    foodName,
    foodQuantity,
    photo,
    name,
    pickupLocation,
    expireDate,
    additionalNotes,
  } = foodItem;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
            <button className="btn btn-outline btn-success">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
