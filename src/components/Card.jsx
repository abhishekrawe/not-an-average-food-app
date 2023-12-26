import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Card() {
    return (
        <>
            <div className="px-4 md:px-36 py-6">
                <div className="justify-between flex my-6">
                    <div className="text-2xl font-bold text-left">
                        <h1>Restaurants with online food delivery in Patna</h1>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>
                        <div className="block max-w-md rounded-sm shadow">
                            <a href="#">
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tnjwc1hltzaudqyilpzq" alt="Product" class="h-60 w-full rounded-xl" />
                            </a>
                        </div>
                        <div class="px-4 py-4">
                            <p class="text-xl font-bold text-gray-700 truncate block capitalize text-left">La Pino'z Pizza</p>
                            <p class="text-lg font-bold text-gray-700 truncate block capitalize text-left"> <FontAwesomeIcon icon={faStar} className="mr-2 text-green-600" />4.1 <span> <FontAwesomeIcon icon={faClock} className="mr-2" />25-30 mins</span></p>
                            <p class="text-gray-400 text-left">Pizzas, Pastas, italians, Desert , Kankrabgah</p>
                        </div>

                    </div>

                    <div>
                        <div className="block max-w-md rounded-sm shadow">
                            <a href="#">
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tnjwc1hltzaudqyilpzq" alt="Product" class="h-60 w-full rounded-xl" />
                            </a>
                        </div>
                        <div class="px-4 py-4">
                            <p class="text-xl font-bold text-gray-700 truncate block capitalize text-left">La Pino'z Pizza</p>
                            <p class="text-lg font-bold text-gray-700 truncate block capitalize text-left"> <FontAwesomeIcon icon={faStar} className="mr-2 text-green-600" />4.1 <span> <FontAwesomeIcon icon={faClock} className="mr-2" />25-30 mins</span></p>
                            <p class="text-gray-400 text-left">Pizzas, Pastas, italians, Desert , Kankrabgah</p>
                        </div>

                    </div>

                    <div>
                        <div className="block max-w-md rounded-sm shadow">
                            <a href="#">
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tnjwc1hltzaudqyilpzq" alt="Product" class="h-60 w-full rounded-xl" />
                            </a>
                        </div>
                        <div class="px-4 py-4">
                            <p class="text-xl font-bold text-gray-700 truncate block capitalize text-left">La Pino'z Pizza</p>
                            <p class="text-lg font-bold text-gray-700 truncate block capitalize text-left"> <FontAwesomeIcon icon={faStar} className="mr-2 text-green-600" />4.1 <span> <FontAwesomeIcon icon={faClock} className="mr-2" />25-30 mins</span></p>
                            <p class="text-gray-400 text-left">Pizzas, Pastas, italians, Desert , Kankrabgah</p>
                        </div>

                    </div>

                    <div>
                        <div className="block max-w-md rounded-sm shadow">
                            <a href="#">
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tnjwc1hltzaudqyilpzq" alt="Product" class="h-60 w-full rounded-xl" />
                            </a>
                        </div>
                        <div class="px-4 py-4">
                            <p class="text-xl font-bold text-gray-700 truncate block capitalize text-left">La Pino'z Pizza</p>
                            <p class="text-lg font-bold text-gray-700 truncate block capitalize text-left"> <FontAwesomeIcon icon={faStar} className="mr-2 text-green-600" />4.1 <span> <FontAwesomeIcon icon={faClock} className="mr-2" />25-30 mins</span></p>
                            <p class="text-gray-400 text-left">Pizzas, Pastas, italians, Desert , Kankrabgah</p>
                        </div>

                    </div>

                </div>
                

            </div>
        </>

    )
}

export default Card;
