import { useDispatch } from "react-redux";
 import {addItem} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  
  const dispatch = useDispatch();
  
  const handleAddItem = (item) =>{
    // Dispatch an action 
    dispatch(addItem(item));
  }
  //console.log(handleAddItem)
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between p-4 mb-4 border-b border-gray-200"
        >
          {/* Item Details */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              {item.card.info.name}
            </h2>
            <p className="text-sm text-gray-500">
              &#8377; {item.card.info.price / 100}
            </p>
            <p className="text-sm text-gray-600 mt-1">{item.card.info.description}</p>
          </div>

          {/* Image and Button */}
          <div className="flex flex-col items-center">
            <div className="absolute">
            <button
              className=" px-1 py-2 text-sm  text-white bg-green-500 rounded hover:bg-green-600"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-20 h-20 rounded-lg object-cover"
              onError={(e) => {
                e.target.src = "path_to_placeholder_image.jpg"; // Fallback for missing image
              }}
            />

          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
