import React from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import { useMainContext } from '@/Context/MainContext'
import { BiSolidFilePdf } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Standarde = () => {
    const MainContext = useMainContext();
    return (
        <div className='main-box mt-[5.6rem]  '>

            <div className={`hero-section   flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="px-[4rem] py-[5rem]">
                    <h3 className="text-[#111] mt-[4rem] text-4xl font-bold">UHPC Standards</h3>
                </div>
            </div>

            <div className='page-content'>
                <nav className="bg-white md:px-20 px-4 py-3 rounded-md shadow-sm">
                    <ol className="list-reset flex text-sm text-gray-700">
                        <li>
                            <a href="#" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li>
                            <a href="#" className=" font-[600] hover:text-[#4091ca]">Resources</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500">Standards</li>
                    </ol>
                </nav>
                <div className='flex justify-between md:px-[4.8rem] px-4 items-start flex-wrap my-10'>
                    <h1 className='text-[#111]  text-4xl font-bold'>UHPC Standards</h1>
                </div>

                <div className='md:px-[4.5rem] px-2'>
                    {
                        MainContext?.allPdf == null ? <div>Please Wait...</div>
                            : MainContext?.allPdf?.length > 0 ?
                                (
                                    MainContext?.allPdf?.map((pdf: any, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="download my-4 flex flex-wrap bg-gray-100 md:p-4 p-2 rounded-lg shadow-md">
                                                <div className="w-full md:w-10/12">
                                                    <h3 className="text-md font-semibold">
                                                        <Link to={`/pages/uhpc-standards/${pdf.id}`}
                                                            className="text-blue-600 hover:underline flex items-center">
                                                            <BiSolidFilePdf className='md:text-3xl text-6xl text-[red] '></BiSolidFilePdf>
                                                            {pdf?.name}
                                                        </Link>
                                                    </h3>
                                                    <p className="text-gray-700 mt-2 line-clamp-2">
                                                        {pdf?.short_description}
                                                    </p>
                                                </div>
                                            </div>);
                                    })

                                ) : <p className='py-4 text-[14px] font-bold text-center'>Data Not Found</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Standarde