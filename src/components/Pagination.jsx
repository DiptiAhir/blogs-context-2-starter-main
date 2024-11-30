import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className="py-1 w-full  flex justify-center items-center border fixed bottom-0 bg-white">
      <div className="flex justify-between w-11/12 max-w-[680px]">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="border rounded-md py-1 px-4"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="border rounded-md py-1 px-4"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-[15px] py-1">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
