import { ProductData } from "../Interfaces/Product.interface"

export type SideNavPropType = {
    products: ProductData[],
    setProducts: React.Dispatch<React.SetStateAction<ProductData[]>>
} 