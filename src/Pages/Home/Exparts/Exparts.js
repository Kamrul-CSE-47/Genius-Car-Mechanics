import React from 'react';
import Expart from '../Expart/Expart';


const ourExparts = [
    {
        img: 'https://previews.123rf.com/images/dolgachov/dolgachov1611/dolgachov161101672/65111748-car-service-repair-maintenance-and-people-concept-auto-mechanic-man-or-smith-at-workshop.jpg',
        name: 'Shakib Adnan',
        expartize: 'Alrounder Expart'
    },
    {
        img: 'https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161011538/65131846-car-service-repair-maintenance-and-people-concept-auto-mechanic-man-or-smith-with-wrench-at-workshop.jpg',
        name: 'Kawser Ahmed',
        expartize: 'Engine Exparts'
    },
    {
        img: 'https://previews.123rf.com/images/dolgachov/dolgachov1611/dolgachov161102132/65199971-car-service-repair-maintenance-and-people-concept-auto-mechanic-man-or-smith-with-flashlight-working.jpg',
        name: 'Abbas Uddin',
        expartize: 'Pro Expart'
    },
    {
        img: 'https://previews.123rf.com/images/dolgachov/dolgachov1611/dolgachov161102153/65200067-service-repair-maintenance-and-people-concept-mechanic-man-with-automotive-diagnostic-scanner-and-cl.jpg',
        name: 'Nakek Uddin',
        expartize: 'Problem Finder'
    },
    {
        img: 'https://previews.123rf.com/images/kurhan/kurhan1312/kurhan131200187/24354202-auto-mechanic-with-wrench.jpg',
        name: 'Tanvir Ahmed Shovo',
        expartize: 'Helper & Problem Solb'
    }
]

const Exparts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-3 mb-5">Our Exparts</h2>
            <div className="row">
                {
                   ourExparts.map(expert => <Expart
                    key={expert.name}
                    expert={expert}

                   ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;