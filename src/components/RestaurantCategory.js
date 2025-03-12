import { useState } from "react";
import ItemList from "./ItemList";
import React, { useState } from "react";

const RestaurantCategory = ({ data , isOpen , setIsOpen,index}) => {
  console.log(index,"from cat")

  const toggleAccordion = () => {
    console.log(isOpen, index); // Logs the current state and index
    setIsOpen(isOpen ? null : index); // Toggles the state
  };

  return (
    <div className="mx-auto my-6 w-6/12 bg-gray-100 p-4 shadow-lg rounded-lg" onClick={toggleAccordion}>
      {/* Accordion Header */}
      
      <div className="flex justify-between items-center cursor-pointer" >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ⬇️
        </span>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="mt-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
