import React, { useState } from "react";
import { restaurantsList } from "../constant";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchInput.toLowerCase()));
}

function Card() {
    const [restaurants, setRestaurants] = useState(restaurantsList)
    const [searchInput, setSearchInput] = useState("");


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

                <div class="container my-6 mx-auto px-4 md:px-12">
                    <div class="flex flex-wrap -mx-1 lg:-mx-16">
                        {restaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id}  restaurant={restaurant}/>
                        ))}

                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;
