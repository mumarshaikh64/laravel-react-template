import React from 'react'
import { BiCertification, BiCopyAlt, BiUser } from 'react-icons/bi'
import { useMainContext } from '../../Context/MainContext'

const Dashboard = () => {
    const mainContext = useMainContext();
    return (
        <div className='px-10 py-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 '>
                <div className='px-4 py-4 shadow-xl bg-[#fff] rounded-xl'>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center w-full'>
                            <BiUser size={30} />
                            <span className='ml-2 font-[700] text-[16px]'>Total Users</span></div>
                        <div className='font-[800] text-[30px]'>{mainContext?.allUsers?.length! < 10 ? "0" + mainContext?.allUsers?.length : mainContext?.allUsers?.length}</div>

                    </div>
                </div>
                <div className='px-4 py-4 shadow-xl bg-[#fff] rounded-xl'>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center  w-full'>
                            <BiCertification size={30} />
                            <span className='ml-2 font-[700] text-[16px]'>Total Certificates</span>
                        </div>
                        <div className='font-[800] text-[30px]'>{mainContext?.allCertificates?.length! < 10 ? "0" + mainContext?.allCertificates?.length : mainContext?.allCertificates?.length}</div>
                    </div>
                </div>
                <div className='px-4 py-4 shadow-xl bg-[#fff] rounded-xl'>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center  w-full'>
                            <BiCopyAlt size={30} />
                            <span className='ml-2 font-[700] text-[16px]'>Total Pages</span>
                        </div>
                        <div className='font-[800] text-[30px]'>{mainContext?.allPages?.length! < 10 ? "0" + mainContext?.allPages?.length : mainContext?.allPages?.length}</div>
                    </div>
                </div>
                <div className='px-4 py-4 shadow-xl bg-[#fff] rounded-xl'>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center w-full'>
                            <BiCopyAlt size={30} />
                            <span className='ml-2 font-[700] text-[16px]'>Total Menus</span>
                        </div>
                        <div className='font-[800] text-[25px]'>{mainContext?.allCategory?.length! < 10 ? "0" + mainContext?.allCategory?.length : mainContext?.allCategory?.length}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard