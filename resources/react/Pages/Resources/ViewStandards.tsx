import React, { useEffect, useState } from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import { BaseApi, useMainContext } from '@/Context/MainContext'
import { useParams } from 'react-router-dom';

const ViewStandards = () => {
    const MainContext = useMainContext();
    const [pdf, setPdf] = useState<any>(null);
    const { id } = useParams(); // Get ID from URL



    useEffect(() => {
        getAllPdfById(id);
    }, [])

    const getAllPdfById = async (id: any) => {
        try {
            const response = await BaseApi.get(`/pdf/${id}`);
            if (response.status == 200) {
                setPdf(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='main-box mt-[5.6rem]  '>

            <div className={`hero-section   flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="md:px-[4rem] px-2 md:py-[5rem] py-[2rem]">
                    <h3 className="text-[#111] mt-[4rem] md:text-4xl text-2xl font-bold">{pdf?.name}</h3>
                </div>
            </div>

            <div className='page-content'>
                <nav className="bg-white md:px-20 px-4 py-3 rounded-md shadow-sm">
                    <ol className="list-reset md:flex text-sm text-gray-700">
                        <li>
                            <a href="#" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li>
                            <a href="#" className=" font-[600] hover:text-[#4091ca]">Resources</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500">{pdf?.name}</li>
                    </ol>
                </nav>
                <div className='md:px-[4.5rem] flex-col md:flex-row flex py-10'>
                    <div className='md:w-[80%] w-full px-10'>
                        <h3 className="text-[#111] mt-[4rem] text-2xl font-bold">{pdf?.name}</h3>
                        <p className='py-4'>{pdf?.short_description}</p>
                    </div>
                    <div className='shadow-lg px-4 py-4 w-full md:w-[30%]'>
                        <h3 className='text-[#111] mt-[2rem] mb-[1rem] text-2xl font-bold'>Download:</h3>
                        <button onClick={() => {
                            const a = document.createElement("a");
                            a.href = window.Laravel.asset_url + '/' + pdf?.pdf;
                            a.download = pdf?.name || "download.pdf";
                            a.click();

                        }} className='mt-4 mb-4  py-2 px-4 font-[600] bg-[#4091ca] rounded text-[#fff]  '>{pdf?.name}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStandards