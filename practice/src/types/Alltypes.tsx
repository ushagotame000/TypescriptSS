export interface foodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export interface ReusableButtonProps {
  text: string;
  imageScr?: string;
  altText?: string;
  onclick?: () => void;
  className?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}