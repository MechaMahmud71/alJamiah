import { ProductData } from "../Interfaces/Product.interface"

export type ModalPropType = {
    product: ProductData,
    handleDelete: () => void,
    onCloseModal: () => void
} 