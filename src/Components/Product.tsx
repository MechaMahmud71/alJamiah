import React from 'react'

//types
import { ProductPropType } from '../Types/ProductPropType'

const Product = (props: ProductPropType): JSX.Element => {

    const { product } = props;

    return (
        <>
            <div className="col-12 py-3"
                style={{ height: "200px" }}
            >
                <img src={product.image} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
            </div>
            <p>{product?.name}</p>
            <div className="d-flex align-items-center justify-content-between pb-3">
                <div className="">BDT {product.price}</div>
                <div className="" style={{
                    backgroundColor: "#facc15",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "5px 8px"
                }}>{product.size}</div>
            </div>
        </>
    )
}

export default Product