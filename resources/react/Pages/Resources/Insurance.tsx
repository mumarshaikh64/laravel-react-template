import React from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import AboutBanner from '../../assets/images/about2.jpg'
import { FaArrowRight } from 'react-icons/fa'

const Insurance = () => {
    return (
        <div className='main-box mt-[5.6rem]  '>
            <div className={`hero-section flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="px-[4rem] py-[5.5rem]">
                    <h3 className="text-[#1f3831] pr-40  text-3xl font-bold">Insurance for Therapists, Healers, Spiritual Practitioners, Counsellors, Complementary Health,</h3>
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
                            <a href="#" className="text-[#4091ca] font-[600] hover:text-[#4091ca]">Resources</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500">Insurance</li>
                    </ol>
                </nav>
                <div className='flex'>
                    <div className='w-[75%] px-[4.8rem] py-4'>
                        <h2 className='font-[700] text-[1.4rem]'>Insurance</h2>
                        <p className='font-[700] text-[#1f3831] mt-3'>Do I really need to be insured as a holistic therapist or training provider?</p>
                        <p className='text-[#1f3831] py-3'>
                            You have worked hard to qualify as a holistic practitioner and will already have your own professional standards, however unforeseen and unpredictable things can and sometimes do occur. The tendency and unfortunate trend of the public to seek legal action against professionals appears to be increasing, especially with the promotion of the no win, no fee culture that we are currently undergoing. The number of insurance claims made against therapists is rising and large sums of money are sometimes claimed for minor damages. For your sake and your clients we advise that you always take out insurance.
                        </p>
                        <p className='text-[#1f3831] py-3'>
                            <strong> Do I need to be a member of UHPC to obtain insurance?</strong>  As an accredited member with UHPC we work closely with insurance providers to ensure our members have access to the best insurance cover available. However, it is important to note that UHPC is not an insurance company. Instead, we provide accreditation and support to practitioners and training providers in the holistic and wellbeing sector.  For any enquiries related to insurance, we recommend contacting the insurance provider directly. You can find a list of our affiliate and recommended providers in your members dashboard. You do not need to be a registered member of UHPC to request insurance and you may contact them directly below. However members of UHPC do have the benefit of obtaining a discount on their insurance quote and will have a number of insurance providers to choose from.  Members will have access to a private members area and can then obtain insurance with discounts  of up to 12% included in your quote.
                        </p>
                        <p><span className='font-[700] text-[#1f3831]'>Can I get insurance cover outside of the UK</span>-<span className='text-[#1f3831] font-[400]'>
                            For members of UHPC then the answer is yes  - Our recommended providers cover members in the UK, Ireland, Wales, Scotland, Australia, New Zealand & most of Europe. You have the freedom to choose any insurance provider that best suits your needs. Showing them you are a registered member of UHPC will usually result in them being happy to offer this but UHPC make no guarantees.  While we can't always recommend specific insurance providers, we encourage you to research options in your area. If you find a company you're satisfied with, please let us know. We'd be happy to consider listing them as a resource for other professionals.
                        </span></p>
                        <p className='text-[#1f3831] py-3'>It's important to note that as an accreditation board, our primary focus is on maintaining high standards in our field. Accreditation itself is a significant achievement that:</p>

                        <ul style={{ listStyleType: "initial" }} className='text-[#1f3831] ml-4'>
                            <li className='my-2'>Validates your expertise and professionalism</li>
                            <li className='my-2'>Enhances your credibility in the industry</li>
                            <li className='my-2'>Demonstrates your commitment to excellence</li>
                        </ul>
                        <p className='text-[#1f3831] py-3'>
                            <strong> ​I have qualified taking a distance learning course,  can I still join UHPC and will I still be able to obtain insurance cover</strong> - Yes the majority of our insurance providers welcome students who have studied with any of our UHPC registered distance learning providers as do UHPC.
                        </p>
                        <p className='text-center font-[900] text-[#1f3831] py-3'>DISCOUNT FOR UHPC MEMBERS </p>
                        <p className='text-[#1f3831] py-3'>Members will be eligible for a discount with some of our affiliate insurance providers and will have access to more insurance providers including Cyber Security option for those offering Online services - If you are an UHPC member request your insurance via the <a href='#' className='text-[#4091ca] font-[600]'>members dashboard</a> to get a quote to include a discount</p>
                        <p className='text-center font-[600] text-[#1f3831] py-3'>For Beauty Insurance click here: <a href='' className='text-[#4091ca] font-[600]'> Beauty Insurance </a></p>

                        {/* <button className='my-10 border py-2 px-4 font-[600] border-2 border-[#1f3831]'>Get an Insurance Quote</button> */}

                    </div>
                    <div className='w-[25%] py-4 px-4'>
                        <h3 className='font-[700] text-[20px]'>UHPC Membership Includes:</h3>
                        <div className=''></div>
                        <div className='card bg-[#fff]  mt-6 shadow-xl'>
                            <img src='https://www.uhpc.co.uk/site/assets/files/1922/therapist-holding-uhpc-badge.389x0.1532956894.jpg' />
                            <div className=' flex justify-center flex-col items-center'>
                                <ul className='aboutRightUl'>
                                    <li>Members Therapy Badge and Certificate</li>
                                    <li>Listing on our website</li>
                                    <li>Discount on Holistic Insurance</li>
                                    <li>Discount on a wide range of Holistic health products</li>
                                    <li>Promote your therapies on our workshops and events page free</li>
                                    <li>Use our accredited therapist logo on your own website or blog page</li>
                                </ul>
                                <button className='mt-4 mb-4 border py-2 px-4 font-[600] border-2 border-[#1f3831]'>Join Now</button>
                            </div>
                        </div>
                        <div className='card bg-[#fff]  mt-6 shadow-xl  mt-20'>
                            {/* <h3 className='font-[700] text-[20px]'>UHPC Membership Includes:</h3> */}
                            <div className=''>
                                <img src='https://www.uhpc.co.uk/site/assets/files/1922/therapist-holding-uhpc-badge.389x0.1532956894.jpg' />
                                <div className=''></div>
                                <h3 className='mx-4 my-3 text-[16px] text-[#4091ca] font-[600] courser-pointer '>Top Tips for Starting Your Own Holistic Therapy Business</h3>
                                <div className=' flex justify-center flex-col items-center'>
                                    <p className='px-4 text-[13px]'>
                                        Starting your own holistic therapy business can be a rewarding journey, allowing you to share your passion for wellness while helping others achieve balance in mind, body, and spirit. However, ...
                                    </p>
                                    <p className='w-full px-4 mt-2 text-[14px] font-[600] text-[#ccc]'>3 December 2024</p>
                                    <div className='flex items-center justify-end w-full px-4'>
                                        <button className='font-[600] flex items-center mt-2 mb-2 text-[#4091ca]'>Read More <FaArrowRight className='ml-1 text-[14px]' /> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[100px] stripe stripe-bottom stripe-default-bg-image dark-colored-bg" style={{
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

export default Insurance