import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/Product';

function HomeScreen()
{
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get('/api/products/')
            setProducts(data)
        }
        fetchProducts()
        
    }, [])
    return(
        <div>
            <h4 className="mt-3">Latest Products</h4>
            <div className = "row">
                {
                    products.map(product=>(
                        <div key = {product._id} className = "col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <Product product={product}/>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default HomeScreen;