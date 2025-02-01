import React from 'react'

const ConfirmationModal = ({ open, handleClose, onDelete }) => {

    const deleteCertificate = async () => {
        onDelete();
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
                        <h2 className="text-xl font-semibold mt-[-0.6rem]">Confirmation</h2>
                        <button
                            onClick={handleClose}
                            className="absolute top-1 text-[2rem] right-2 text-gray-600 hover:text-gray-900"
                        >
                            ×
                        </button>

                        <div className='my-4'>
                            <p><strong>Are you sure? </strong>Do you want to delete this?</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleClose}
                                className="px-3 py-1 mx-2 bg-[#d0d3d4] text-white rounded-md hover:bg-[#ecf0f1]"
                            >
                                Close
                            </button>
                            <button
                                onClick={deleteCertificate}
                                className="px-3 py-1 bg-[#e74c3c] text-white rounded-md hover:bg-[#5dade2]"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ConfirmationModal