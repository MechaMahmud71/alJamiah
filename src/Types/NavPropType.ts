import { ProductData } from "../Interfaces/Product.interface"

export type NavPropType = {
    products: ProductData[],
    setProducts: React.Dispatch<React.SetStateAction<ProductData[]>>
} 