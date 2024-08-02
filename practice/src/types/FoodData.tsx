import React from 'react'
import { foodItem } from './Alltypes'
import { food_list } from '../assets/assets'
import ReusableButton from '../component/ReusableButton'


const FoodData:React.FC = () => {
  return (

    // display item
   <div className="main">
<div className="buttons">
{/* btn */}

</div>
     <div className="food-list grid lg:grid-cols-4 gap-y-2 gap-x-2 md:grid-cols-3 sm:grid-cols-1 ">
    {food_list.map((item: foodItem) => (
        <div key={item._id} className="food-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> ${item.price}</p>
        </div>
    ))}
</div>
   </div>
  )
}

export default FoodData;