import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    //const {service} = props;
    const {id,name,price,discription,img}=service;
    return (
        <div className="service pb-5">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}$</h5>
            <p className="px-2">{discription}</p>
            <Link to={ `/booking/${id}` }>
            <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;