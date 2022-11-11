import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    const [isAsc, setIsAsc]=useState(true)
    const searchRef=useRef();
    const [search,setSearch]=useState('')
    useEffect(() => {
        fetch(`https://genius-car-server-wine.vercel.app/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc,search])

    const handleSearch=()=>{
        setSearch(searchRef.current.value)
    }
    return (
        <div>
            <div className='text-center mb-6'>
                <p className="text-2xl font-bold text-orange-600 mb-2">Services</p>
                <h2 className="text-4xl font-semibold mb-2">
                    Our Service Area
                </h2>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised  words which don't look even slightly believable. </p>
                <input ref={searchRef} className='input-sm input-bordered' type="text" name="" id="" /> <button onClick={handleSearch}>Search</button>
                <button className='btn btn-ghost' onClick={()=>setIsAsc(!isAsc)}>{isAsc? 'desc':'asc'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-primary text-orange-600">More Services</button>

            </div>

        </div>
    );
};

export default Services;