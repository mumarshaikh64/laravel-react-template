import React, { useEffect, useRef, useState } from 'react'
import { BaseApi } from '../../../Context/MainContext';
import { toast } from 'react-toastify';

const AddCertificate = ({ open, handleClose, data }) => {

    const [name, setName] = useState('');
    const [selectUserId, setSelectUserId] = useState('');
    const [pdf, setPdf] = useState<File | null>(null);
    const fileInputRef = useRef<any>(null);


    useEffect(() => {
        if (data != null) {
            setName(data?.name);
            createFile(data?.pdf);
        }
    }, [data])

    async function createFile(pdf: string) {
        let response = await fetch(`http://localhost:8000/storage/${pdf}`);
        let data = await response.blob();
        let metadata = {
            type: 'application/pdf'
        };
        let file = new File([data], "test.pdf", metadata);
        // console.log(file);
        setPdf(file);
        if (fileInputRef.current) {
            fileInputRef.current!.value = file?.name; // Clear the file input value
        }
    }



    const addCertificate = async () => {
        try {

            if (!name || !pdf) {
                toast.error('All fields are required');
                return;
            }

            if (pdf && pdf.type !== 'application/pdf') {
                toast.error('Only PDF files are allowed');
                return;
            }

            if (pdf && pdf.size > 10 * 1024 * 1024) { // 10MB limit
                toast.error('File size exceeds the 10MB limit');
                return;
            }


            const formData = new FormData();
            formData.append("name", name);
            formData.append("user_id", selectUserId);
            formData.append("pdf", pdf!);
            const res = await BaseApi.post("/certificate/store", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            if (res.status == 200) {
                toast.success("Add Certificate Success");
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
                        <h2 className="text-xl font-semibold mt-[-0.6rem]">{data == null ? "Add" : "Edit"} Certificate</h2>
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
                                    setSelectUserId(e.target.value)
                                }}
                                className='w-full mt-5  border-none text-[14px] bg-[#fff] shadow outline-none px-2 py-3 rounded'  >
                                <option value="" className='text-[12px]'>--Select User--</option>
                                {
                                    // appContext?.allCategory?.map((c, i) => {
                                    //     return <option key={i} value={c?.id} className='text-[12px]'>{c?.title}</option>
                                    // })
                                }
                            </select>

                            <input
                                onChange={(e) => {
                                    if (e.target.files?.length! > 0) {
                                        setPdf(e.target.files![0])
                                    }
                                }}
                                ref={fileInputRef}
                                placeholder='Select PDF' type='file' className='w-full border-none bg-[#fff] shadow outline-none mt-5 px-2 py-2 rounded'
                            />
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

export default AddCertificate

