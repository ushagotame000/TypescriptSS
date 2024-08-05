import { useEffect, useState } from "react";
import { foodItem } from "../types/Alltypes";
import { getFoodItems } from "../Api/apiClient";


const useFoodData = ()=>{
    const [FoodList, setFoodList] = useState<foodItem[]>([]);

    useEffect(()=>{
        getFoodItems().then((response) =>{
            setFoodList(response.data);
        });
    },[]);
    return {FoodList};
};
export default useFoodData;