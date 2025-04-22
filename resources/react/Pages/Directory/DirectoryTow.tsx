import React, { useState } from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'

import AboutBanner from '../../assets/images/imageBg.jpeg'
import LOGO from '../../assets/images/logo-2.png'

import { BaseApi, useMainContext } from '@/Context/MainContext'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaYoutubeSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom'
function stripHtml(html: any) {
  if (!html) return "";
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

const formatText = (text: any, lineLength = 30) => {
  return text.replace(new RegExp(`(.{${lineLength}})`, "g"), "$1</br>");
};
const DirectoryTow = () => {
  const mainContext = useMainContext();
  const [allProducts, setAllProducts] = useState([]);
  const assetUrl = window.Laravel.asset_url;



  const onGetAllProduct = async (type = "all") => {
    try {
      const respone = await BaseApi.get(`/product/web/${type}`);
      setAllProducts(respone.data);
    } catch (error) {
      console.log(error);
    }
  }


  const socialIcons: any = {
    facebook: <FaFacebook size={30} />,
    twitter: <FaTwitter size={30} />,
    instagram: <FaInstagram size={30} />,
    linkedin: <FaLinkedin size={30} />,
    youtube: <FaYoutubeSquare size={30} />
  };


  
  const [searchValue, setSearchValue] = useState("");


  const onSearch = async () => {
    if (searchValue != "") {
      try {
        const respone = await BaseApi.get(`/product/search/${searchValue}`);
        setAllProducts(respone.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='main-box mt-[5.6rem]  '>
      <div className={`hero-section   flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
        <div className="md:px-[4rem] px-[1rem] md:py-[5rem] py-[3rem]">
          <h3 className="text-[#111] md:text-6xl text-3xl font-bold">Find an<br /> Accredited<br /> Training Provider</h3>
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
              <a href="#" className="text-[#4091ca] font-[600] hover:text-[#4091ca]">Directory</a>
              <span className="mx-0">{" >> "}</span>
            </li>
            <li className="text-gray-500">Find an Accredited Training Provider</li>
          </ol>
        </nav>

        <div className=''></div>
        <div className='mt-4 w-full md:text-left text-center flex justify-center items-center flex-col'>
          <h2 className='font-[700] text-[2.2rem] text-[#666] py-2 my-4'>Find an Accredited Training Provider</h2>
          <p className='font-[500] text-[1.4rem] text-center md:px-20 px-4 text-[#666] py-2 my-1'>Our search tool only lists UHPC accredited Training Providers.</p>
          <p className='text-[#4091ca] font-[600] text-[20px] md:mb-10 mb-4'>Search for a Training Provider near you.</p>
          <div className='mt-1'>
            <input placeholder='e.g Therapy, locality or name'
               value={searchValue}
               onChange={(e) => { setSearchValue(e.target.value); }}
              className='my-10 border py-2 px-4 font-[600] outline-none w-[22rem] mx-2'
            />
            <button onClick={(e) => { onSearch() }} className='md:my-10 my-4 border py-2 px-4 font-[600] hover:bg-[#66bc43] hover:border-[#66bc43] hover:text-[#fff] border-1 border-[#1f3831]'>Search Practitioners</button>
          </div>
          <h3 className='text-[16px] md:py-2 py-6 md:px-[5rem] font-bold w-full'>UHPC is the ONLY Global Holistic Training Provider Certification Board specialising in high- quality Holistic & Complementary Training Providers</h3>
          <p className='py-2 md:py-2 py-6 md:px-[5rem] px-4 text-[14px] mb-2 font-[600]  text-[#1f3831]'>
            You can use our database of certified Training Providers to help you find who will be right for you, knowing full well that every provider on this list has been through a rigorous process that proves they are tried, tested, and trusted.
          </p>

          <p className='py-2 md:py-2 py-6 md:px-[5rem] px-4 mb-2 text-[14px] font-[600]  text-[#1f3831]'>
            You can feel safe in the knowledge that any Training Provider with an UHPC certification can be trusted to deliver a fantastic service, meaning you will feel more at ease and confident when picking the right course and provider for you.
          </p>
          <h3 className='text-[16px] font-bold w-full  md:px-[5rem] px-4'>WHAT TO LOOK FOR WHEN CHOOSING A TRAINING PROVIDER:</h3>
          <p className='py-2 md:py-2  md:px-[5rem] px-4 text-[14px] mb-2 font-[600]  text-[#1f3831]'>
            Consider asking the following questions to your training provider: How long have they been in the industry? Do they have a portfolio of their work? What qualifications do they hold? Are there any positive reviews available? How large are the class sizes? Does the training package come with a complete kit? Do they offer ongoing support beyond the training period? Researching these aspects will help you make an informed decision when selecting a training provider.
          </p>

          <p className='py-2 md:px-[5rem] px-4 mb-2 text-[14px] font-[600]  text-[#1f3831]'>
            Gaining sufficient training and experience is crucial for you to feel at ease while performing treatments on your clients. It involves learning the correct techniques and understanding how to handle issues that you may encounter regularly. This knowledge is essential for dealing with clients effectively and ensuring their satisfaction.
          </p>

          <h3 className='text-[16px] font-bold w-full md:px-[5rem] px-3'>Are the courses they offer fully accredited?</h3>
          <p className='py-2 md:px-[5rem] px-4 text-[14px] mb-2 font-[600]  text-[#1f3831]'>
            It is crucial to ensure that your training provider is fully accredited. We have observed many instances where recently qualified therapists have approached us with qualifications that are not fully accredited, leading to  disappointment when we cannot accept them as UHPC approved therapists.
          </p>

          <p className='py-2 md:px-[5rem] px-4 mb-2 text-[14px] font-[600]  text-[#1f3831]'>
            It is therefore recommended that you verify the accreditation status of your course before enroling to avoid such situations.  UHPC accredits both the course and the provider as a package. If a course isn't listed on our website, it means it hasn't been assessed or accredited by us. We encourage you to use our website as a reliable resource to check the accreditation status of courses and providers. This ensures that you have peace of mind knowing that the training you're considering meets our standards. Your trust in the quality of education is paramount to us, and we're committed to maintaining transparency and excellence in the courses we accredit.
          </p>

          <h3 className='text-[16px] font-bold w-full md:px-[5rem] px-3'>Training with an UHPC Training Provider:</h3>
          <p className='py-2 md:px-[5rem] px-4 text-[14px] mb-2 font-[600]  text-[#1f3831] w-full'>
            We will recognise an individual as a professional therapist, should they choose to join us, provided that they have received training from an UHPC accredited trainer.
          </p>

          <p className='py-2 md:px-[5rem] px-4 mb-2 font-[600] text-left w-full  text-[#1f3831]'> Looking for an UHPC Beauty Training Provider Click here - <Link to={"/pages/beauty"}><strong className='text-[#4091ca]'>UHPC Beauty</strong></Link></p>

          <div className='w-full flex justify-center' style={{
            padding: "32px 72px",
            flexWrap: 'wrap',
          }}>
            {
              mainContext?.allCategories == null ? <p>Please Wait...</p> : [
                ...mainContext?.allCategories.filter(v => v.type == "training provider")
              ]?.map((v, i) => {
                return <div key={i} onClick={() => { onGetAllProduct(v?.id) }} className="category bg-cover bg-center mx-2 rounded overflow-hidden shadow-xl my-2" style={{ backgroundImage: `url(${assetUrl}/${v.file_path})`, position: 'relative',backgroundRepeat:"no-repeat",backgroundSize:"100% 100%", }}>
                  <a id="holistic-spiritual" href='javascript:void(0)' className="text-white   absolute top-0 left-0 text-center w-full text-[14px] py-2 bg-[#4091ca]">
                    <span>{v.title}</span>
                  </a>
                </div>

              })

            }
          </div>

          <button onClick={() => onGetAllProduct()} className='my-10 border py-2 px-4 font-[600] hover:bg-[#4091ca] rounded hover:border-[#4091ca] hover:text-[#fff] border-1 border-[#1f3831]'>All categories</button>

          <ProductGrid allProducts={allProducts} socialIcons={socialIcons}/>
        </div>

        <div className="py-[100px] stripe stripe-bottom stripe-default-bg-image dark-colored-bg" style={{
          backgroundImage: `url(${AboutBanner})`,
          backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
        }}>
          <div className="stripe-upper-bg" style={{ background: "#1f1d1dab" }} />
          <div className="container" style={{position:"relative",zIndex:99}}>
            <div className="row">
              <div className="col-sm-12 columns">
                <div className="lead-text-large width-80pct-centered text-center text-white">
                  <p className='text-[25px] font-[600] px-[100px]'>
                    Would you like to be listed here?
                    <Link to="/pages/beauty" className=' py-2 text-[#4091ca]'> Apply Now </Link>for UHPC Membership.
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




const ProductGrid = ({ allProducts ,socialIcons}: { allProducts: any[],socialIcons:any }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20 mt-10">
      {allProducts?.map((d: any, i) => {
        const social_links = JSON.parse(d?.social_links || "[]");

        return (
          <div
            key={i}
            className="flex flex-col text-center shadow-lg hover:shadow-xl duration-300 rounded-md bg-white relative group"
          >
            {/* Header Section */}
            <div className="bg-member-premium h-10 p-4 mt-8 pb-10 rounded-t-md">
              <h3 className="text-lg font-semibold mb-0 leading-tight text-[#111]">
                {d?.name} - {d?.destination}
              </h3>
            </div>
            {/* <div className="h-1 bg-member-premium"></div> */}

            {/* Level Badge */}
            <p className="text-member-premium font-semibold border-2 border-member-premium px-4 italic absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg uppercase">
              {d?.level}
            </p>

            {/* Avatar */}
            <div className="avatar px-1 transform relative">
                    <img className="inline border-[3px] w-[8rem]  border-solid border-white rounded-full shadow-lg bg-white" src={"https://myadmin.universalhpc.com/storage/" + d?.logo} alt="" loading="lazy" />
                 
                  </div>

            {/* Details Section */}
            <div className="mt-8 px-6 text-left">
              <div className="text-brand grid grid-cols-12 items-center font-semibold text-xs gap-1">
                {/* Address */}
                <div className="text-accent2 col-span-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                    ></path>
                  </svg>
                </div>
                <div className="col-span-11">{d?.address}</div>

                {/* Phone Number */}
                <div className="text-accent2 col-span-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                    ></path>
                  </svg>
                </div>
                <div className="col-span-11">{d?.number}</div>

                {/* Email */}
                <div className="text-accent2 col-span-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                    ></path>
                  </svg>
                </div>
                <div className="col-span-11">
                  <a href={`mailto:${d?.email}`} className="text-blue-600">
                    {d?.email}
                  </a>
                </div>
              </div>

              {/* About Section */}
              <p className="text-accent2 mb-0 mt-8 uppercase font-semibold">
                ABOUT:
              </p>
              <div className=" p-2 rounded-lg  text-neutral-700" style={{ whiteSpace: "pre-line" }}>
                {/* <div dangerouslySetInnerHTML={{ __html: d?.about?.replace(/\n/g, "<br>") }} /> */}
                {/* <p>{stripHtml(d?.about)?.replace(/\n/g, "<br>")}</p> */}
                <div dangerouslySetInnerHTML={{ __html: formatText(stripHtml(d?.about))?.replace(/\n/g, "<br>")}} />
                {/* {formatText(stripHtml(d?.about))?.replace(/\n/g, "<br>")} */}
              </div>
              {/* <p className="pb-4 text-neutral-700">{d?.about}</p> */}
            </div>

            {/* Social Media Links */}
            <div className="mt-auto py-2 px-6 flex justify-center gap-3">
              {social_links?.map((s: any, k: number) => (
                <a
                  key={k}
                  className="text-neutral-700 hover:text-pink-600"
                  href={`${s?.platformLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[s?.platformName?.toLowerCase()]}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DirectoryTow