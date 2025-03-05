import { FaFacebookSquare, FaInstagramSquare, FaSearch } from 'react-icons/fa';
import Logo from '../../assets/images/logo-2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMainContext } from '@/Context/MainContext';
const Footer = () => {

    const [email, setEmail] = useState<any>(null);
    const [content, setContent] = useState<any>("Subscriber");
    const [isLoader, setIsLoader] = useState(false);
    const MainContext = useMainContext();
    return (
        <div className="bg-gray-100 py-8 px-4 "
        // style={{ backgroundImage: `url('${BG7}')`, backgroundSize: '100%' }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Contact Info */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <img src={Logo} alt="Logo" className="w-24 h-24 mb-4" />
                    <p className="text-sm text-gray-600">
                        At Universal Holistic Practitioners Community, we are dedicated to being
                        your partner on the path to a better life.
                    </p>
                    <p className="mt-4 text-lg font-semibold">admin@universalhpc.com</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/share/1GapMjHwwH/?mibextid=wwXIfr" target='_blank' className="text-blue-600">
                            <FaFacebookSquare className='text-[2rem]'></FaFacebookSquare>
                        </a>
                        {/* <a href="#" className="text-red-600">
                           <FaYoutubeSquare className='text-[2rem]'/>
                        </a> */}
                        <a href="https://www.instagram.com/universalholisticpractitioners?igsh=b2F0cmt5NnVtOHRv&utm_source=qr" target='_blank' className="text-pink-600">
                            <FaInstagramSquare className='text-[2rem]' />
                        </a>
                    </div>
                </div>
                {/* Latest from Blog */}
                <div className='ml-20'>
                    <h2 className="text-xl font-bold mb-4">Links</h2>
                    <ul>
                        <li className='my-2'><Link to={"/"}>Home</Link></li>
                        <li className='my-2'><Link to={"/pages/about-uhpc"}>About</Link></li>
                        {/* <li className='my-2'><Link to={'/pages/uhpc-blogs'}>Blogs</Link> </li> */}
                        <li className='my-2'><Link to={'/contact-us'}>Contact Us</Link> </li>

                    </ul>

                </div>
                {/* Subscribe */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Subscribe</h2>
                    <div className='flex flex-col'>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-[5px] rounded-[5px] text-sm text-gray-700 border-none focus:ring-0 focus:outline-none"
                        />
                        {/* <textarea
                            placeholder="Message"
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-4 h-[10vh]  py-2 mt-2 rounded-[5px] rounded-[5px] text-sm text-gray-700 border-none focus:ring-0 focus:outline-none"
                        /> */}
                        <button onClick={async () => {
                            setIsLoader(true);
                            await MainContext?.subscribeToMail!({ email, content });
                            setIsLoader(false);
                        }} className="bg-[#66bc43] text-[#111] mt-5  rounded-[5px] px-4 py-[10px]">
                            {isLoader ? "Please Wait..." : "Subscribe"}
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer