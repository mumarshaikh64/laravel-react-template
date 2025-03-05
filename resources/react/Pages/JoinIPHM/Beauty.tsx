import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import BgBanner from '../../assets/images/header-gradient-bg.png'
import { useMainContext } from '@/Context/MainContext';

const Beauty = () => {
    

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
                </div>
            </div>
        </div>
    )
}



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
    const navigate = useNavigate();
    const MainContext = useMainContext();
    return (
        <div className="stripe stripe-transparent-bg v-notch">
            <div className="stripe-upper-bg"></div>
            <div className="w-full  md:px-[4.5rem] px-4">
                <div className="row">
                    <div className="col-sm-12 columns">
                        <h4 style={{ textAlign: 'center' }} className='text-[1.3rem] py-10'>
                            <em>
                                <strong>
                                    Welcome to UHPC Beauty, the ultimate destination for beauty professionals.
                                </strong>
                            </em>
                        </h4>
                        <p style={{ textAlign: 'center' }} className='py-4'>
                            Boost your beauty business with the power of UHPC Accreditation. Stand out from the competition by showcasing your commitment to the highest industry standards. With our affordable certification, you can attract more clients and gain their trust . Get the recognition you deserve and take your beauty business to new heights.
                        </p>
                        <p style={{ textAlign: 'center' }} className='py-4'>
                            By joining us, you'll gain access to a range of benefits, including affordable and straightforward certification, professional recognition, and a dedicated UHPC profile page to showcase your skills and services. You'll also receive low-cost insurance discounts and free monthly advertising to help grow your business. As a member of UHPC Beauty, you'll become part of a thriving community of beauty professionals who share your passion for the industry. Whether you're just starting out or looking to take your career to the next level.
                        </p>
                        <p style={{ textAlign: 'center' }}>Simply pick the UHPC Beauty membership package below that suits you and fill in the straightforward online application form on the next page. Once complete, our board will review your application for approval. UHPC Beauty is here to support you every step of the way.</p>
                        <h4 style={{ textAlign: 'center' }} className='text-[1.3rem] py-10'>  Join us now and take the first step towards building a successful career in the beauty industry.</h4>


                        {MainContext?.allHolistic == null ? <p>Please Wait...</p>
                            : MainContext?.allHolistic?.length > 0 ?
                                <div className='grid md:grid-cols-3 grid-cols-1 mx-4 gap-4'>



                                    {(
                                        MainContext?.allHolistic?.map((p, i) => {
                                            if (p?.type == "beauty") {
                                                return <div key={i} className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow-lg w-full max-w-md">
                                                    <header className="text-center bg-[#ff6b93] w-full py-8 pt-l-[10px] rounded-t-xl">
                                                        <h3 className="text-xl font-bold text-[#fff]">{p?.name}</h3>
                                                        <p className="text-[#fff]">{p?.short_description}</p>
                                                    </header>

                                                    <div className="py-4 text-center px-2 bg-[hsl(344_100%_42%_/_.1)] w-full">
                                                        <h4 className="text-2xl font-bold text-gray-900">
                                                            £{p?.price} <span className="text-sm text-gray-600">/year inc VAT</span>
                                                        </h4>
                                                    </div>

                                                    <p className="font-semibold py-4">or £{p?.deposit_from}/per month</p>
                                                    <ul className="mt-4 space-y-2 text-gray-700 myLlist">
                                                        {
                                                            p?.list_text?.map((l: any, i: number) => {
                                                                return (
                                                                    <li key={i} className="font-semibold">
                                                                        {l}
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                        {/* <li className="font-semibold">
                                                            Accreditation of unlimited approved therapies
                                                        </li>
                                                        <li className="font-semibold">
                                                            Business profile page with full details, logo and profile images
                                                        </li>
                                                        <li className="font-semibold">
                                                            Use of our exclusive Trustmark on your promotion materials, website
                                                        </li>
                                                        <li className="font-semibold">
                                                            Official UHPC Therapist Certificate and Membership ID badge
                                                        </li>
                                                        <li className="font-semibold">Use the letters UHPC after your name</li> */}

                                                        {/* <li className="font-semibold">
                                                            Links to your website and social media pages included in the UHPC
                                                            directory
                                                        </li>
                                                        <li className="font-semibold">
                                                            Free promotions on our events section & social media pages
                                                        </li>
                                                        <li className="text-[#fff]">
                                                            Advertise on our events section & social media pages
                                                        </li>
                                                        <li className="text-[#fff]">
                                                            Discount membership for your trainers (if applicable)
                                                        </li>
                                                        <li className="text-[#fff]">
                                                            Edit and download certficiates for your students
                                                        </li>
                                                        <li className="text-[#fff]">
                                                            Option to include online courses for accreditation
                                                        </li>
                                                        <li className="text-[#fff]">
                                                            Advertise on our events section & social media pages
                                                        </li>
                                                        <li className="text-[#fff]">
                                                            Discount membership for your trainers (if applicable)
                                                        </li>
                                                        <li className="text-[#fff]">
                                                            Edit and download certficiates for your students
                                                        </li> */}
                                                    </ul>

                                                    <footer className="mt-6 text-center py-4">
                                                    <button onClick={() => {
                                                                navigate(`/pages/view-holistic/${p?.id}/1`);

                                                            }} className='bg-[#fff] w-[100%] border-2 border-[#111] my-4 px-4 py-2  font-bold'>Apply Today</button>
                                                        {/* <a
                                                            href="/join-iphm-beauty/therapists/application/"
                                                            className="inline-block bg-[#ff6b93] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#ff6b93] transition"
                                                        >
                                                            Apply Today
                                                        </a> */}

                                                    </footer>
                                                </div>
                                            }
                                        }))}  </div> : <p>Data Not Founded</p>

                        }
                        {/* <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow-lg w-full max-w-md">
                                <header className="text-center bg-[#ff6b93] w-full py-8 pt-l-[10px] rounded-t-xl">
                                    <h3 className="text-xl font-bold text-[#fff]">Training Provider</h3>
                                    <p className="text-[#fff]">Accreditation of up to 50 courses</p>
                                </header>

                                <div className="py-4 text-center px-2 bg-[hsl(344_100%_42%_/_.1)] w-full">
                                    <h4 className="text-2xl font-bold text-gray-900">
                                        £250 <span className="text-sm text-gray-600">/year inc VAT</span>
                                    </h4>
                                </div>

                                <ul className="mt-4 space-y-2 text-gray-700  myLlist px-2">
                                    <li className="font-semibold">or £25.00/per month</li>
                                    <li className="font-semibold">
                                        Professional recognition and accreditation of up to 50 courses
                                    </li>
                                    <li className="font-semibold">
                                        Business Profile Page with full details, company logo and profile images
                                    </li>
                                    <li className="font-semibold">
                                        Use of our exclusive Trustmark on your promotion materials, website, and approved courses certificates
                                    </li>
                                    <li className="font-semibold">
                                        Personalised UHPC Accredited Certificate
                                    </li>
                                    <li className="">Links to your website and social media pages included in the UHPC directory
                                    </li>
                                    <li className="">
                                        Access to members only dashboard (inc. members shop, disocunted insurance links, download logo's and your certficiates)
                                    </li>
                                    <li className="">
                                        Advertise your courses on our events section & social media pages
                                    </li>
                                    <li className="">
                                        Qualification template for your own student certificates
                                    </li>
                                    <li className="">
                                        Option to include online courses for accreditation
                                    </li>
                                    <li className="">
                                        Discount membership for your trainers (if applicable)
                                    </li>
                                    <li className="text-[#fff]">
                                        Discount membership for your trainers (if applicable)
                                    </li>
                                    <li className="text-[#fff]">
                                        Edit and download certficiates for your students
                                    </li>
                                    <li className="text-[#fff] ">
                                    </li>
                                    
                                </ul>

                                <footer className="mt-8 text-center    py-4">
                                    <a
                                        href="/join-iphm-beauty/therapists/application/"
                                        className="inline-block bg-[#ff6b93] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#ff6b93] transition"
                                    >
                                        Apply Today
                                    </a>

                                </footer>
                            </div>
                            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow-lg w-full max-w-md">
                                <header className="text-center bg-[#ff6b93] w-full py-8 pt-l-[10px] rounded-t-xl">
                                    <h3 className="text-xl font-bold text-[#fff]">Premium: (Trainer/Therapist)</h3>
                                    <p className="text-[#fff]">Accreditation of up to 50 approved courses and unlimited therapies. </p>
                                </header>

                                <div className="py-4 text-center px-2 bg-[hsl(344_100%_42%_/_.1)] w-full">
                                    <h4 className="text-2xl font-bold text-gray-900">
                                        £350.00 <span className="text-sm text-gray-600">/year inc VAT</span>
                                    </h4>
                                </div>

                                <ul className="mt-4 space-y-2 text-gray-700 myLlist px-2">
                                    <li className="font-semibold">or £135/per month</li>
                                    <li className="font-semibold">
                                        Professional recognition and accreditation of up to 50 courses

                                    </li>
                                    <li className="font-semibold">
                                        Accreditation of unlimited approved therapies
                                    </li>
                                    <li className="font-semibold">
                                        Business Profile Page with full details, company logo and profile images
                                    </li>
                                    <li className="font-semibold">
                                        Use of our exclusive Trustmark on your promotion materials, website, and approved courses certificates
                                    </li>
                                    <li className="font-semibold">Premium Training Provider & Therapist Certificate and Members ID Badge
                                    </li>
                                    <li className="">
                                        Links to your website and social media pages included in the UHPC directory
                                    </li>
                                    <li className="">
                                        Use the letters UHPC after your name
                                    </li>
                                    <li className="">
                                        Access to members only dashboard (inc. members shop, discounted insurance links, download logo's and your certficiates)
                                    </li>
                                    <li className="">
                                        Advertise on our events section & social media pages
                                    </li>
                                    <li className="">
                                        Discount membership for your trainers (if applicable)
                                    </li>
                                    <li className="">
                                        Edit and download certficiates for your students
                                    </li>
                                    <li className="">
                                        Option to include online courses for accreditation
                                    </li>
                                </ul>

                                <footer className="mt-6 text-center py-4">
                                    <a
                                        href="/join-iphm-beauty/therapists/application/"
                                        className="inline-block bg-[#ff6b93] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#ff6b93] transition"
                                    >
                                        Apply Today
                                    </a>

                                </footer>
                            </div> */}

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

export default Beauty