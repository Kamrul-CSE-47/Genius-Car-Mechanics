import React from 'react';
import './Expart.css';

const Expart = ({expert}) => {
    const {name, img, expartize} = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12 eprart">
           <img src= {img} alt="" />
           <h3>{name}</h3>
           <h5 className="text-danger">{expartize}</h5>
        </div>
    );
};

export default Expart;