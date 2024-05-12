import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const url = `http://localhost:5000/foodItem?email=${user.email}:name=${user.displayName}`;
  console.log(url);
  return (
    <div>
      <h1>Private route</h1>
      <p>Manage My Food Page</p>
    </div>
  );
};

export default ManageMyFoods;
