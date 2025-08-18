import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variables - Super Powerful variables
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listofRestarunts, setListofRestarunts] = useState([]);

  // State variable for search text
  const [searchText, setSearchText] = useState("");

  // whenever state variable update , react triggers a reconciliation cycle (re-renders the component)
  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6460176&lng=77.3695166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    //optional Chaining
    //Collect all restaurants from multiple cards
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    // Save both full list and filtered list initially
    setAllRestaurants(restaurants);
    setListofRestarunts(restaurants);
  };

  // Conditional Rendering
  // if (listofRestarunts.length === 0) {
  //   return <Shimmer />;
  // }

  // Normal JS variable (mock data example)
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

  // shorthand of ternary operator
  return listofRestarunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the cards and update the UI
              // search text
              console.log(searchText);

              const filteredRestarunt = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setListofRestarunts(filteredRestarunt);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // Filter top rated restaurants
            const filteredList = allRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListofRestarunts(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listofRestarunts.map((restaurunt) => (
          <Link
            key={restaurunt.info.id}
            to={"/restaurants/" + restaurunt.info.id}
          >
            <RestaurantCard resData={restaurunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
