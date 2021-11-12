import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const photo = "https://media.istockphoto.com/photos/pug-dog-with-yellow-constructor-safety-helmet-and-cone-and-404-error-picture-id687810238?k=20&m=687810238&s=612x612&w=0&h=5MdWpmZyAKqnZxbUQw5d2t5KttUL4947Sn-DFdM8ayE=";
    return (
        <div>
            <img src={photo} ait="" />

            <Link to="/"><button>Go back</button></Link>
        </div>
    );
};

export default NotFound;