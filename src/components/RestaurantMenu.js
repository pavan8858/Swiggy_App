import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import Shimer from "./Shimer";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId);

    const [isopen, setIsOpen] = useState();
    console.log(isopen)
    const restaurCard = restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

    const catagories = restaurantInfo?.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(catagories);


    const {
        name = "Unknown Name",
        cuisines = [],
        costForTwoMessage = "Cost not available",
        avgRating = "No rating",
    } = restaurantInfo?.cards?.[2]?.card?.card?.info || {};

    if (restaurantInfo == null) {
        return <Shimer />
    }

    return (
        <div className="text-center">
            <h1 className="font-bold my-15 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}- - {costForTwoMessage}</h3>



            {
                catagories?.map((catagory, index) => (
                    <h3 key={catagory?.card?.card?.title}>
                        <RestaurantCategory
                            // controlled component 
                            data={catagory?.card?.card}

                            isOpen={index === isopen ? true : false}
                            setIsOpen={(args) => setIsOpen(args)}
                            index={index}
                            
                        /></h3>



                ))}





        </div>
    )

};

export default RestaurantMenu;

