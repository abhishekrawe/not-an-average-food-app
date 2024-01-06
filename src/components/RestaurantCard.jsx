import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";

function RestaurantCard({restaurant}) {
  return (
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <div class="relative">
              <a href="#" class="block">
                  <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`} alt="Product" class="h-52 w-full rounded-xl" />
                  <div class="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-xl"></div>
                  <h2 class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white text-xl font-extrabold text-left">{restaurant.aggregatedDiscountInfoV3.header}  {restaurant.aggregatedDiscountInfoV3.subHeader}</h2>
              </a>
          </div>
          <p class="text-xl font-bold text-gray-700 truncate block capitalize text-left">{restaurant.name}</p>
          <p class="text-lg font-bold text-gray-700 truncate block capitalize text-left"> <FontAwesomeIcon icon={faStar} className="mr-2 text-green-600" />{restaurant.avgRating} <span> <FontAwesomeIcon icon={faClock} className="mr-2" />{restaurant.sla.slaString}</span></p>
          <p class="text-gray-400 text-left">{restaurant.cuisines.join(', ')}</p>
          <p class="text-gray-400 text-left">{restaurant.areaName}</p>
      </div>
  )
}

export default RestaurantCard;
