import React from 'react';
import products from '../../products';
import Product from '../../components/Product';
function HomeScreen()
{
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