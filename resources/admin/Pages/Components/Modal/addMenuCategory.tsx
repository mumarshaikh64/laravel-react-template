import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { BaseApi, useMainContext } from '../../../Context/MainContext';

const AddMenuCategory = ({ open, handleClose }) => {
    const [title, setTitle] = useState("");
    const [uri, setUri] = useState("");
    const [categoryId, setCategoryId] = useState<any>(null);
    const appContext = useMainContext();

    const addCreateCategory = async () => {
        if (title == "") {
            toast.error("Enter The Title");
        } else {
            try {
                const res = await BaseApi.post("/directories/store", { title: title, uri: uri, children: categoryId })
                if (res.status == 200) {
                    toast.success("Add Category Success");
                    window.location.reload();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div>
            {open && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
                // onClick={handleClose} // Click on overlay to close the modal
                >
                    {/* Modal Content with down slide animation */}
                    <div
                        className={`bg-white p-6 rounded-lg w-96 relative transform transition-all duration-500 ease-in-out
                            ${open ? 'translate-y-0' : '-translate-y-full'}`} // Sliding down effect
                    // onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal
                    >
                        <h2 className="text-xl font-semibold mt-[-0.6rem]">Add Menu Category</h2>

                        {/* Button to close the modal */}
                        <button
                            onClick={handleClose}
                            className="absolute top-1 text-[2rem] right-2 text-gray-600 hover:text-gray-900"
                        >
                            ×
                        </button>
                        <div className='my-4'>
                            <input onChange={(e) => {
                                const value = e.target.value;
                                const formattedUri = value.toLowerCase().replace(/\s+/g, '-');
                                setTitle(value); // Keep the original title
                                setUri("/" + formattedUri); // Set the formatted URI with dashes
                            }} placeholder='Enter Title' className='w-full border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                            <input
                                value={uri}
                                placeholder='Enter URI' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                            <select
                                onChange={(e) => {
                                    setCategoryId(e.target.value)
                                }}
                                className='w-full  border-none text-[14px] bg-[#fff] shadow outline-none px-2 py-2 rounded'  >
                                <option value="" className='text-[12px]'>--Select Category--</option>
                                {
                                    appContext?.allCategory?.map((c, i) => {
                                        return <option key={i} value={c?.id} className='text-[12px]'>{c?.title}</option>
                                    })
                                }
                            </select>
                        </div>
                        {/* Close Button */}
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleClose}
                                className="px-3 py-1 mx-2 bg-[#d0d3d4] text-white rounded-md hover:bg-[#ecf0f1]"
                            >
                                Close
                            </button>
                            <button
                                onClick={addCreateCategory}
                                className="px-3 py-1 bg-[#4091ca] text-white rounded-md hover:bg-[#5dade2]"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AddMenuCategory