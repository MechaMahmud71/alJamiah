import React from 'react'

//types
import { ModalPropType } from '../Types/ModalPropType'

//style
import "../Style/modal.style.css"

const Modal = ({ handleDelete, product, onCloseModal }: ModalPropType): JSX.Element => {


    return (
        <div className='modal-wrapper'>
            <div style={{ width: "300px", padding: "20px", background: "white", borderRadius: "8px" }}>
                <div className="image-container">
                    <img src={product.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className='my-2'>
                    <div className='py-1 fw-bold'>Name : {product.name}</div>
                    <div>Category : {product.category}</div>
                    <div>Brand : {product.brand}</div>
                    <div>Size : {product.size}</div>
                    <div>Price : {product.price}</div>
                    <div>Year : {product.year}</div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <button className="btn btn-danger mb-1" style={{ width: "100%" }} onClick={handleDelete}>Delete</button>
                    <button className="btn btn-primary" style={{ width: "100%" }} onClick={onCloseModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal