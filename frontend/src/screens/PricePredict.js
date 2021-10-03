import React from 'react';

function PricePredict(){
    return(
        <div>
            <h3>Predict A mobile Price</h3>
            <div class="form-group">
                <label for="sel1">Brand Name:</label>
                <select class="form-control" id="sel1">
                    <option>Iphone</option>
                    <option>Samsung</option>
                    <option>Oppo</option>
                </select>
            </div>
            <div class="form-group">
                <label for="sel1">RAM:</label>
                <select class="form-control" id="sel1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div class="form-group">
                <label for="sel1">ROM:</label>
                <select class="form-control" id="sel1">
                    <option>32</option>
                    <option>64</option>
                    <option>128</option>
                    <option>256</option>
                </select>
            </div>
            <div class="form-group">
                <label for="sel1">Cammera:</label>
                <select class="form-control" id="sel1">
                    <option>20px</option>
                    <option>30px</option>
                    <option>40px</option>
                    <option>50px</option>
                </select>
            </div>
            <button class="btn btn-dark">Predict</button>
        </div>
    )
}

export default PricePredict;