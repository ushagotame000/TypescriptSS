import React from "react";
import { foodItem } from "./Alltypes";
import ReusableButton from "../component/ReusableButton";
import Menu from "../types/Menu";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import useCategoryFilter, { sampleVar } from "../hooks/useCategoryFilter";

const FoodData: React.FC = () => {
  const { filteredFoodList, setSelectedCategory } = useCategoryFilter();

  return (
    // display item
    <div className="main">
      <Menu onCategorySelect={setSelectedCategory} />

      <div className="food-list grid lg:grid-cols-4 gap-y-2 gap-x-2 md:grid-cols-3 sm:grid-cols-1 ">
        {/* {food_list.map((item: foodItem) => ( */}
        {filteredFoodList.map((item: foodItem) => (
          <div key={item._id} className="food-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
            <div className="items-end">
              <ReusableButton
                text="Coffee"
                icon={IoIosAdd}
                onClick={() => console.log("Added")}
              />{" "}
              <ReusableButton
                text="Coffee"
                icon={RiSubtractLine}
                onClick={() => console.log("Deleted")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodData;
