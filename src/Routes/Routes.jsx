import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element : <Home></Home>,
  },
  {
    path :"/auth",
    element : <div>Authentication</div>
  },
  {
    path:"/news",
    elment : <div>News</div>
  },
  {
    path:"/*",
    errorElement : <div>This is an error page</div>
  }
]);