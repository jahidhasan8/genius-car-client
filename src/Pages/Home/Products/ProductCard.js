import React from 'react';
import { FaStar } from "react-icons/fa";
const ProductCard = ({product}) => {
    const{img,name,price}=product;
    return (
        <div className="card  bg-base-100 shadow-xl">
            
            <figure className="px-10 pt-10 shadow-xl m-4  rounded-lg">
                <img  src={img} alt="Shoes" className="rounded-xl w-32" />
            </figure>
            <p className='flex justify-center mx-2 text-orange-600'>
            <FaStar className='mr-1'></FaStar>
            <FaStar className='mr-1'></FaStar>
            <FaStar className='mr-1'></FaStar>
            <FaStar className='mr-1'></FaStar>
            <FaStar className='mr-1'></FaStar>
            </p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl text-orange-600 font-bold'>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;