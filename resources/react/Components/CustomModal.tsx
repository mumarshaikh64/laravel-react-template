import { useEffect } from "react";

const CustomModal = ({ isOpen, onClose, title, children,onSubmit }:any) => {
  useEffect(() => {
    const handleKeyDown = (event:any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button style={{background:"#fff",color:"#111",border:"none"}} onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl">
            &times;
          </button>
        </div>
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button type="submit" onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
