//Packages
import React, { useState } from 'react'
import Modal from '../Components/Modal';
//Components
import Nav from '../Components/Nav'
import Product from '../Components/Product';
import SideNav from '../Components/SideNav';

//interfaces
import { ProductData } from '../Interfaces/Product.interface';

//data
import Products from '../Products.json';

const Home = (): JSX.Element => {
    const [products, setProducts] = useState<ProductData[]>(Products);
    const [product, setProduct] = useState<ProductData>({} as ProductData)
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleDelete = (): void => {
        let newProducts = [...products];
        newProducts = newProducts.filter(el => el.name !== product.name);
        setProducts(newProducts);
        setOpenModal(false)
    }

    const handleModalClose = () => {
        setOpenModal(false);
    }


    return (
        <div>
            <Nav products={products} setProducts={setProducts} />
            <div className="row">
                <SideNav products={products} setProducts={setProducts} />
                <div className="col-10" style={{
                    background: "#f9fafb",
                    minHeight: "100vh",
                    height: "100%"
                }}>
                    <div className="row">
                        {products && products?.map((el, index) => (
                            <div onClick={() => {
                                setProduct(el);
                                setOpenModal(true)
                            }} className="col-sm-12 col-md-4 col-lg-2 m-3" style={{ background: "white" }} key={index}>
                                <Product product={el} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {openModal && <Modal onCloseModal={handleModalClose} product={product} handleDelete={handleDelete} />}

        </div>
    )
}

export default Home