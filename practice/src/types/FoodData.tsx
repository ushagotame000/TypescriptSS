import React from "react";
import { foodItem } from "../types/Alltypes"; 
import ReusableButton from "../component/ReusableButton"; 
import Menu from "../types/Menu"; 
import { IoCart } from "react-icons/io5";
import useCategoryFilter from "../hooks/useCategoryFilter"; 
const FoodData: React.FC = () => {
  const { filteredFoodList, setSelectedCategory} =
    useCategoryFilter(); // Destructure the return value from the custom hook

  return (
    <div className="main ring-2 p-5">
      <Menu onCategorySelect={setSelectedCategory} />{" "}
      
        <div className="food-list grid lg:grid-cols-4 gap-y-2 gap-x-2 md:grid-cols-3 sm:grid-cols-1 bg-gray-100 mt-4">
          {filteredFoodList.map((item: foodItem) => (
            <div  key={item._id} className="food-item bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0 ">
              {/* <img src={item.image} alt={item.name} /> */}
              <img  src= {item.image} alt={item.name} />
             
              <h3>{item.name}</h3>
              <p className="text-sm">{item.description}</p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p className=" mt-3 mb-0 text-lg">
                <strong>Price:</strong> Rs.{item.price}
              </p>
              <div className="flex justify-end">
               
                <ReusableButton
                  text="Add"
                  icon={IoCart}
                  onClick={() => console.log(`Added ${item.name} to the cart`)}
                />
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
  
};
export default FoodData;