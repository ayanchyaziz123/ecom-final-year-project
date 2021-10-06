import React, { useState } from 'react';

function PricePredict(){


    return (
        <form>
            <label for="exampleFormControlSelect1">Brand Name</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>Iphone</option>
                <option>Samsung</option>
                <option>Oppo</option>
            </select>
            <label for="exampleFormControlSelect1">RAM</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1 gb</option>
                <option>2 gb</option>
                <option>3 gb</option>
                <option>4 gb</option>
                <option>6 gb</option>
            </select>
            <label for="exampleFormControlSelect1">ROM</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>16 gb</option>
                <option>32 gb</option>
                <option>64 gb</option>
                <option>128 gb</option>
                <option>256 gb</option>
            </select>
            <label for="exampleFormControlSelect1">Camera</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>10px</option>
                <option>20px</option>
                <option>30px</option>
                <option>40px</option>
                <option>50px</option>
            </select>
            <br></br>
            <button className="btn btn-dark">Predict</button>
            
        </form>
    )
}
export default PricePredict;