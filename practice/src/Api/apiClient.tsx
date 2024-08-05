import axios from "axios";
import { promises } from "dns";
import {ApiResponse} from '../types/Alltypes'
import { foodItem } from "../types/Alltypes";

const apiClient= axios.create({ 
baseURL: 'https://api/food/list',
}) ;


export const getFoodItems = async () :Promise<ApiResponse<foodItem[]>>=>{
  const response = await apiClient.get('/fooditem');
    return response.data;
  
}


