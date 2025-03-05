// Dependencies
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Login from "./Auth/CustomLogin";
import ContactUs from "./ContactUs/ContactUs";
import CustomEditor from "./CustomEditor/CustomEditor";
import CustomPage from "./CutomPage/CustomPage";
import MainLayout from "./Layout/MainLayout";
import MainHome from "./MainHome/MainHome";
import Directory from "./Directory/Directory";
import DirectoryTow from "./Directory/DirectoryTow";
import Blogs from "./Resources/Blogs";
import Event from "./Event/Event";
import Holistic from "./JoinIPHM/Holistic";
import Standarde from "./Resources/Standarde";
import ViewStandards from "./Resources/ViewStandards";
import ApplayJoin from "./JoinIPHM/ApplayJoin";
import Profile from "./profile/Profile";
import TermsCondition from "./JoinIPHM/TermsCondition";
import Beauty from "./JoinIPHM/beauty";
import { useEffect } from "react";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <MainHome />
      },
      {
        path: "pages/:uri",
        element: <CustomPage />
      },
      // {
      //   path: "pages/modalities-covered",
      //   element: <ModalitiesCovered />
      // },
      // {
      //   path: "pages/about-uhpc",
      //   element: <ModalitiesCovered />
      // },
      {
        path: "/pages/find-a-practitioner",
        element: <Directory />
      },
      {
        path: "/pages/find-a-training-provider",
        element: <DirectoryTow />
      },

      {
        path: "/pages/holistic",
        element: <Holistic />
      },
      {
        path: "/pages/view-holistic/:id/:isBeauty",
        element: <ApplayJoin />
      },
      {
        path: "/pages/find-a-workshops-or-events",
        element: <Event />
      },
      {
        path: "/pages/uhpc-standards",
        element: <Standarde />
      },
      {
        path: "/pages/uhpc-standards/:id",
        element: <ViewStandards />
      },
      {
        path: "/pages/uhpc-blogs",
        element: <Blogs />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/termsCondition",
        element: <TermsCondition />
      },
      {
        path: "/pages/beauty",
        element: <Beauty />
      },
      // {
      //   path: "/pages/uhpc-standards",
      //   element: <Insurance />
      // },
      // {
      //   path: "/pages/holistic",
      //   element: <Insurance />
      // },
      // {
      //   path: "/pages/beauty",
      //   element: <Insurance />
      // },
      // {
      //   path: "/pages/find-a-practitioner",
      //   element: <Insurance />
      // },

      {
        path: "/contact-us",
        element: <ContactUs />
      }
    ]
  },
  {
    path: "/user/auth",
    element: <Login />
  },
  {
    path: "/pages/editor/:id",
    element: <CustomEditor />
  }
]);

const Home = () => {
  return (
    
     
      <RouterProvider router={routes} />
   
  )
}




// 66bc43 green
// 4091ca blue

export default Home;
