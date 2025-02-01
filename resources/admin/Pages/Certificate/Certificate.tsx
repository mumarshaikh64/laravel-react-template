import React, { useState } from 'react'
import { BiEdit, BiSearch, BiSolidFilePdf, BiTrash } from 'react-icons/bi'
import AddCertificate from '../Components/Modal/AddCertificate';
import { useMainContext } from '../../Context/MainContext';
import ConfirmationModal from '../Components/Modal/ConfirmationModal';

const Certificate = () => {
  const [open, setOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [data,setData] = useState(null);

  const openModal = () => setOpen(true);
  const mainContext = useMainContext();
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
      title: "PDF",
      key: "pdf",
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
            mainContext?.allCertificates == null ? <div>Please Wait...</div>
              : mainContext?.allCertificates?.length > 0 ?
                (
                  <tbody>
                    {
                      mainContext?.allCertificates.map((d: any, index: number) => {
                        return <tr key={index}>
                          <td scope="col" className="px-6 py-3">{d?.id}</td>
                          <td scope="col" className="px-6 py-3">{d?.name}</td>
                          <td scope="col" className="px-6 py-3">
                            <a href={`http://localhost:8000/storage/${d?.pdf}`} target='_blank'>
                              <BiSolidFilePdf size={30} color='red' cursor={'pointer'} />
                            </a>
                          </td>
                          {/* <td scope="col" className="px-6 py-3">{d?.parent?.title ?? "N/A"}</td> */}
                          <td scope="col" className="px-6 py-3 flex">
                            <BiEdit
                              onClick={()=>{
                                setData(d);
                                setOpen(true);
                              }}
                            className='text-[16px]' />
                            <BiTrash
                              onClick={() => {
                                setIsDeleteOpen(true);
                              }}
                              className='text-[16px]' />
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
      <AddCertificate data={data} open={open} handleClose={() => setOpen(false)} />
      <ConfirmationModal open={isDeleteOpen} handleClose={() => setIsDeleteOpen(false)} />
    </div>
  )
}

export default Certificate