import React, { useEffect, useState } from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import { BaseApi } from '@/Context/MainContext';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        BaseApi.get('/me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,  // Use token stored in localStorage or sessionStorage
            },
        })
            .then(response => {
                if (response.status == 200) {
                    setUser(response.data['user']);
                }
            })
            .catch(error => {
                console.error('There was an error fetching user info:', error);
            });
    }, []);
    return (

        <div className='main-box mt-[8rem]'>
            <div className={`hero-section   md:mt-0 mt-[-40px] flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="md:px-[4rem] px-4 py-[5.5rem]">
                    <h3 className="text-[#1f3831] text-2xl font-bold">Profile</h3>
                    <div className='mt-2'>
                        <p>Username: {user?.name}</p>
                        <p>Email: {user?.email}</p>
                        {/* <p>Verified: {user?.status==0? <span></span>:<span></span>}</p> */}

                    </div>
                </div>
            </div>
            <div className='page-content' id='page-content'>
                <nav className="bg-white md:px-20 px-4 py-3 rounded-md shadow-sm">
                    <ol className="list-reset flex text-sm text-gray-700">
                        <li>
                            <Link to="/" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</Link>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500"> User <span className="mx-0">{" >> "}</span> Profile</li>
                    </ol>
                </nav>


                <div className='flex justify-center items-center'>
                    <div className='bg-[#fff] px-4 py-5 rounded shadow-xl w-[30rem] my-10'>
                        <h2 className='text-[20px] font-bold py-4'>Update Profile</h2>
                        <div className='my-2'>
                            <label>Username</label>
                            <input value={user?.name} placeholder='Enter Username' className='w-full h-10 bg-[whitesmoke] px-4   py-2 outline-none rounded my-2' />
                        </div>
                        <div className='my-2'>
                            <label>Email</label>
                            <input value={user?.email} disabled placeholder='Enter Email' className='w-full h-10 bg-[whitesmoke] px-4   py-2 outline-none rounded my-2' />
                        </div>
                        <div className='my-2'>
                            <label>Password</label>
                            <input value={"********"} disabled type='text' placeholder='Enter Password' className='w-full h-10 bg-[whitesmoke] px-4   py-2 outline-none rounded my-2' />
                        </div>
                        <div className='my-2'>
                            <button className='bg-[#4091ca] h-10 w-40 hover:bg-[#FFFFFF] hover:border-2 hover:border-[#4091ca] text-[#fff] text-[15px] hover:text-[#111] font-[600] my-2 rounded'>Update</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile