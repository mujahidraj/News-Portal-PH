import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import HomePage from "../Pages/Home/HomePage";
import CategoryNews from "../Pages/Home/CategoryNews/CategoryNews";
import Category from "../Pages/Category/Category";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Auth from "../Layouts/Auth/Auth";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [{
      path: "/",
      index: true,
      element: <HomePage></HomePage>
    },
    {
      path: '/category/:id',
      loader: () => fetch('/news.json'),
      element: <Category></Category>,
      hydrateFallbackElement: <div><span className="loading loading-ring loading-xl"></span>
      </div>
    }

    ]

  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <div><span className="loading loading-ring loading-xl"></span>
    </div>
  },
  {
    path: "/*",
    errorElement: <div>This is an error page</div>
  }
]);