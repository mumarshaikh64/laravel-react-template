import React, { useState } from 'react'
import { BiEdit, BiSearch, BiTrash } from 'react-icons/bi'
import AddMenuCategory from '../Components/Modal/addMenuCategory';
import { useMainContext } from '../../Context/MainContext';

const MenuCategory = () => {


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
            title: "Uri",
            key: "uri",
        },
        {
            title: "Category",
            key: "category",
        },
        // {
        //     title: "Action",
        //     key: "action",
        // }
    ];

    const [open, setOpen] = useState(false);


    const openModal = () => setOpen(true);

    const appContext = useMainContext();
    return (
        <div className='rounded px-4 py-4 mt-4'>
            <div className='flex px-4 items-center justify-between'>
                <div className='px-4 py-2 bg-[#fff] rounded shadow-md flex items-center'>
                    <input className='outline-none w-[16rem]' placeholder='Search Here...' />
                    <BiSearch className='text-[18px]' />
                </div>
                <button onClick={openModal} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Add New</button>
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
                        appContext?.allCategory == null ? <div>Please Wait...</div>
                            : appContext.allCategory?.length > 0 ?
                                (
                                    <tbody>
                                        {
                                            appContext.allCategory.map((d: any, index: number) => {
                                                return <tr key={index}>
                                                    <td scope="col" className="px-6 py-3">{d?.id}</td>
                                                    <td scope="col" className="px-6 py-3">{d?.title}</td>
                                                    <td scope="col" className="px-6 py-3">{d?.uri}</td>
                                                    <td scope="col" className="px-6 py-3">{d?.parent?.title ?? "N/A"}</td>
                                                    {/* <td scope="col" className="px-6 py-3 flex">
                                                        <BiEdit className='text-[16px]' />
                                                        <BiTrash className='text-[16px]' />
                                                    </td> */}
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

            <AddMenuCategory open={open} handleClose={() => setOpen(false)} />
        </div>
    )
}

export default MenuCategory