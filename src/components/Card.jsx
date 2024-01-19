import React, { useEffect, useState } from "react";
import { restaurantsList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';


function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant && restaurant?.info?.name && restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
}

function Card() {
    const [restaurants, setRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const fetchProduct = async () => {
        const res = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const data = await res.json();
        console.log("DATA", data);
        setRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    const handleSearch = (e) => {
        const input = e.target.value;
        setSearchInput(input);
        setRestaurants(filterData(input, restaurants));
    }


    return (
        <>
            <div className="px-4 md:px-36">
                <div className="flex md:flex-wrap sm: flex-wrap justify-between my-4 p-5">
                    <div className="text-3xl font-bold text-left pb-4">
                        <h1>Restaurants with online food delivery in Patna</h1>
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={searchInput}
                            onChange={handleSearch}
                            className="w-80 p-4 ps-10 text-sm rounded-lg border border-gray-700 "
                            placeholder="Search for restaurants and food"
                        />
                        {/* <button
                            className="bg-orange-500 px-4 rounded-lg text-white"
                            onClick={() => {
                                const data = filterData(searchInput, restaurants);
                                setRestaurants(data);
                            }}
                        >Search </button> */}
                    </div>
                </div>

                <div class="container my-6">
                    {restaurants.length === 0 ? (
                        <Shimmer />
                    ) : (
                        <div class="flex flex-wrap">
                            {restaurants.map((restaurant) => (
                                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2" key={restaurant?.info?.id}>
                                    <Link to={"/restaurant/" + restaurant?.info?.id}>
                                        <RestaurantCard restaurant={restaurant} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>

    )
}

export default Card;
