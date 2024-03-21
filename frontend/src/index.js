import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreens from "./screens/HomeScreens";
import ProductScreen from "./screens/ProductScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    //parent route
    <Route path="/" element={<App />}>
      {/* children route, app and home screens has same routes  , pass index as true otherwise it will give multiple route error */}
      <Route index={true} path="/" element={<HomeScreens />} />
      {/* link given product and is mapped to Product screen here  */}
      {/* The :id in the route path is a route parameter, which can be accessed in your ProductScreen component using the useParams hook:  */}
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* we will replace <App/> component to RouterProvider to get the app and then we pass router as prop   */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
