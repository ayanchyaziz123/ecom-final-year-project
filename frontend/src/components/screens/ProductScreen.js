import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../../components/Rating';
import axios from 'axios';

function ProductScreen({match}) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`/api/product/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [])
    return (
        <div>
            <Link to='/' className="btn btn-light my-3">Go Back</Link>
            <div className="row">
                <div className="col-sm-6">
                     <img src={product.image} className="img-fluid"/>
                </div>
                <div className="col-sm-3">

                    <ul class="list-group shadow">
                        <li class="list-group-item">{product.name}</li>
                        <li class="list-group-item"><Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} /></li>
                        <li class="list-group-item">Price ${product.price}</li>
                        <li class="list-group-item">Description : {product.description}</li>
                    </ul>

                </div>

                <div className="col-sm-3">
                    <ul class="list-group shadow">
                        <li class="list-group-item">Price ${product.price}</li>
                        <li class="list-group-item">Status : {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</li>
                        <li class="list-group-item"><button className="btn-block btn-dark" disabled={product.countInStock == 0} type="button">Add to cart</button></li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default ProductScreen;