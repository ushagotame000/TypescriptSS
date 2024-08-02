export interface foodItem{
    _id: string;
        name: string,
        image: string,
        price: number,
        description: string,
        category: string

}

export interface ReusableButtonProps {
    label:string;
    category:string|null;
    setSelectedCategory:(category:string|null)=>void;
}