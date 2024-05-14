import { format } from "date-fns";

const MyFoodRequestedTable = ({ Foods }) => {
  const {
    foodName,
    name,
    email,
    pickupLocation,
    foodQuantity,
    photo,
    expireDate,
    Status,

    requestedDate,
  } = Foods;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded-xl w-24 h-24">
              <img
                src={
                  photo
                    ? photo
                    : "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">
              {email ? email : "Don't Have Email"}
            </div>
          </div>
        </div>
      </td>
      <td>{foodName}</td>

      <td>{pickupLocation}</td>
      <td>{foodQuantity}</td>
      <th>{expireDate}</th>
      <th>{requestedDate && format(new Date(requestedDate), "yyyy-MM-dd")}</th>
      <th>{Status}</th>
    </tr>
  );
};

export default MyFoodRequestedTable;
