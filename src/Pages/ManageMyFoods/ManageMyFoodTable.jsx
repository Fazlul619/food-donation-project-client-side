const ManageMyFoodTable = ({ Foods, handleDelete }) => {
  const { _id, foodName, name, email, pickupLocation, foodQuantity, photo } =
    Foods;

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
      <th>
        <button className="btn btn-outline btn-success">Update</button>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-outline btn-error"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ManageMyFoodTable;
