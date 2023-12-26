import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight, faSearch } from "@fortawesome/free-solid-svg-icons";


function Offers() {
  return (
    <>
      <div className="px-4 md:px-36 py-4">
        <div className="justify-between flex my-4">
          <div className="text-2xl font-bold text-left">
            <h1>Best offers for You</h1>
          </div>
          <div className="flex gap-2">
            <button type="button" class="text-white bg-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-400 dark:hover:bg-gray-300 dark:focus:ring-gray-200">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
            <button type="button" class="text-white bg-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-400 dark:hover:bg-gray-300 dark:focus:ring-gray-200">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" class="block max-w-lg rounded-lg shadow">
            <img src="./add2.avif" alt="add1" />
          </a>
          <a href="#" class="block max-w-lg rounded-lg shadow">
            <img src="./addd1.avif" alt="add1" />
          </a>
          <a href="#" class="block max-w-lg rounded-lg shadow">
            <img src="./add4.avif" alt="add1" />
          </a>
        </div>

      </div>
    </>
  )
}

export default Offers;
