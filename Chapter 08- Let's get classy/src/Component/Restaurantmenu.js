import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const Restaurantmenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]); // ✅ re-fetch whenever resId changes

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("API Response:", json);
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  // ✅ Extract restaurant info safely
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.find((c) => c.card?.card?.info)?.card?.card?.info || {};

  // ✅ Extract menu items safely
  const regularCards =
    resInfo?.cards
      ?.find((c) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards =
    regularCards
      ?.find((c) => c.card?.card?.itemCards)
      ?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
