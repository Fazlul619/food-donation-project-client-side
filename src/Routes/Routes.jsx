import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import PrivateRoutes from "./PrivateRoutes";
import FoodItemViewDetails from "../Pages/FoodItemViewDetails/FoodItemViewDetails";
import Error from "../Pages/Error Page/Error";
import UpdateAFood from "@/Pages/UpdateAFood/UpdateAFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/foodItem"),
      },
      {
        path: "foodItemViewDetails/:id",
        element: (
          <PrivateRoutes>
            <FoodItemViewDetails></FoodItemViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foodItem/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch("http://localhost:5000/foodItem"),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoutes>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/foodItem"),
      },
      {
        path: "/updateAFood/:id",
        element: (
          <PrivateRoutes>
            <UpdateAFood></UpdateAFood>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foodItem/${params.id}`),
      },
    ],
  },
]);
export default router;
