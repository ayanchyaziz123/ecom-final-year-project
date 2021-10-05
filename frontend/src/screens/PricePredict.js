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
            <label for="exampleFormControlSelect1">RAW</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label for="exampleFormControlSelect1">ROM</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label for="exampleFormControlSelect1">Camera</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <br></br>
            <button className="btn btn-dark">Predict</button>
            
        </form>
    )
}
export default PricePredict;