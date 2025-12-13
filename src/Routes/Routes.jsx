import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import HomePage from "../Pages/Home/HomePage";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import Category from "../Pages/Category/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element : <Home></Home>,

    children : [{
      path : "/",
      index : true,
      element : <HomePage></HomePage>
    },
    {
      path : '/category/:id',
      element : <Category></Category>
    }
  
  ]

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