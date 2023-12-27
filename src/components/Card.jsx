import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { restaurantsList } from "../constant";

function Card() {
    return (
        <>
            <div className="px-4 md:px-36">
                <div className="justify-between flex my-4">
                    <div className="text-3xl font-bold text-left">
                        <h1>Restaurants with online food delivery in Patna</h1>
                    </div>
                    <div className="flex gap-4">
                        <input type="Search for resturents and food" className="w-full p-4 ps-10 text-sm rounded-lg border border-gray-700 " />
                        <button className="bg-orange-500 px-4 rounded-lg text-white">Search </button>
                    </div>
                </div>

                <div class="container my-6 mx-auto px-4 md:px-12">
                    <div class="flex flex-wrap -mx-1 lg:-mx-16">
                        {restaurantsList.map((restaurant) => (
                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                                <a href="#">
                                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`} alt="Product" class="h-52 w-full rounded-xl" />
                                </a>
                                <p class="text-xl font-bold text-gray-700 truncate block capitalize text-left">{restaurant.name}</p>
                                <p class="text-lg font-bold text-gray-700 truncate block capitalize text-left"> <FontAwesomeIcon icon={faStar} className="mr-2 text-green-600" />{restaurant.avgRating} <span> <FontAwesomeIcon icon={faClock} className="mr-2" />{restaurant.sla.slaString}</span></p>
                                <p class="text-gray-400 text-left">{restaurant.cuisines.join(', ')}</p>
                                <p class="text-gray-400 text-left">{restaurant.areaName}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;
