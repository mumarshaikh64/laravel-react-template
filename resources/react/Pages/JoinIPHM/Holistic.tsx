import React, { useState } from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import { useMainContext } from '@/Context/MainContext'
import { BiPlus } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const Holistic = () => {
    const MainContext = useMainContext();
    const navigate = useNavigate();
    const [isCorporate, setICorporate] = useState(false);


    const [corporate, setCorporate] = useState([
        {
            "id": "column11061",
            "title": "Corporate Membership - Band 1 (Up to 50 Courses)",
            "description": "A perfect way to promote your business or training school if you have up to 50 courses requiring accreditation",
            "price": "300 /year - VAT included",
            "quarterly_price": "75 per quarter",
            "features": [
                "Accreditation of up to 50 Courses",
                // "Only $12.45 per course",
                "Business Profile Page with full details, company logo and profile images",
                "Exclusive use of our UHPC Trustmark",
                "Personalised UHPC Accredited Corporate Certificate",
                // "Earn £10 per referral with our referral programme",
                // "Discount Insurance available",
                "Access to the members-only dashboard",
                "Links to your website and social media pages included in the UHPC directory",
                // "Free advertising of your services on our events section & social media pages",
                // "Qualification template for your own student certificates",
                // "Option to include online courses for accreditation"
            ],
            "join_link": "/join-iphm/corporate-membership/iphm-corporate-membership-band-1/",
            "more_info_link": "/join-iphm/corporate-membership/"
        },
        {
            "id": "column11065",
            "title": "Corporate Membership - Band 2 (Up to 150 Courses)",
            "description": "A perfect way to promote your business or training school if you have up to 150 courses requiring accreditation",
            "price": "800 /year - VAT included",
            "quarterly_price": "200 per quarter",
            "features": [
                "Accreditation of up to 150 Courses",
                // "Only $10.67 per course",
                "Business Profile Page with full details, company logo and profile images",
                "Exclusive use of our UHPC Trustmark and approved logos",
                "Personalised UHPC Accredited Corporate Certificate",
                // "Earn £10 per referral with our referral programme",
                // "Discount Insurance available - up to 15%",
                "Access to members-only dashboard",
                "Links to your website and social media pages included in the UHPC directory",
                // "Free advertising of your services on our events section & social media pages",
                // "Qualification template for your own student certificates",
                // "Option to include online courses for accreditation"
            ],
            "join_link": "/join-iphm/corporate-membership/iphm-corporate-membership-band-2/",
            "more_info_link": "/join-iphm/corporate-membership/"
        },
        {
            "id": "column11066",
            "title": "Corporate Membership - Band 3 (Up to 400 Courses)",
            "description": "A perfect way to promote your business or training school if you have up to 400 courses requiring accreditation",
            "price": "1200 /year - VAT included",
            "quarterly_price": "300 per quarter",
            "features": [
                "Accreditation of up to 400 Courses",
                // "Only $6.67 per course",
                "Business Profile Page with full details, company logo and profile images",
                "Exclusive use of our UHPC Trustmark and approved logos",
                "Personalised UHPC Accredited Corporate Certificate",
                // "Earn £12 per referral with our referral programme",
                // "Discount Insurance available - up to 15%",
                "Access to members-only dashboard",
                "Links to your website and social media pages included in the UHPC directory",
                // "Free advertising of your services on our events section & social media pages",
                // "Qualification template for your own student certificates",
                // "Option to include online courses for accreditation"
            ],
            "join_link": "/join-iphm/corporate-membership/iphm-corporate-membership-band-3/",
            "more_info_link": "/join-iphm/corporate-membership/"
        }
    ]
    )

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
                    <p style={{ textAlign: 'center', marginTop: 40 }}>
                        <Link to="javascript:void(0)" onClick={()=>{setICorporate(!isCorporate)}} className="border border-[#66bc43]  text-[#111] font-semibold py-2 px-6 rounded shadow  ml-3">
                            View  {isCorporate?"Membership" :"Corporate"} Pricing
                        </Link>
                    </p>
                    {isCorporate ?
                        <div className='md:px-[15rem] my-8'>
                            <div className="grid md:grid-cols-2 grid-cols-1 mx-4 gap-4">
                                {(
                                    corporate?.map((p, i) => {
                                        return <div
                                            className='border-2 border-[#66bc43]'
                                            key={i}>
                                            <div className='px-4 py-4 bg-[#66bc43]'>
                                                <h2 className='text-[#fff] text-[1.3rem]'>{p?.title}</h2>
                                                <p className='text-[#fff] text-[1rem]'>{p?.description}</p>
                                            </div>
                                            <div className='bg-[#e0f2e4] py-4 '>
                                                <p className='text-[#111] text-[1.1rem]'>£{p?.price}</p>
                                            </div>


                                            <div className='bg-[#fff] py-4 '>
                                                <p className='text-[#111] text-[1rem]'>or £{p?.quarterly_price}</p>
                                            </div>
                                            <hr />
                                            <div className='bg-[#fff] py-4 '>
                                                <Accordion list={p?.features} />
                                            </div>

                                            <div className='bg-[#e0f2e4] py-4 flex flex-col items-center'>
                                                <button onClick={() => {
                                                    navigate(`/pages/view-holistic/${p?.id}/0`);

                                                }} className='bg-[#fff] w-[40%] border-2 border-[#111] my-4 px-4 py-2  font-bold'>Apply Today</button>
                                                {/* <a href='#' className='text-[#18ad3d]'>More Information</a> */}
                                            </div>

                                        </div>
                                    })
                                )}
                            </div>
                        </div>
                        : <div className='md:px-[15rem] my-8'>
                            {
                                MainContext?.allHolistic == null ? <p>Please Wait...</p>
                                    : MainContext?.allHolistic?.length > 0 ?
                                        <div className="grid md:grid-cols-2 grid-cols-1 mx-4 gap-4">
                                            {(
                                                MainContext?.allHolistic?.map((p, i) => {
                                                    if(p?.type=="membership"){
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
                                                            <p className='text-[#111] text-[1rem]'>or £{p?.deposit_from}/ Per Month</p>
                                                        </div>
                                                        <hr />
                                                        <div className='bg-[#fff] py-4 '>
                                                            <Accordion list={p?.list_text} />
                                                        </div>

                                                        <div className='bg-[#e0f2e4] py-4 flex flex-col items-center'>
                                                            <button onClick={() => {
                                                                navigate(`/pages/view-holistic/${p?.id}/0`);

                                                            }} className='bg-[#fff] w-[40%] border-2 border-[#111] my-4 px-4 py-2  font-bold'>Apply Today</button>
                                                            {/* <a href='#' className='text-[#18ad3d]'>More Information</a> */}
                                                        </div>

                                                    </div>
                                                    }
                                                })
                                            )}
                                        </div>
                                        : <p>Data Not Founded</p>
                            }
                        </div>}
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
                            <Link to="/pages/beauty" className="bg-[#66bc43]  text-[#111] font-semibold py-2 px-6 rounded-full shadow  ml-3">
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