import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    const{img,price,_id,title}=service
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>${price}</p>
                <div className="card-actions justify-end">
        {/* <button className="btn btn-primary"></button> */}
        <Link to={`/checkout/${_id}`} className='text-orange-600 font-bold text-2xl'><AiOutlineArrowRight></AiOutlineArrowRight></Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default ServiceCard;