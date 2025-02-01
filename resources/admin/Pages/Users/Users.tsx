import React, { useState } from 'react';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { useMainContext } from '../../Context/MainContext';
import ApproveStatus from '../Components/Modal/ApproveStatus';
import ConfirmationModal from '../Components/Modal/ConfirmationModal';

const Users = () => {
  const [open, setOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [data, setData] = useState(null);

  const openModal = () => setOpen(true);
  const mainContext = useMainContext();
  const tableHeader = [
    {
      title: "ID",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "Status",
      key: "status",
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
        {/* <button onClick={openModal} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Add New</button> */}
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
            mainContext?.allUsers == null ? <div>Please Wait...</div>
              : mainContext?.allUsers?.length > 0 ?
                (
                  <tbody>
                    {
                      mainContext?.allUsers.map((d: any, index: number) => {
                        return <tr key={index}>
                          <td scope="col" className="px-6 py-3">{d?.id}</td>
                          <td scope="col" className="px-6 py-3">{d?.name}</td>
                          <td scope="col" className="px-6 py-3">
                            {d?.email}
                          </td>
                          <td scope="col" className="px-6 py-3">{d?.status ? "Active" : "Inactive"}</td>
                          <td scope="col" className="px-6 py-3 flex">
                            <BiEdit
                              onClick={() => {
                                setData(d);
                                setOpen(true);
                              }}
                              className='text-[16px]' />
                            {/* <BiTrash
                              onClick={() => {
                                setIsDeleteOpen(true);
                              }}
                              className='text-[16px]' /> */}
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
      {/* allCertificates */}
      <ApproveStatus data={data} open={open} handleClose={() => setOpen(false)} />
      <ConfirmationModal onDelete={()=>{}} open={isDeleteOpen} handleClose={() => setIsDeleteOpen(false)} />
    </div>
  )
}

export default Users