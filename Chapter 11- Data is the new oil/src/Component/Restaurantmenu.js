import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantmenu(resId);

  if (!resInfo) return <Shimmer />;

  // ✅ Extract restaurant info safely
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.find((c) => c.card?.card?.info)?.card?.card?.info || {};

  // ✅ Extract menu items safely
  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const itemCards =
    regularCards?.find((c) => c.card?.card?.itemCards)?.card?.card?.itemCards ||
    [];

  console.log("Item Cards:", itemCards);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-xl">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordians */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title} // ✅ unique key
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurantmenu;
