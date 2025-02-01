import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MenuCategory from "./MenuCategory/MenuCategory";
import CustomPage from "./CustomPage/CustomPage";
import PageEditor from "./Components/PageEditor/PageEditor";
import Certificate from "./Certificate/Certificate";
import Dashboard from "./Dashboard/Dashboard";
import Users from "./Users/Users";
import Products from "../../admin/Pages/Products/Products";
import Category from "./Category/Category";
import AddProduct from "./Products/AddProduct";
import Event from "./Event/Event";
import Blogs from "./Blogs/Blogs";
import AddBlogs from "./Blogs/AddBlogs";
import AddEvent from "./Event/AddEvent";
import Holistic from "./Hoslitic/Hoistic";
import AddHolistic from "./Hoslitic/AddHolistic";
import Standards from "./Standards/Standards";
import AddStandards from "./Standards/AddStandards";
import Subscriber from "./Subscriber/Subscriber";
import Contact from "./Contact/Contact";
// import MyEditor from "./Editor/MyEditor";



const routes = createBrowserRouter([
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "category",
        element: <MenuCategory />
      },
      {
        path: "pages",
        element: <CustomPage />
      },
      {
        path: "pages/add",
        element: <PageEditor />
      },
      {
        path: "page/products",
        element: <Products />
      },
      {
        path: "page/category",
        element: <Category />
      },
      {
        path: "page/addProduct",
        element: <AddProduct />
      },
      {
        path: "page/events",
        element: <Event />
      },
      {
        path: "page/addEvent",
        element: <AddEvent />
      },
      {
        path: "page/blogs",
        element: <Blogs />
      },
      {
        path: "page/addBogs",
        element: <AddBlogs />
      },
      {
        path: "page/standards",
        element: <Standards />
      },
      {
        path: "page/addStandards",
        element: <AddStandards />
      },
      {
        path: "page/holistic",
        element: <Holistic />
      },
      {
        path: "page/addHolistic",
        element: <AddHolistic />
      },
      {
        path: "pages/certificate",
        element: <Certificate />
      },
      {
        path: "pages/subscriber",
        element: <Subscriber />
      },
      {
        path: "pages/contact",
        element: <Contact />
      },
      {
        path: "pages/users",
        element: <Users />
      },
    ]
  }
]);

const AdminHome: FC = () => {
  return (
    <main>
      {/* <MyEditor/> */}
      <RouterProvider router={routes} />
    </main>
  )
}

// 66bc43 green
// 4091ca blue

export default AdminHome;
