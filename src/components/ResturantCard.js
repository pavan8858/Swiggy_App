import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "./UserContext";
const ResturantCard = (props)=>{
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime
    } = resData?.info;
      
    return (
      <div className="m-4 p-4 w-64 h-96 bg-gray-100 rounded-lg shadow-md flex flex-col justify-between">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Card Image"
          className="w-full h-36 object-cover rounded-md"
        />
        <div className="mt-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
          <h4 className="text-sm text-gray-600">{costForTwo}</h4>
          <h4 className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</h4>
          <h4 className="text-sm text-gray-500">{avgRating} ⭐</h4>
          <h3 className="text-lg font-semibold text-gray-800 truncate">User : {loggedInUser}</h3>
        </div>
      </div>
    );
    
  };
  //Highe order component 
  //input - RestaurantCard ==> ResatuarantCardPromoted 

  export const withPromotedLabel = (RestaurantCard) =>{
    return(props) =>{
      return (
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

  export default ResturantCard;