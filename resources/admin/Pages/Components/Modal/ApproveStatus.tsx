import React, { useEffect, useRef, useState } from 'react'
import { BaseApi } from '../../../Context/MainContext';
import { toast } from 'react-toastify';

const ApproveStatus = ({ open, handleClose, data }) => {
 
    const [name, setName] = useState('');
    const [status,setStatus] = useState("0");   


    useEffect(() => {
        if (data != null) {
            setName(data?.name);
        }else{
            setName(data);
        }
    }, [data])

   



    const addCertificate = async () => {
        try {
           const formData ={
            user_id:data?.id,
            status:status
           }
            const res = await BaseApi.post("/pages/user/approve", formData)
            if (res.status == 200) {
                toast.success("Approve User Success");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {open && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div
                        className={`bg-white p-6 rounded-lg w-[29rem] relative transform transition-all duration-500 ease-in-out
                            ${open ? 'translate-y-0' : '-translate-y-full'}`}
                    >
                        <h2 className="text-xl font-semibold mt-[-0.6rem]">User Approve</h2>
                        <button
                            onClick={handleClose}
                            className="absolute top-1 text-[2rem] right-2 text-gray-600 hover:text-gray-900"
                        >
                            ×
                        </button>

                        <div className='my-4'>
                            <input
                                placeholder='Enter Certificate Name'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className='w-full border-none bg-[#fff] shadow outline-none px-3 py-2 rounded'
                            />
                            <select
                                onChange={(e) => {
                                    setStatus(e.target.value)
                                }}
                                className='w-full mt-5  border-none text-[14px] bg-[#fff] shadow outline-none px-2 py-3 rounded'  >
                                <option value="" className='text-[12px]'>--Select Status--</option>
                                <option value="1" className='text-[12px]'>Active</option>
                                <option value="0" className='text-[12px]'>Inactive</option>
                            </select>

                            
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleClose}
                                className="px-3 py-1 mx-2 bg-[#d0d3d4] text-white rounded-md hover:bg-[#ecf0f1]"
                            >
                                Close
                            </button>
                            <button
                                onClick={addCertificate}
                                className="px-3 py-1 bg-[#4091ca] text-white rounded-md hover:bg-[#5dade2]"
                            >
                               {data!=null? "Update":"Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ApproveStatus

