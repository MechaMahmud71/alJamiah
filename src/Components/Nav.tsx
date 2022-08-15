/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { FiSearch } from 'react-icons/fi';

//Types
import { NavPropType } from '../Types/NavPropType';
import Products from '../Products.json';

const Nav = ({ setProducts }: NavPropType): JSX.Element => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value === "") {
            setProducts(Products);
        }
        else {
            let newProducts = [...Products];
            newProducts = newProducts.filter(el => el.name.toLowerCase().includes(e.target.value));
            setProducts(newProducts);
        }

    }
    return (
        <div className='border-bottom'>
            <div className="container py-3">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-6 d-flex align-items-center" style={{
                        borderBottom: "1px solid silver"
                    }}>
                        <FiSearch style={{
                            marginRight: "10px",
                            fontSize: "20px",
                        }} />
                        <input type="text" name="keyword" onChange={handleChange} id="" placeholder='Search' style={{
                            border: "none",
                            outline: "none",
                            padding: "10px 0px"
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav