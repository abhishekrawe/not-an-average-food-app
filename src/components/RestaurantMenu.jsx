import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function RestaurantMenu() {
  const { id } = useParams();

  const [resturentmenu, setResturentmenu] = useState({});

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
     dispatch(addItem(item));
  }

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
      .map((item, index) => {
        return (
          <li key={index}>
            <div className="justify-between flex border-lg rounded-lg bg-white my-8 h-24 text-left p-4 py-2">
              <div className="flex flex-col">
                <p className="text-yellow-500">⭐ Bestseller</p>
                <p className="font-semibold text-xl"> {item?.card?.card?.title} </p> {""}
                <p className="font-normal"> Rs. {item?.card?.card?.itemCards?.[0]?.card?.info?.price / 100 }</p>
              </div>
              <div className="relative overflow-hidden flex flex-col">
                <img className="h-20 w-20 object-cover rounded-md"  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.card?.itemCards?.[0]?.card?.info?.imageId}`} />
                <button onClick={() => handleAddItem(item)} className="absolute bg-green-400 rounded-md border shadow-2xl bottom-0 left-0 right-0 mx-2 text-white font-bold px-4 border-b-4 border-green-700 hover:border-green-500 focus:ring focus:ring-green-700 ">Add</button>
              </div>
              
            </div>
          </li>
        );
      });
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
    costForTwoMsg,
    totalRatingsString,
    totalRatings,
    avgRating,
    costForTwoMessage,
    sla: { deliveryTime } = {},
    nudgeBanners = [],

  } = resturentmenu?.data?.cards[0]?.card?.card?.info || {};

  return (
    <div className="py-20 items-center bg-gray-50 sm:w-1/2 md:w-1/2 w-full mx-auto p-4 grid grid-cols-1 divide-y">
      <div className="text-center mt-8 p-3 flex justify-between ">
        <div className=" text-left mt-5">
          <h2 className="text-xl font-semibold "> {name} </h2>
          <h3 className="text-left py-2 font-extralight">
            {" "}
            {city} , {areaName}
          </h3>

          <div className="mt-6 rounded shadow-inner h-16 p-2 border border-gray-200 text-center">
            <p className="text-green-400"> ⭐ {avgRating}</p>
            <hr />
            <p className="text-gray-600 font-base text-sm">{totalRatingsString}</p>
          </div>
        </div>

        <div className="">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt="Product"
            className="h-52 w-100 rounded-xl object-cover items-center ms-10"
          />
        </div>
      </div>
      <div className="text-left flex gap-5 py-5 px-4">
        {/* <p className="text-2xl">{totalRatings}</p> */}
        <p className="text-xl font-bold text-gray-700"> {deliveryTime} MINS </p>
        <p className="text-xl font-bold text-gray-700"> {costForTwoMessage}</p>
      </div>
      <div className="flex flex-wrap">
        {nudgeBanners.map((coupon, index) => {
          //console.log('Coupon:', coupon);
          return (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2 p-4">
              <div className="text-black rounded shadow-inner border border-gray-200 text-left bg-red-50 h-full">
                <div className="flex flex-col gap-2 px-6">
                  <div className="flex gap-5 font-bold text-3xl pt-2">
                    <p className="text-yellow-500">{coupon.discountInfo ? coupon.discountInfo.discountType : 'N/A'}</p>
                    <p>₹{coupon.minValue}</p>
                  </div>
                  <div className="text-yellow-950 text-sm font-md flex-wrap pb-3">
                    <p className="py-2 font-mono">{coupon.unlockedMessage}</p>
                    <span className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300">{coupon.couponCode}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
