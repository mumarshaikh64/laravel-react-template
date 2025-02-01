import React from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import TrainingProviderApplication from './TrainingProviderApplication'

const ApplayJoin = () => {
    return (
        <div className='main-box mt-[8rem]'>
            <div className={`hero-section   md:mt-0 mt-[-40px] flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="md:px-[4rem] px-4 py-[5.5rem]">
                    <h3 className="text-[#1f3831] text-2xl font-bold">UHPC Accredited<br /> Training Provider Application<br />Standard Membership</h3>
                </div>
            </div>
            <div className='page-content' id='page-content'>
                <nav className="bg-white md:px-20 px-4 py-3 rounded-md shadow-sm">
                    <ol className="list-reset flex text-sm text-gray-700">
                        <li>
                            <a href="#" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500"> Join UHPC <span className="mx-0">{" >> "}</span> Executive Training Providers <span className="mx-0">{" >> "}</span> </li>
                    </ol>
                </nav>


                <div className=''>
                    <div className='w-[100%] md:px-[4.8rem] px-4 py-4'>
                        <h3 className='text-2xl'>UHPC Accredited Training Provider Application - Standard Membership</h3>
                        <p className='my-4'>Please complete the following application form.  Once you have completed your application form, you must pay the $394.53 subscription fee. Fees can be paid via PayPal subscription and renewal payments will be automatically taken each year unless cancelled or you may pay direct via credit or debit card and future renewals will be sent via invoice. You may also request to pay by Bank Transfer or request an invoice. (please contact us if requiring this option)   Payment details will be displayed when you have submitted your application below:</p>
                        <p className='my-4'>Spread the cost with monthly payments  - Please note total payable with this option - 1st months payment $118.36 includes $78.91 non refundable deposit then thereafter $39.45 pcm - total 1st year $552.34, 2nd year and thereafter monthly payments continue at $39.45 pcm - total yearly payment $473.44.</p>
                        <p className='my-4'>To apply fsor the UHPC Training Provider Membership, applicants must confirm that their training manuals are fully prepared and comply with the UHPC standards and guidelines. If the training manuals are not ready, the application will not be accepted (a refund will be issued minus your deposit). Membership is renewed annually, and we want to ensure our members maximise the benefits of their membership.</p>
                        <p className='my-4'>Please note applications submitted without payment will be removed after 3 days.</p>
                    </div>
                    <TrainingProviderApplication/>
                </div>
            </div>
        </div>
    )
}

export default ApplayJoin