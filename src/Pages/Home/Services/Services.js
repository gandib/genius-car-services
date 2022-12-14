import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
// import repair1 from '../../../images/repair1.png';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id='services' className='container'>
            <h1 className='text-primary text-center mt-5 mb-3'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;