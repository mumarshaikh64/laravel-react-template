import React, { useState } from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import { useMainContext } from '@/Context/MainContext'
import { BiPlus } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const Holistic = () => {
    const MainContext = useMainContext();
    const navigate = useNavigate();
    return (

        <div className='main-box mt-[8rem]'>
            <div className={`hero-section   md:mt-0 mt-[-40px] flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="md:px-[4rem] px-4 py-[5.5rem]">
                    <h3 className="text-[#1f3831] text-2xl font-bold">Join our global<br /> community today<br />we welcome members <br />from every corner of the world</h3>
                </div>
            </div>
            <div className='page-content' id='page-content'>
                <nav className="bg-white md:px-20 px-4 py-3 rounded-md shadow-sm">
                    <ol className="list-reset flex text-sm text-gray-700">
                        <li>
                            <a href="#" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500"> Join UHPC <span className="mx-0">{" >> "}</span> Holistic</li>
                    </ol>
                </nav>




                <div className='text-center'>
                    <CertificationBanner />
                    <HolisticPackageInfo />

                    <h2 className="text-[#1f3831] text-2xl font-bold py-4">Looking for Corporate Membership?</h2>
                    <p className='py-4'>Corporate membership gives you additional features and allows you up to 400 Accredited courses included with your subscription.</p>

                    <div className='md:px-[15rem] my-8'>
                        {
                            MainContext?.allHolistic == null ? <p>Please Wait...</p>
                                : MainContext?.allHolistic?.length > 0 ?
                                    <div className="grid md:grid-cols-2 grid-cols-1 mx-4 gap-4">
                                        {(
                                            MainContext?.allHolistic?.map((p, i) => {
                                                return <div
                                                    className='border-2 border-[#66bc43]'
                                                    key={i}>
                                                    <div className='px-4 py-4 bg-[#66bc43]'>
                                                        <h2 className='text-[#fff] text-[1.3rem]'>{p?.name}</h2>
                                                        <p className='text-[#fff] text-[1rem]'>{p?.short_description}</p>
                                                    </div>
                                                    <div className='bg-[#e0f2e4] py-4 '>
                                                        <p className='text-[#111] text-[1.5rem]'>£{p?.price}/year</p>
                                                    </div>


                                                    <div className='bg-[#fff] py-4 '>
                                                        <p className='text-[#111] text-[1rem]'>or £{p?.deposit_from} pcm + £{p?.deposit_to} deposit</p>
                                                    </div>
                                                    <hr />
                                                    <div className='bg-[#fff] py-4 '>
                                                        <Accordion list={p?.list_text} />
                                                    </div>

                                                    <div className='bg-[#e0f2e4] py-4 flex flex-col items-center'>
                                                        <button onClick={() => {
                                                            navigate(`/pages/view-holistic/${p?.id}`);

                                                        }} className='bg-[#fff] w-[40%] border-2 border-[#111] my-4 px-4 py-2  font-bold'>Applay Today</button>
                                                        {/* <a href='#' className='text-[#18ad3d]'>More Information</a> */}
                                                    </div>

                                                </div>
                                            })
                                        )}
                                    </div>
                                    : <p>Data Not Founded</p>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}





// import { useState } from 'react';

function Accordion({ list }: { list: Array<any> }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Collapse if the same section is clicked again
        } else {
            setActiveIndex(index); // Open the clicked section
        }
    };

    return (
        <div className="space-y-4">
            {[1].map((item, index) => (
                <div key={index} className=" rounded">
                    <div
                        onClick={() => toggleAccordion(index)}
                        className="cursor-pointer  text-[16px] font-semibold"
                    >
                        <span className='flex items-center justify-center'>View Details: <BiPlus className='bg-[#ccc] text-[#66bc43] w-[25px] h-[25px] rounded ml-2' /></span>
                    </div>
                    {activeIndex === index && (
                        <div className="my-4">
                            <ul className='px-4 '>
                                {
                                    list?.map((l, i) => {
                                        return <li className='py-2 text-[14px]' key={i}>{l}</li>
                                    })
                                }
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}


const HolisticPackageInfo = () => {
    return (
        <div className="stripe stripe-transparent-bg v-notch">
            <div className="stripe-upper-bg"></div>
            <div className="w-full  md:px-[4.5rem] px-4">
                <div className="row">
                    <div className="col-sm-12 columns">
                        <h6 style={{ textAlign: 'center' }} className='text-[1.3rem] py-10'>
                            <em>
                                <strong>
                                    Simply pick the UHPC Holistic package below that suits you and fill in the straightforward online application form on the next page. Once complete, our board will review your application for approval.
                                </strong>
                            </em>
                        </h6>
                        <p style={{ textAlign: 'center' }} className='py-4'>
                            Welcome to UHPC, the ultimate destination for Holistic, spiritual, and alternative health professionals.
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            Our platform is designed to empower you with the tools and resources needed to excel in your field. By joining us, you'll gain access to a range of benefits, including affordable and straightforward certification, professional recognition, and a dedicated UHPC profile page to showcase your skills and services. You'll also receive low-cost insurance discounts and free monthly advertising to help grow your business. As a member of UHPC, you'll become part of a thriving community of holistic and spiritual practitioners who share your passion for the industry. Whether you're just starting out or looking to take your career to the next level.
                        </p>
                        <p style={{ textAlign: 'center', marginTop: 40 }}>
                            <Link to="/pages/view-holistic/0" className="bg-[#66bc43]  text-[#111] font-semibold py-2 px-6 rounded-full shadow  ml-3">
                                For Beauty Click Here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const CertificationBanner = () => {
    return (
        <div className="stripe stripe-narrow stripe-dark-colored-gradient-bg diagonal-pinstripe-bg dark-colored-bg" >
            <div className="stripe-upper-bg"></div>
            <div className="w-full">
                <div className="flex">
                    <div className="w-full">
                        <h2 className="text-center text-2xl text-centers text-white margin-bottom-5px">
                            You’re only a few clicks away from becoming UHPC certified
                        </h2>
                        <p className="lead-text-light text-center text-white margin-bottom-5px"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Holistic