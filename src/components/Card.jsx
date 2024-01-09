import React, { useEffect, useState } from "react";
import { restaurantsList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";


function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchInput.toLowerCase()));
}

function Card() {
    const [restaurants, setRestaurants] = useState(restaurantsList)
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetchProduct();
    }, [])
    
    const fetchProduct = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await res.json();
        console.log("DATA" , data);
        console.log("Actual" , data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return (
        <>
            <div className="px-4 md:px-36">
                <div className="justify-between flex my-4">
                    <div className="text-3xl font-bold text-left">
                        <h1>Restaurants with online food delivery in Patna</h1>
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="w-full p-4 ps-10 text-sm rounded-lg border border-gray-700 "
                            placeholder="Search for restaurants and food"
                        />
                        <button
                            className="bg-orange-500 px-4 rounded-lg text-white"
                            onClick={() => {
                                const data = filterData(searchInput, restaurants);
                                setRestaurants(data);
                            }}
                        >Search </button>
                    </div>
                </div>

                <div class="container my-6">
                    <div class="flex flex-wrap">
                        {restaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;
