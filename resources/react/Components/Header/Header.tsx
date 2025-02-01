import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi"; // Import close icon
import { useMainContext } from "@/Context/MainContext";
import Logo from "../../assets/images/logo-1.png";
import Banner from "../../assets/images/banner.jpg";

const Header = () => {
    const mainContext = useMainContext();
    const [isBannerShow, setIsBannerShow] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setIsBannerShow(pathname === "/");
    }, [pathname]);

    return (
        <>
            <div className="absolute top-0 left-0 z-[99] bg-[#f3f4f6b3] w-full md:h-[20vh] h-[16vh] shadow-md rounded-bl-[2rem] rounded-br-[2rem]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center px-10">
                            <img src={Logo} alt="Universal Holistic Logo" className="md:w-[10rem] w-[8rem]" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:space-x-6 mt-40 md:mt-0">
                            {mainContext?.allCategory?.map((link, index) => (
                                <div key={index} className="relative group border-r border-gray-300 pr-4 last:border-r-0">
                                    <Link
                                        to={link.children12?.length ? "#" : link.uri}
                                        className="text-gray-800 font-[700] text-[15px] hover:text-green-500 uppercase"
                                    >
                                        {link.title}
                                    </Link>

                                    {/* Dropdown for Desktop */}
                                    {link.children12?.length > 0 && (
                                        <div className="absolute  left-0 top-full hidden group-hover:block bg-white rounded w-48 shadow-lg z-10">
                                            <ul className="py-2">
                                                {link.children12.map((subLink: any, subIndex: number) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={`/pages${subLink.uri}`}
                                                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-500 hover:text-white"
                                                        >
                                                            {subLink.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden block text-[40px] pl-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <BiX /> : <BiMenu />}
                        </button>

                        {/* Right Icons */}
                        <div className="hidden md:flex items-center space-x-2">
                            {/* <a className="px-2 py-2 bg-[#66bc43] rounded-full text-[14px] text-[#111]">
                                <FaSearch />
                            </a> */}
                            {mainContext?.token ? <DropdownButton /> : (
                                <Link to="/user/auth" className="px-2 py-2 bg-[#66bc43] rounded-full text-[14px] text-[#111]">
                                    <FaUserAlt />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Slide Down) */}
            {mobileMenuOpen && (
                <div className="md:hidden md:mt-0 mt-8  bg-white  shadow-lg absolute w-full z-50">
                    <ul className="py-4 px-6 ">
                        {mainContext?.allCategory?.map((link, index) => (
                            <MobileMenuItem key={index} link={link} />
                        ))}
                    </ul>
                </div>
            )}

            {/* Banner Section */}
            {isBannerShow && (
                <div className="md:mt-[-160px] mt-[90px] md:h-[100%] h-[42vh]">
                    <img src={Banner} style={{ width: "100%", height: "100%" }} alt="Banner" />
                </div>
            )}
        </>
    );
};

// Mobile Menu Item with Dropdown
const MobileMenuItem = ({ link }: { link: any }) => {
    // console.log(link);
    const [open, setOpen] = useState(false);

    return (
        <li>
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left text-gray-800 font-bold py-2 flex justify-between items-center"
            >
                {link?.children12?.length > 0 ? <span>{ link.title }</span> : <Link to={link?.uri}>{link.title}</Link>}
                {link.children12?.length > 0 && <span>{open ? "▲" : "▼"}</span>}
            </button>

            {open && link.children12?.length > 0 && (
                <ul className="bg-gray-100 ml-4">
                    {link.children12.map((subLink: any, subIndex: number) => (
                        <li key={subIndex}>
                            <Link
                                to={`/pages${subLink.uri}`}
                                className="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white"
                            >
                                {subLink.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

// User Dropdown (Desktop)
const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-2 py-2 bg-[#66bc43] rounded-full text-[14px] text-[#111]"
            >
                <FaUserAlt />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <ul className="py-1">
                        <li>
                            <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
