import React, { useState } from 'react'

//Types
import { SideNavPropType } from "../Types/SideNavPropsType";

import Products from '../Products.json';


const SideNav = ({ setProducts }: SideNavPropType): JSX.Element => {

    const [Checked, setChecked] = useState<string>("")

    const handleCategoryFilter = (value: string) => {
        let newProducts = [];
        if (!Checked) {
            setChecked(value)
            newProducts = Products.filter(el => el.category === value)
            setProducts(newProducts)

        } else {
            setProducts(Products)
            setChecked('')
        }
    }
    const handleYearFilter = (value: string) => {
        let newProducts = [];
        if (!Checked) {
            setChecked(value)
            newProducts = Products.filter(el => el.year === value)
            setProducts(newProducts)

        } else {
            setProducts(Products)
            setChecked('')
        }
    }

    return (
        <div className='col-2 border-end pt-3' style={{
            height: "100vh"
        }}>
            <div className="text-center fw-bold">
                Filters
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center '>
                <h5>Category</h5>
                <div className="mt-2">
                    <input type="checkbox" checked={Checked === "shoes"} name="shoes" id="" value="shoes" onChange={() => handleCategoryFilter('shoes')} />
                    <span className="ms-2">Shoes</span>
                </div>
                <br />
                <h5>Year</h5>
                <div className="my-2">
                    <input type="checkbox" name="2020" checked={Checked === "2020"} id="" value="2020" onChange={() => handleYearFilter('2020')} />
                    <span className="ms-2">2020</span>
                </div>
            </div>

        </div>
    )
}

export default SideNav