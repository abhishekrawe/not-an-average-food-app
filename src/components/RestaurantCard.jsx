import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";

function RestaurantCard({ restaurant }) {

    const renderCuisines = () => {
        const cuisines = restaurant?.info?.cuisines;
        if (cuisines && cuisines.length > 0) {
            const maxCuisinesToShow = 3;

            if (cuisines.length <= maxCuisinesToShow) {
                return cuisines.join(', ');
            } else {
                const truncatedCuisines = cuisines.slice(0, maxCuisinesToShow).join(', ');
                return `${truncatedCuisines}, ...`;
            }
        }

        return null;
    };

    return (
        <div className="w-full flex flex-col transition-all duration-300 hover:scale-110">
            <div className="relative">
                <div className="block">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`} alt="Product" className="h-52 w-full rounded-xl" />
                    <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-xl"></div>
                    <h2 className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white text-xl font-extrabold text-left">{restaurant?.info?.aggregatedDiscountInfoV3?.header}  {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
                </div>
            </div>
            <p className="text-xl font-bold text-gray-700 truncate block capitalize text-left">{restaurant?.info?.name}</p>
            <p className="text-lg font-bold text-gray-700 truncate block capitalize text-left"> <FontAwesomeIcon icon={faStar} className="mr-2 text-green-600" />{restaurant?.info?.avgRating} <span> <FontAwesomeIcon icon={faClock} className="mr-2" />{restaurant?.info?.sla?.slaString}</span></p>
            <p className="text-gray-400 text-left">{renderCuisines()}</p>
            <p className="text-gray-400 text-left">{restaurant?.info?.areaName}</p>

        </div>
    )
}

export default RestaurantCard;
