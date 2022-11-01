import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='pt-10'>
            <div>
                <p className='text-orange-600 text-center font-bold'>Popular Products</p>
                <h2 className='text-4xl pt-2 font-bold text-center'>Browse Our Products</h2>
                <p className='text-center pt-2'>The majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
                {
                    products.map(product=><ProductCard
                    
                       key={product.id}
                       product={product}
                    >


                    </ProductCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-primary text-orange-600">More Products</button>

            </div>
        </div>
    );
};

export default Products;