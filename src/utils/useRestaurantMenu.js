import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(MENU_API +resID );
      const json = await response.json();
      console.log(json);
      setRestaurantInfo(json.data);
    };

    if (resID) {
      fetchMenu();
    }
  }, [resID]);

  return restaurantInfo;
};

export default useRestaurantMenu;


