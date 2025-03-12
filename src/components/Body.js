import ResturantCard ,{withPromotedLabel}  from "./ResturantCard";

import { useEffect, useState,useContext } from "react";

import Shimer from "./Shimer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from './UserContext.js';


const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filterlistOfRestaurant, setfilterlistOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  
  const ResatuarantCardPromoted = withPromotedLabel(ResturantCard);

  // Fetch data on component mount
                  
  console.log(listOfRestaurant);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9654&lng=77.5428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setlistOfRestaurant(restaurants);
      setfilterlistOfRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setlistOfRestaurant([]); // Fallback to empty array on error
      setfilterlistOfRestaurant([]);
    }
  };

  const {setuserName} = useContext(UserContext);

  // Render the component
  return listOfRestaurant.length === 0 ? (
    <Shimer />
  ) : (
    <div className="Body_Container">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border boreder-solid border-black"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              const filtered = listOfRestaurant.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterlistOfRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4
            );
            setfilterlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        </div>
        <label>User Name:</label>
        {/* value = {loggedInUser} */}
        <input type="text" placeholder="Enter Text" className= "border border-red-500  px-4 py-2" onChange={(e) => setuserName(e.target.value)}>
          
          </input>

      <div className="flex flex-wrap">
        {filterlistOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
          {
          restaurant?.info?.promoted ? (
             <ResatuarantCardPromoted resData={restaurant}/>
          ):
          (<ResturantCard resData={restaurant} />

          )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
