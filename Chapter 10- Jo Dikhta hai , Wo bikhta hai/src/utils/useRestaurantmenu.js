import { useEffect , useState} from "react";
import { MENU_API } from "./constants";

const useRestaurantmenu = (resId) => {
  // fetch data
    const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // ✅ re-fetch whenever resId changes // resId

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log("API Response:", json);
    setResInfo(json.data); // json.data
  };

  return resInfo;
};

export default useRestaurantmenu;
