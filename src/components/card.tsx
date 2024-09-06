import React from 'react';

// Define the interface for the component's props
interface CardProps {
    img: string;
    cardname: string;
    desc: string;
}

// Update the Card component to accept props of type CardProps
const Card: React.FC<CardProps> = ({ img, cardname, desc }) => {
    return (
        <div>
            <div className="flex flex-col justify-center text-center items-center rounded-md border py-8  ">
                <p className="text-center text-textColor font-semibold">{cardname}</p>
                <img src={img} width={40} alt="dexlog" />
                <p className="text-center text-textColor px-2 pb-8  font-semibold">{desc}</p>
            </div>
        </div>
    );
}

export default Card;