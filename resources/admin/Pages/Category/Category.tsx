import React, { useState } from 'react'
import { BiEdit, BiSearch, BiTrash } from 'react-icons/bi';
import AddCategory from '../Components/Modal/addCategory';
import { BaseApi, useMainContext } from '../../Context/MainContext';
import ConfirmationModal from '../Components/Modal/ConfirmationModal';

const Category = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const MainContext = useMainContext();
  const [data, setData] = useState<any>(null)
  const [isDeleteOpen, setIsDesleteOpen] = useState(false)
  const assetUrl = window.Laravel.asset_url;


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
      title: "Image",
      key: "image",
    },
    {
      title: "Action",
      key: "action",
    }
  ];



  const deleteCategory = async () => {
    if (data) {
      try {
        const res = await BaseApi.delete(`/category/${data?.id}`);
        if (res.status == 200) {
          window.location.reload();
        }
      } catch (error) {

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
          setData(null);
          openModal();
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
            MainContext?.allCategories == null ? <div>Please Wait...</div>
              : MainContext?.allCategories?.length > 0 ?
                (
                  <tbody>
                    {
                      MainContext?.allCategories.map((d: any, index: number) => {
                        return <tr key={index}>
                          <td scope="col" className="px-6 py-3">{d?.id}</td>
                          <td scope="col" className="px-6 py-3">{d?.title}</td>
                          <td scope="col" className="px-6 py-3">{d?.uri}</td>
                          <td scope="col" className="px-6 py-3">
                            <img style={{ width: 80, height: 80, borderRadius: 10 }} src={assetUrl + '/' + d?.file_path} />
                          </td>

                          <td scope="col" className="px-6 py-3 flex">
                            <BiEdit
                              onClick={() => {
                                setData(d);
                                setOpen(true);
                              }}
                              cursor={'pointer'} className='text-[18px]' />
                            <BiTrash
                              onClick={() => {
                                setData(d);
                                setIsDesleteOpen(true);
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


      <AddCategory data={data} open={open} handleClose={() => setOpen(false)} />
      <ConfirmationModal onDelete={() => { deleteCategory(); }} open={isDeleteOpen} handleClose={() => setIsDesleteOpen(false)} />
    </div>
  )
}

export default Category