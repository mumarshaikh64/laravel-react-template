import React from 'react';
import { BiCategory, BiCertification, BiGridAlt, BiGridHorizontal, BiGridVertical, BiHorizontalCenter, BiLogoProductHunt, BiSolidCalendarEvent, BiSolidContact, BiSolidCopy, BiSolidDashboard, BiSolidFilePdf, BiSolidGrid, BiTable, BiUser, BiUserX } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-1.png';
const sideBarList = [
  {
    title: "Dashboard",
    uri: "/admin",
    icon: <BiSolidDashboard className='mx-2 text-[18px]' />
  },
  {
    title: "Header Menu",
    uri: "/admin/category",
    icon: <BiSolidGrid className='mx-2 text-[18px]' />
  },
  {
    title: "Pages",
    uri: "/admin/pages",
    icon: <BiSolidCopy className='mx-2 text-[18px]' />
  },
  {
    title: "Directory Category",
    uri: "/admin/page/category",
    icon: <BiCategory className='mx-2 text-[18px]' />
  },
  {
    title: "Directory Product",
    uri: "/admin/page/products",
    icon: <BiTable className='mx-2 text-[18px]' />
  },
  {
    title: "Holistic",
    uri: "/admin/page/holistic",
    icon: <BiHorizontalCenter className='mx-2 text-[18px]' />
  },
  // {
  //   title: "Blogs",
  //   uri: "/admin/page/blogs",
  //   icon: <BiGridAlt className='mx-2 text-[18px]' />
  // },
  {
    title: "UHPC Standards",
    uri: "/admin/page/standards",
    icon: <BiSolidFilePdf className='mx-2 text-[18px]' />
  },
  // {
  //   title: "Certificate",
  //   uri: "/admin/pages/certificate",
  //   icon: <BiCertification className='mx-2 text-[18px]' />
  // },
  {
    title: "Events",
    uri: "/admin/page/events",
    icon: <BiSolidCalendarEvent className='mx-2 text-[18px]' />
  },
  {
    title: "Subscriber",
    uri: "/admin/pages/subscriber",
    icon: <BiUser className='mx-2 text-[18px]' />
  },
  {
    title: "Users",
    uri: "/admin/pages/users",
    icon: <BiUser className='mx-2 text-[18px]' />
  },
  {
    title: "Contact",
    uri: "/admin/pages/contact",
    icon: <BiSolidContact className='mx-2 text-[18px]' />
  },
];


const SideBar = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mt-4'>
        <img className='w-[12rem]' src={Logo} />
      </div>
      <ul className='w-[100%] mt-5'>
        {
          sideBarList?.map((menu: any, index: number) => {
            return <li key={index} className='py-2 hover:bg-[#4091ca] hover:text-[#fff] font-[600]  w-[90%] rounded mx-3 my-2'>
              <Link className='flex items-center' to={menu?.uri}>{menu.icon}
                <span>{menu.title}</span></Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default SideBar