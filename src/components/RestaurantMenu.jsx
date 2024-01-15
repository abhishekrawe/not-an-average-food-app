import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { id } = useParams();

  const [resturentmenu, setResturentmenu] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
      id
    );
    const data = await res.json();
    console.log("DATA", data);
    setResturentmenu(data);
  };

  const renderMenu = () => {
    const menuItems =
      resturentmenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
      [];

    return menuItems
      .filter(item => item?.card?.card?.title)
      .map((item, index) => (
        <li key={index}>
          <div className="border-lg rounded-lg bg-white my-8 h-24 text-left px-5 py-3 text-gray-700 font-semibold">
            {item?.card?.card?.title}
          </div>
        </li>
      ));
  };

  // const renderCategories = () => {
  //   const categories =
  //     resturentmenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
  //     [];

  //   return categories
  //     .filter(category => category.card.card.categories)
  //     .map((category, categoryIndex) => (
  //       <li key={categoryIndex}>
  //         <div>{category?.title}</div>
  //       </li>
  //     ));
  // };

  const {
    name,
    city,
    areaName,
    cloudinaryImageId,
    costForTwoMsg
  } = resturentmenu?.data?.cards[0]?.card?.card?.info || {};

  return (
    <div className=" items-center bg-gray-50 sm:w-1/2 md:w-1/2 w-full mx-auto p-4 grid grid-cols-1 divide-y">
      <div className="text-center mt-8 p-3 flex justify-between ">
        <div className=" text-left">
          <h2 className="text-xl font-semibold "> {name} </h2>
          <h3 className="text-left py-2 font-extralight">
            {" "}
            {city} , {areaName}
          </h3>
          <h5>{costForTwoMsg}</h5>
        </div>
        <div className="">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt="Product"
            className="h-52 w-100 rounded-xl object-cover items-center ms-10"
          />
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-bold text-3xl text-left"> Menu </h1>
        <ul>
          <li>
            <h1>{renderMenu()}</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
