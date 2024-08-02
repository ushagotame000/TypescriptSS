import React from 'react'
import {ReusableButtonProps} from '../types/Alltypes'

const ReusableButton:React.FC<ReusableButtonProps> = ({label, category,setSelectedCategory}) => {
  return (
<button onClick={() => setSelectedCategory(category)}>
    {label}
</button>
)
}

export default ReusableButton