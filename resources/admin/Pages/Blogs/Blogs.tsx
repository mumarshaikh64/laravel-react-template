import React from 'react'
import { BiEdit, BiSearch, BiTrash } from 'react-icons/bi';
import { useMainContext } from '../../Context/MainContext';

const Blogs = () => {
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
            title: "Image",
            key: "image",
        },
        {
            title: "Action",
            key: "action",
        }
    ];
    return (
        <div className='rounded px-4 py-4 mt-4'>
            <div className='flex px-4 items-center justify-between'>
                <div className='px-4 py-2 bg-[#fff] rounded shadow-md flex items-center'>
                    <input className='outline-none w-[16rem]' placeholder='Search Here...' />
                    <BiSearch className='text-[18px]' />
                </div>
                <button onClick={() => {
                    window.location.href = ("/admin/page/addBogs");
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
                        MainContext?.allBlogs == null ? <div>Please Wait...</div>
                            : MainContext?.allBlogs?.length > 0 ?
                                (
                                    <tbody>
                                        {
                                            MainContext?.allBlogs?.map((d: any, index: number) => {
                                                return <tr key={index}>
                                                    <td scope="col" className="px-6 py-3">{d?.id}</td>
                                                    <td scope="col" className="px-6 py-3">{d?.name}</td>
                                                    <td scope="col" className="px-6 py-3">
                                                        <p  className='w-[15rem]  overflow-hidden text-ellipsis whitespace-nowrap'>{d?.short_description}</p>
                                                    </td>
                                                    <td scope="col" className="px-6 py-3">
                                                        <img style={{ width: 100, height: 80, borderRadius: 10 }} src={"https://universalhpc.com/storage/" + d?.image_path} />
                                                    </td>

                                                    <td scope="col" className="px-6 py-3 flex">
                                                        <BiEdit
                                                            onClick={() => {
                                                                // window.location.href = (`/pages/editor/${d?.id}`);
                                                            }}
                                                            cursor={'pointer'} className='text-[18px]' />
                                                        <BiTrash
                                                            onClick={() => {
                                                                // setData(d);
                                                                // setIsDeleteOpen(true);
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

        </div>
    )
}

export default Blogs