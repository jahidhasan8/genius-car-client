import React from 'react';
import { FcCalendar } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

const Address = () => {
    return (
        <div className="footer mt-10 flex justify-evenly   p-16 bg-gray-900 mb-10 text-neutral-content">
      
        <div className='flex'>
          <span ><FcCalendar className="w-10 h-10"></FcCalendar></span> 
           <div>
            <small>We are open monday-friday</small>
            <p>7:00 am - 9:00 pm</p>
           </div>
        </div>
        <div className='flex'>
          <span ><FiPhoneCall className="w-10 h-10 text-orange-700"></FiPhoneCall></span> 
           <div>
            <small>Have a question?</small>
            <p>+880 1929 265859</p>
           </div>
        </div>
        <div className='flex'>
          <span ><ImLocation2 className="w-10 h-10 text-orange-700"></ImLocation2></span> 
           <div>
            <small>Need a repair? our address</small>
            <p>Rupali Housing, Mirpur, Dhaka</p>
           </div>
        </div>
      </div>
    );
};

export default Address;