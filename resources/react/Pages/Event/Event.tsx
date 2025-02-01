import { useMainContext } from '@/Context/MainContext';
import BgBanner from '../../assets/images/header-gradient-bg.png';

const Event = () => {
  const mainAppContext = useMainContext();

  const convertHtmlToText = (htmlContent:any) => {
    // Create a temporary div to parse the HTML and extract the text content
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    return div.innerText || div.textContent; // Return the plain text
  };
  
  return (
    <div className='main-box mt-[7rem]  '>
      {/* <div className={`hero-section   flex items-center relative`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
        <div className="px-[4rem] py-[1rem] w-[25%] text-[#fff] z-[20]">
          <h3 className="text-[#fff] text-2xl font-bold">Upcoming holistic and spiritual events, workshops, courses, and therapies</h3>
        </div>
        <div className="trapezium-bg">
          <span></span>
        </div>
      </div> */}
      <div className={`hero-section   flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
        <div className="md:px-[4rem] px-4 py-[5rem]">
          <h3 className="text-[#111] md:text-4xl text-2xl font-bold">Upcoming holistic<br /> and spiritual events,<br /> courses, and therapies</h3>
        </div>
      </div>
      <div className='page-content' id='page-content'>
        <nav className="bg-white md:px-20 px-4 py-3 rounded-md shadow-sm">
          <ol className="list-reset flex text-sm text-gray-700">
            <li>
              <a href="#" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</a>
              <span className="mx-0">{" >> "}</span>
            </li>
            <li className="text-gray-500"> Resources <span className="mx-0">{" >> "}</span> Workshops & Events            </li>
          </ol>
        </nav>


        <div className='flex'>
          <div className='w-[100%] md:px-[4.8rem] px-4 py-4'>
            <h2 className='font-[700] text-[#1f3831]  md:text-[1.7rem] text-[1.2rem] mb-4'>Discover Transformative Holistic & Spiritual Events Near You</h2>

            <p className='text-[#1f3831] py-3'>
              Explore a curated selection of the latest holistic and spiritual events, workshops, courses, and therapies offered by UHPC-accredited training providers and practitioners in your local area. From mindfulness meditation sessions and crystal healing workshops to tarot reading classes and sound bath experiences, this page is your go-to guide for discovering transformative personal growth opportunities near you. Expand your mind, nourish your soul, and embark on a journey of self-discovery with the help of our UHPC community.
            </p>
            <p className='text-[#1f3831] py-3 text-[18px] font-[600]'>If you would like to list your event, workshop, or special offer, UHPC-accredited members may advertise for free. Simply log into the <a href='#' className='text-[#d28613]'> members' area</a></p>

            <div className='grid md:grid-cols-3 grid-cols-1  gap-4'>
              {
                mainAppContext?.allEvents?.map((v, i) => {
                  const formattedDate = new Date(v?.start_date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  });
                  const endDate = new Date(v?.end_date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  });
                  
                  
                  return <div key={i} className="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-14 mb-4 single-event group overflow-hidden">
                    <a href="#">
                      <div className="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden">
                        <img
                          src={'http://127.0.0.1:8000/storage/' + v?.featured_image}
                          alt="Reiki Level 1 &amp; 2 ATTUNEMENT"
                          width="212"
                          height="212"
                          className="img p-1 bg-white shadow-sm"
                        />
                      </div>
                      <h3 className='text-lg md:text-xl lg:text-[17px] leading-[1.42] text-[#1f3831] font-bold' >{v?.title}</h3>
                      <div className="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                        <div>{formattedDate} - {endDate}</div>
                      </div>
                      <h2 className="font-[600] text-[20px] my-2">{v?.name}</h2>
                      <p className="font-[600] px-5 text-[14px] my-4 line-clamp-3">
                         {convertHtmlToText(v?.content)}
                      </p>
                    </a>
                    <p className="absolute bottom-0 right-0 w-full my-4 " >
                      <a href="">
                        <span className="border-2 border-solid bg-white px-2 py-2 ">
                          More details
                        </span>
                      </a>
                    </p>
                  </div>

                })
              }
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

export default Event