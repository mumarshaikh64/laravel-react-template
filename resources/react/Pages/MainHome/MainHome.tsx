import { Link, useNavigate } from 'react-router-dom';
import Banner1 from '../../assets/images/bg-2.png';
import backgroundImage from '../../assets/images/bg-3.png';
import backgroundImage3 from '../../assets/images/bg-8.png';



import { FaCircleCheck } from 'react-icons/fa6';

const data = {
  "buttons": [
    { "text": "JOIN UHPC - PRACTITIONERS", "style": "bg-green-500", "to": "/pages/holistic" },
    { "text": "JOIN UHPC - TRAINING PROVIDERS", "style": "bg-green-500", "to": "/pages/holistic" },
    { "text": "JOIN UHPC - TRAINING PROVIDER & PRACTITIONERS", "style": "bg-green-500", "to": "/pages/holistic" },
    { "text": "JOIN UHPC - CORPORATE MEMBERS", "style": "bg-green-500", "to": "/pages/holistic" },
    { "text": "FIND A PRACTITIONER", "style": "bg-green-500", "to": "/pages/holistic" },
    { "text": "FIND A TRAINING PROVIDER", "style": "bg-green-500", "to": "/pages/holistic" },
    // { "text": "INSURANCE", "style": "bg-green-500" },
    { "text": "JOIN UHPC BEAUTY", "style": "bg-blue-500",'to':"/pages/beauty" }
  ],
  "content": {
    "title": "Our Guarantee",
    "description": "Join now and enjoy unbeatable value for life. Your membership price stays put, even if rates go up later. It's our promise to you - great benefits, predictable costs, and total peace of mind.",
    "ctaText": "Join now"
  }
}



const MainHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='bg-[#4091ca] py-3 '>
        <div className="w-full bg-[#fff]  flex-col md:flex-row  px-5  md:px-[4rem] py-10 flex justify-between"
          style={{ backgroundImage: `url('../../assets/images/bg-1.png')` }}
        >
          <div className='w-full md:w-[49%]'>
            {/* Buttons Section */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3 mb-8">
              {data.buttons.map((button, index) => (
                <Link
                  to={button.to!}
                  key={index}
                  className={`text-white text-center text-[15px]  font-[600] py-3 px-2 rounded-full shadow ${button.style} hover:opacity-90`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>

          <div className='w-full md:w-[49%]'>

            {/* Content Section */}
            <div className="p-2 rounded  text-center md:text-left">
              <p className='mb-4 mt-0 text-[16px] border-l-4 pl-2 border-[#66bc43]'>The UHPC trustmark serves as a symbol of trust and reliability
                for holistic and alternative therapists,practitioners,and training
                providers.</p>
              <p className='mb-4 mt-0 text-[16px] pl-3'>
                Welcome to UHPC-The largest leading Independent professional
                accreditation board worldwide, specialising in certifying alternative
                therapists,practitioners,healers,and training providers who practice
                holistic and alternative theraples.
              </p>
              <p className='mb-4 mt-0 text-[12px] pl-3'>
                Our aim is to ensure that these professionals adhere to high standards of good and proper practice,empowering individuals to access the best possible practitioners and training providers.
              </p>
              <h2 className="text-xl font-bold text-gray-800 mb-2 pl-3">
                {data.content.title}
              </h2>
              <p className="text-gray-600 mb-2 pl-3">{data.content.description}</p>
              <p className="text-[#4091ca] font-bold mb-4 text-[18px] pl-3">Get UHPC certified today</p>
              <Link to={'/pages/holistic'} className="border border-[#4091ca] text-[#4091ca] font-semibold py-2 px-6 rounded-full shadow  ml-3">
                {data.content.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className='bg-[#4091ca] py-3'>
        <div className="w-full bg-[#fff] flex-col md:flex-row  px-5  md:px-[4rem]   py-10 flex justify-between">
          <div className='md:w-[40%] w-full'>
            <img src={Banner1} className='md:ml-[-9rem] ml-0 md:h-[24rem] ' />
          </div>

          <div className='md:w-[60%] w-full'>

            {/* Content Section */}
            <div className="p-2 rounded  text-center md:text-left">
              <h4 className='text-[#66bc43] text-[2.5rem] font-[700]'>Get UHPC certified today</h4>
              <p className='text-[16px] font-[700]  mt-4'>Get UHPC certified and receive exclusive use of our Trustmark - recognised internationally by clients forgood and proper practice.</p>
              <h4 className='text-[#111] text-[1.1rem] font-[700] mt-4 mb-2'>Benefits also include:</h4>
              <ul>
                <li className='text-[16px] font-[600] mb-2'>• Straight forward and affordable certification so it's easy for you to get accredited.</li>
                <li className='text-[16px] font-[600] mb-2'>• Professional recognition that you provide a standard of quality people can trust</li>
                <li className='text-[16px] font-[600] mb-2'>• Dedicated UHPC profile page,helping you reach 1000s of potential clients.</li>
                {/* <li className='text-[16px] font-[600] mb-2'>• Low cost insurance discounts to cover your practice at an affordable rate.</li> */}
                <li className='text-[16px] font-[600] mb-2'>• Free monthly advertising to promote your services to even more potential clients.</li>
                <li className='text-[16px] font-[600] mb-2'>• You join one of the largest professional Therapist communities in the world.</li>
              </ul>
            </div>
            <Link to={'/pages/holistic'} className="bg-[#66bc43] text-[#111] font-semibold py-2 px-6 rounded-full shadow  ml-3">
              {data.content.ctaText}
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-[#4091ca] pt-3 pb-5'>
        <div className="w-full bg-[#ffffff36]  mx-auto px-[4rem] py-10 flex justify-between flex-col items-center"
          style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: '100%' }}>
          <h4 className='text-center text-[1.5rem] font-[700] text-[#66bc43] '>Get UHPC certified and receive exclusive use of our Trustmark recognised internationally by clients for good and proper practice.
            Benefits also include:</h4>
          <ul className='mt-4'>
            <li className='flex items-center my-4 text-[#111] font-[700]'><FaCircleCheck className='text-[#66bc43] mr-2 text-[1.5rem]' /> Apply to be an UHPC member using our straight forward on line application form</li>
            <li className='flex items-center my-4 text-[#111] font-[700]'><FaCircleCheck className='text-[#66bc43] mr-2 text-[1.5rem]' /> The UHPC Board will review your application and followup with any extra questions</li>
            <li className='flex items-center my-4 text-[#111] font-[700]'><FaCircleCheck className='text-[#66bc43] mr-2 text-[1.5rem]' /> If your application meets the board's standards-congratulations,you are UHPC certified</li>
          </ul>
        </div>
      </div>



      {/* <div className='bg-[#4091ca] pt-1 pb-5'>
        <div className="w-full bg-[#ffffffcf]  mx-auto px-[4rem] py-10 flex justify-between flex-col items-center"
          style={{ backgroundImage: `url('${backgroundImage1}')`, backgroundSize: '100%' }}>
          <h4 className='text-center text-[1.5rem] font-[700] text-[#66bc43] '>We already help hundreds of UHPC approved practitioners all over
            the world.</h4>
          <h3 className='text-[5rem]'>❛❜</h3>
          <p className='text-[20px] text-center'>"A very professional organisation accrediting holistic training providers and the rapists"
            <br /> Michelle Burton - Lytham , Lancs UK
          </p>
          <h3 className='text-[3rem] font-[700] flex mt-2'>˂ <p style={{ color: "transparent" }}>s</p> ˃</h3>
        </div>
      </div> */}

      <div className="relative z-[99] bg-[#8cd136] text-center text-blue-600 font-semibold py-4  h-[30vh]"
        style={{ backgroundImage: `url('${backgroundImage3}')`, backgroundSize: '100%', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
      >
        <div className="absolute inset-x-0 bottom-[-10px] mt-5 h-5  bg-blue-500"></div>
        <div className="relative z-[1] text-[#fff] text-[3rem] text-center flex items-center justify-center mt-7">
          Get UHPC certified today
        </div>
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rotate-45"></div>
      </div>

      <div className='bg-[#fff] pt-1 pb-0'>
        <div className="max-w-7xl bg-[#fff]  mx-auto px-[4rem] py-10 flex justify-between flex-col items-center"
        >
          {/* <h4 className='text-center text-[1.9rem] font-[700] text-[#66bc43] '>WHAT OUR CLIENTS SAY</h4>
          <h3 className='text-[5rem]'>❛❜</h3> */}
          <p className='text-[20px] text-center mb-3'>We accept members worldwide. From Europe,to America,to Asia and beyond.</p>
          <button onClick={()=>{navigate("/pages/holistic")}} className="bg-[#66bc43] mt-4 text-[#111] font-semibold py-2 px-6 rounded-full shadow  ml-3">
            {"Apply Today"}
          </button>
        </div>
      </div>


      <div className='bg-[#fff] pt-1 pb-0'>
        <div className="w-full bg-[#ffffffcf]  mx-auto px-[4rem] py-10 flex justify-between flex-col items-center"
          style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: '100%' }}>
          <h4 className='text-center text-[1.9rem] font-[700] text-[#66bc43] '>WHAT OUR CLIENTS SAY</h4>
          <h3 className='text-[5rem]'>❛❜</h3>
          <p className='text-[20px] text-center'>"Very happy that this organisation is thoroughly checking our qualifications and even better that I do not have to pay towards any organisation linked to disbelief" Maryam Mohammed"
          </p>
          <h3 className='text-[3rem] font-[700] flex mt-2'>˂ <p style={{ color: "transparent" }}>s</p> ˃</h3>
        </div>
      </div>

      {/* <div className='bg-[#4091ca] pt-5 pb-5'>
        <div className="max-w-7xl bg-[#ffffffcf]  mx-auto px-[4rem] py-10 flex justify-center flex-col items-center"
          style={{ backgroundImage: `url('${backgroundImage2}')`, backgroundSize: '100%', height: "50vh" }}>
          <h4 className='text-center text-[1.5rem] font-[700] text-[#111] '>DID YOU KNOW? AS A SIGNED UP MEMBER YOU CAN USE THE UHPC LOGO
            ONY OUR WEBSITE,STATIONERY,OR BLOG/SOCIAL MEDIA PAGES.</h4>
        </div>
      </div> */}

    </div>
  )
}

export default MainHome