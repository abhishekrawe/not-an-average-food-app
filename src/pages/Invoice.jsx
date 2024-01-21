import React from "react";

function Invoice({ title, price }) {
  return (
    <div className="p-5 bg-gray-100 w-full h-100 rounded-xl text-left">
          <h1 className="text-center text-3xl font-bold"> Invoice </h1>
          <h1> {title} </h1>
          <h1> Prices : </h1>
          <div className="py-16">
            Total Price  : 

            
          </div>

          <button className="bg-green-400 p-2 rounded-sm text-white mb-16 "> Proceed to Payment </button>
    </div>
   
  )
}

export default Invoice;
