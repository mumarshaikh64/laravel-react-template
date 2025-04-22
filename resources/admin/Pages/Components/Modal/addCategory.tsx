import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { BaseApi, useMainContext } from '../../../Context/MainContext';

const AddCategory = ({ open, handleClose, data }) => {
    const [title, setTitle] = useState("");
    const [uri, setUri] = useState("");
    const [type,setType] = useState('');
    const appContext = useMainContext();
    const [file, setFile] = useState<File | null>(null);

    const assetUrl = window.Laravel.asset_url;


    useEffect(() => {
        if (data) {
            setTitle(data?.title);
            setType(data?.type);
            setUri(data?.uri);
        } else {
            setTitle('');
            setType('');
            setUri('');
        }
    }, [data])

    const addCreateCategory = async () => {
        if (title == "") {
            toast.error("Fill The Form");
        } else {
            try {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("uri", uri);
                formData.append("file", file!);
                formData.append("type",type);
                let res;
                if (data) {
                    res = await BaseApi.post(`/category/update/${data?.id}`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                } else {
                    res = await BaseApi.post("/category/store", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                }
                if (res?.status == 200) {
                    toast.success("Add Category Success");
                    window.location.reload();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }


    useEffect(() => {
        if (data) {
            async function urlToFile(url, filename, mimeType) {
                const response = await fetch(url);
                const blob = await response.blob();
                return new File([blob], filename, { type: mimeType });
            }

            // Example Usage
            const assetUrl = window.Laravel.asset_url + "/" + data?.file_path; // URL of the asset
            urlToFile(assetUrl, "example.jpg", "image/jpeg").then(file => {
                setFile(file)
            });
        } else {
            setFile(null);
        }
    }, [data])


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
                        <h2 className="text-xl font-semibold mt-[-0.6rem]">Add  Category</h2>

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
                            }} placeholder='Enter Title'
                                value={title}
                                className='w-full border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                            <input
                                value={uri}
                                placeholder='Enter URI' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />


                            <select value={type} onChange={(e)=>{setType(e.target.value)}} className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' >
                                <label htmlFor="Category Type">Category Type</label>
                                <option value={""}>Select type</option>
                                <option value={"training provider"}>Training Provider</option>
                                <option value={"practitioners"}>Practitioners</option>

                            </select>

                            <div className="flex items-center justify-center w-full">
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-40 mb-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer "
                                >{file != null ?
                                    <img style={{ width: "100%", height: "100%" }} src={window.URL.createObjectURL(file!)} />
                                    :
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and
                                            drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                        </p>
                                    </div>}
                                    <input onChange={(e) => {
                                        if (e.target.files?.length! > 0) {
                                            setFile(e.target?.files![0]);
                                        }
                                    }} id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>

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

export default AddCategory