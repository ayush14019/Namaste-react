import React from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super Powerful variable

  const [listofRestarunts, setListofRestarunts] = useState(resList);

  // Normal JS variable
  //   let listofRestarunts = [
  //     {
  //       info: {
  //         id: "396440",
  //         name: "Pizza Hut",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/56498403-03a7-4b10-8950-d2bc0e054d89_396440.JPG",
  //         locality: "Amrapali Platinum Shopping Arcade",
  //         areaName: "Sector 72",
  //         costForTwo: "₹300 for two",
  //         cuisines: ["Pizzas"],
  //         avgRating: 4,
  //         parentId: "721",
  //         avgRatingString: "4.0",
  //         totalRatingsString: "3.0K+",
  //         sla: {
  //           deliveryTime: 26,
  //           lastMileTravel: 1.1,
  //           serviceability: "SERVICEABLE",
  //           slaString: "25-30 mins",
  //           lastMileTravelString: "1.1 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //       },
  //     },

  //     {
  //       info: {
  //         id: "94383",
  //         name: "KFC",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/7b554185-d022-4706-abdf-360f7010d02b_94383.JPG",
  //         locality: "Sector 72",
  //         areaName: "Sector 72",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 4.2,
  //         parentId: "547",
  //         avgRatingString: "4.2",
  //         totalRatingsString: "15K+",
  //         sla: {
  //           deliveryTime: 24,
  //           lastMileTravel: 3,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "3.0 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //       },
  //     },

  //     {
  //       info: {
  //         id: "38937",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/10654763-70bb-4f44-b5cc-22ae7d8cee4e_38937.JPG",
  //         locality: "Rg Residency",
  //         areaName: "Sector 72",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //         avgRating: 4.4,
  //         parentId: "2456",
  //         avgRatingString: "4.4",
  //         totalRatingsString: "9.0K+",
  //         sla: {
  //           deliveryTime: 25,
  //           lastMileTravel: 0.5,
  //           serviceability: "SERVICEABLE",
  //           slaString: "20-25 mins",
  //           lastMileTravelString: "0.5 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //       },
  //     },
  //   ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestarunts.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListofRestarunts(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestarunts.map((restaurunt) => (
          <RestaurantCard key={restaurunt.info.id} resData={restaurunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
