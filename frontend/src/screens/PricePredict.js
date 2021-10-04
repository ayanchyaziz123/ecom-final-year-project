import React, { useState } from 'react';

function PricePredict(){

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        if (event.name == "Samsung")
        {
            console.log("samsung");
        }
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Brand Name:
                <select name="brand_name" onChange={handleChange} class="form-control">
                    <option value="Samsung">Samsung</option>
                    <option value="IPhone">Iphone</option>
                    <option value="Oppo">Oppo</option>
                </select>
            </label>
            <br></br>
            <label>Brand Name:
                <select name="ram" onChange={handleChange} class="form-control">
                    <option value="2">2 GB</option>
                    <option value="4">4 GB</option>
                    <option value="6">6 GB</option>
                </select>
            </label>
            <br></br>
            <input className="btn btn-secondary" type="submit" />
        </form>
    )
}
export default PricePredict;