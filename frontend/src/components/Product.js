import React from 'react';
import Rating from "./Rating";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Product({product}) {
    return (
        <div class="card shadow my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <img className="card-img-top img-fluid" src={product.image} alt="Card image cap"></img>
            </Link>
            
                <div class="card-body">
                   
                <Link to={`/product/${product._id}`}>
                    <div className="card-title"><strong>{product.name}</strong></div>
                </Link>
                    <div className="card-text">
                        <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </div>
                        <h3>
                            ${product.price}
                        </h3>
                    </div>
                </div>    
        </div>
    )
}

export default Product;