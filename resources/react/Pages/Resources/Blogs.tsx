import React from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'

import AboutBanner from '../../assets/images/about2.jpg'
import { useMainContext } from '@/Context/MainContext';




const Blogs = () => {
    const mainContext = useMainContext();
    return (
        <div className='main-box mt-[5.6rem]  '>

            <div className={`hero-section   flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="px-[4rem] py-[5rem]">
                    <h3 className="text-[#111] mt-[4rem] text-4xl font-bold">UHPC Blog</h3>
                </div>
            </div>

            <div className='page-content'>
                <nav className="bg-white px-20 py-3 rounded-md shadow-sm">
                    <ol className="list-reset flex text-sm text-gray-700">
                        <li>
                            <a href="#" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li>
                            <a href="#" className=" font-[600] hover:text-[#4091ca]">Resources</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500">Blogs</li>
                    </ol>
                </nav>
                <div className='flex justify-between px-10 items-start flex-wrap my-10'>
                    {
                        mainContext?.allBlogs == null ?
                            <p>Pease Wait...</p>
                            :
                            mainContext?.allBlogs?.map((b, i) => {
                                return (
                                    <BlogCard key={i} data={b} />
                                );
                            })
                    }
                    <div className='w-full flex justify-center items-center'>
                        <Pagination />
                    </div>
                </div>

                <div className="py-[100px] stripe stripe-bottom mt-4 stripe-default-bg-image dark-colored-bg" style={{
                    backgroundImage: `url(${AboutBanner})`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                }}>
                    <div className="stripe-upper-bg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 columns">
                                <div className="lead-text-large width-80pct-centered text-center text-white">
                                    <p className='text-[25px] font-[600] px-[100px]'>
                                        Did you know? As a signed up member you can use the UHPC Logo on
                                        your website, stationery, or blog/social media pages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



const Pagination = () => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="w-3 h-3 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                    </a>
                </li>
                {[1, 2, 3, 4, 5].map((page, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            className={`flex items-center justify-center px-4 h-10 leading-tight ${page === 3
                                ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                                }`}
                            aria-current={page === 3 ? "page" : undefined}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="w-3 h-3 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
};


function formatDate(created_at: any) {
    const date = new Date(created_at); // Convert the date string to a Date object

    // Get the day, month name, and year
    const day = date.getDate(); // Day of the month
    const month = date.toLocaleString('default', { month: 'long' }); // Full month name
    const year = date.getFullYear(); // Year

    return `${day} ${month} ${year}`; // Return formatted date
}

const BlogCard = ({ data }: { data: any }) => {
    const assetUrl = window.Laravel.asset_url;

    console.log(data);
    return (
        <div className="sm:w-1/2 md:w-1/3 p-4 ">
            <article className="clearfix">
                <div className="bg-white shadow-xl rounded overflow-hidden">
                    <figure className="relative h-[20vh]">
                        <img
                            src={assetUrl + "/" + data?.image_path}
                            alt="Manifesting Your Best Year Yet with Holistic Practices"
                            className="w-full h-[20vh]"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <a
                                href="/blog/manifesting-your-best-year-yet-with-holistic-practices/"
                                className="text-white text-lg font-bold"
                            >
                                <span className="link"></span>
                            </a>
                        </div>
                    </figure>
                    <div className="p-0">
                        <h2 className="text-lg font-semibold mb-2 p-2">
                            <a
                                href="/blog/manifesting-your-best-year-yet-with-holistic-practices/"
                                className="text-[#1f3831] font-[800] text-[22px] "
                            >
                                {data?.name}
                            </a>
                        </h2>
                        <p className="text-gray-700 text-sm mb-4 px-3 line-clamp-2">
                            {data?.short_description}
                        </p>
                        <div className="text-gray-500 py-2 px-3 text-xs mb-0 border-t-2 flex items-center justify-between">
                            <time dateTime="2025-01-07">{formatDate(data?.created_at)}</time>
                            <a
                                href="/blog/manifesting-your-best-year-yet-with-holistic-practices/"
                                className="text-[#1f3831]  hover:underline text-sm font-[700]"
                            >
                                Read More
                            </a>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};



export default Blogs