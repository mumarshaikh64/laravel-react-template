import React, { useState } from 'react'
import { BiEdit, BiSearch, BiSolidFilePdf, BiTrash } from 'react-icons/bi';
import { BaseApi, useMainContext } from '../../Context/MainContext';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import ConfirmationModal from '../Components/Modal/ConfirmationModal';

const Standards = () => {
    const MainContext = useMainContext();


    const tableHeader = [
        {
            title: "ID",
            key: "id",
        },
        {
            title: "Title",
            key: "title",
        },
        {
            title: "Short Description",
            key: "category",
        },
        {
            title: "PDF",
            key: "pdf",
        },
        {
            title: "Action",
            key: "action",
        }
    ];


    const [isDelete, setIdDelete] = useState(false);
    const [data, setData] = useState<any>();
    const onDelete = async () => {
        try {
            const response = await BaseApi.delete(`pdf/${data?.id}`);
            if (response.status == 200) {
                toast.success("Delete Standards Success");
                window.location.reload();
            }
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.response?.status == 404) {
                    toast.error("Standards Not Found");
                } else {
                    toast.error(`${error.response?.data['message'] ?? error.message}`)
                }
            }
        }
    }

    return (
        <div className='rounded px-4 py-4 mt-4'>
            <div className='flex px-4 items-center justify-between'>
                <div className='px-4 py-2 bg-[#fff] rounded shadow-md flex items-center'>
                    <input className='outline-none w-[16rem]' placeholder='Search Here...' />
                    <BiSearch className='text-[18px]' />
                </div>
                <button onClick={() => {
                    window.location.href = ("/page/addStandards/0");
                }} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Add New</button>
            </div>


            <div className='bg-[#fff] px-4 py-4 mx-4 mt-5 rounded shadow-md'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className="text-xs text-gray-700 bg-gray-50 rounded uppercase ">
                        <tr>
                            {
                                tableHeader?.map((header: any, key: number) => {
                                    return (
                                        <th
                                            scope="col" className="px-6 py-3"
                                            key={key}>{header.title}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    {
                        MainContext?.allPdf == null ? <div>Please Wait...</div>
                            : MainContext?.allPdf?.length > 0 ?
                                (
                                    <tbody>
                                        {
                                            MainContext?.allPdf?.map((d: any, index: number) => {
                                                return <tr key={index}>
                                                    <td scope="col" className="px-6 py-3">{d?.id}</td>
                                                    <td scope="col" className="px-6 py-3">{d?.name}</td>
                                                    <td scope="col" className="px-6 py-3">
                                                        <p className='w-[15rem]  overflow-hidden text-ellipsis whitespace-nowrap'>{d?.short_description}</p>
                                                    </td>
                                                    <td scope="col" className="px-6 py-3">
                                                        <a href='#'><BiSolidFilePdf className='text-3xl text-[red] '></BiSolidFilePdf> </a>
                                                    </td>

                                                    <td scope="col" className="px-6 py-3 flex">
                                                        <BiEdit
                                                            onClick={() => {
                                                                window.location.href = (`/page/addStandards/${d?.id}`);
                                                            }}
                                                            cursor={'pointer'} className='text-[18px]' />
                                                        <BiTrash
                                                            onClick={() => {
                                                                setData(d);
                                                                setIdDelete(true);
                                                            }}
                                                            style={{ marginInline: 5 }} cursor={'pointer'} className='text-[18px]' />
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                )

                                : <tbody>
                                    <tr>
                                        <td colSpan={5}><p className='py-4 text-[14px] font-bold text-center'>Data Not Found</p></td>
                                    </tr>
                                </tbody>
                    }
                </table>
            </div>


            <ConfirmationModal onDelete={onDelete} open={isDelete} handleClose={() => { setIdDelete(false) }} />
        </div>
    )
}

export default Standards