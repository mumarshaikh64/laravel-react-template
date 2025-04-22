import { useState } from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import { toast } from 'react-toastify';
import { BaseApi } from '@/Context/MainContext';


const ContactUs = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cemail, setcEmail] = useState('');

    const [message, setMessage] = useState('');


    const handleSubmit = async () => {

        if (!name || !email || !message) {
            toast.error('All fields are required!');
            return; // Prevent form submission if validation fails
        }
    
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address!');
            return; // Prevent form submission if email is invalid
        }
        
        if (!name || !email || !message) {
            toast.error('All fields are required!');
            return; // Prevent form submission if validation fails
        }
    
        // Validate email format
        if (email != cemail) {
            toast.error('Please email not match!');
            return; // Prevent form submission if email is invalid
        }
        const contactData = {
            name,
            email,
            message,
        };

        try {
            const response = await BaseApi.post('/postcontact', contactData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // Check if the response is successful
            if (response.status == 200) {
                toast.success('Your message has been sent successfully!');
                window.location.reload();
            } else {
                toast.error(response.data.message || 'Something went wrong!');
            }
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            toast.error('Network error, please try again.');
        }
    };
    return (
        <div className='main-box mt-[5.6rem]  '>
            <div className={`hero-section   flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="md:px-[4rem] px-4 md:py-[5.5rem] py-[5rem]">
                    <h3 className="text-[#1f3831] text-2xl font-bold">Contact UHPC</h3>
                </div>
            </div>
            <div className='page-content'>
                <nav className="bg-white md:px-20 px-4 py-3 rounded-md shadow-sm">
                    <ol className="list-reset flex text-sm text-gray-700">
                        <li>
                            <a href="#" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500">Contact</li>
                    </ol>
                </nav>

                <div className='flex'>
                    <div className='md:w-[75%] w-full px-[1.3rem] md:px-[4.8rem] py-4'>
                        <h2 className='font-[700] text-[#1f3831]  text-[1.7rem] mb-4'>Get in touch</h2>
                        <p className='text-[#1f3831] py-3 mt-2 font-[600]'>The best way to get in touch and receive a quick response is via Email</p>
                        <p className='text-[#1f3831] py-3'>
                            Holistic Therapy Services Ltd - UHPC will endeavour to reply to your enquiry as soon as possible unless on vacation, but at busy times your patience is required.  All our correspondence is completed by email and we will contact you within 24hrs - Mon - Fri.
                        </p>
                        <p className='text-[#1f3831] py-3'>
                            Please ensure you type in your full and correct email address. We are unable to respond otherwise. If you have not had a response within 48hrs please check your junk folder.
                        </p>
                        <p className='text-[#1f3831] py-3 mt-2'>
                            <strong className='font-[800]'>IMPORTANT NOTICE FOR CURRENT MEMBERS</strong> - Ensure you include your <strong className='font-[800]'>UHPC</strong> unique ref number when contacting us  order for us to deal with your request more quickly and efficiently. Your UHPC number can be found on your certificate.
                        </p>
                        <p className='text-[#1f3831] py-3 mt-2'>Email: <a href='#' className='font-[800]'>admin@universalhpc.com</a></p>
                        {/* <p className='text-[#1f3831] py-3 mt-2'>Tel: +44 1706 838332 (10am - 2pm - Mon - Fri excluding Bank Holidays) - If leaving a voice message <strong>please tell us your UHPC number</strong> if you are a current member. We are not always able to return a phone call depending on the time zone, so we recommend that you also email us. </p> */}
                        {/* <p className='text-[#1f3831] py-3 mt-2'>HOLISTIC THERAPY SERVICES LTD<br />
                            Office 4,<br />
                            Duke Street Business Centre,<br />
                            Littleborough,<br />
                            Lancashire,<br />
                            OL15 8DL, UK
                        </p> */}

                        <h3 className='font-[900] text-[2rem] text-[#1f3831] mt-4 mb-4'>Contact Form</h3>
                        <div className='card shadow-xl py-10 rounded md:px-10 px-2 mt-5'>
                            <div className='my-2'>
                                <label className='w-full text-[#0e2791] font-[600] text-[14px] py-2'>Your Name:<span className='mx-1 text-[#e74c3c]'>*</span></label>
                                <input onChange={(e) => setName(e.target.value)} className='w-full h-10 bg-[whitesmoke] md:px-4  px-2 py-2 outline-none rounded'></input>
                            </div>
                            <div className='my-2'>
                                <label className='w-full text-[#0e2791] font-[600] text-[14px] py-2'>Your Email Address:<span className='mx-1 text-[#e74c3c]'>*</span></label>
                                <input onChange={(e) => setEmail(e.target.value)} className='w-full h-10 bg-[whitesmoke] px-4  py-2  outline-none rounded'></input>
                                <input onChange={(e) => setcEmail(e.target.value)} className='w-full h-10 bg-[whitesmoke] px-4   py-2 outline-none rounded my-2' placeholder='Confirm'></input>

                            </div>
                            <div className='my-2'>
                                <label className='w-full text-[#0e2791] font-[600] text-[14px] py-2'>Message:<span className='mx-1 text-[#e74c3c]'>*</span></label>
                                <textarea onChange={(e) => setMessage(e.target.value)} className='w-full h-20 bg-[whitesmoke] px-4  outline-none rounded'></textarea>
                            </div>
                            {/* <div className='my-2'>
                                <label className='w-full text-[#0e2791] font-[600] text-[14px] py-2'>What is 20 minus 7 ?<span className='mx-1 text-[#e74c3c]'>*</span></label>
                                <input className='w-full h-10 bg-[whitesmoke] px-4  outline-none rounded'></input>
                                <p className='text-[14px] font-[600] text-[#bf8423]'>Please answer this question to help us combat spam.</p>
                            </div> */}
                            <button onClick={handleSubmit} className='bg-[#4091ca] h-10 w-40 hover:bg-[#FFFFFF] hover:border-2 hover:border-[#4091ca] text-[#fff] text-[15px] hover:text-[#111] font-[600] my-2'>Send Message</button>
                        </div>
                    </div>

                </div>

                {/* <div className="py-[100px] stripe stripe-bottom stripe-default-bg-image dark-colored-bg" style={{
                    backgroundImage: `url(${AboutBanner})`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                }}>
                    <div className="stripe-upper-bg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 columns">
                                <div className="lead-text-large width-80pct-centered text-center text-white">
                                    <p className='text-[1.5rem] font-[600] px-[200px]'>
                                        UHPC Members can get <a href='#' className='text-[#f5cb87] hover:text-[#d9ffea]'>discounted insurance</a> from our preferred Insurance Providers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ContactUs