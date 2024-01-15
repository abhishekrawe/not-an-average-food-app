import React from "react";

function Shimmer() {
    return (
        <>
            <div className="flex flex-wrap">
                {Array(8).fill("").map((e) => (
                    <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3 transition-all duration-300 hover:scale-110">
                        <div class="relative bg-gray-200 p-2 h-52 w-full rounded-xl">
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Shimmer;
