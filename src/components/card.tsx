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
            <div className="flex flex-col gap-4 w-full h-72 text-center items-center bg-cardBg shadow-xl rounded-md border py-8  ">
                <p className="text-center text-textColor font-semibold">{cardname}</p>
                <img src={img} className='size-24' alt="dexlog" />
                <p className="text-center text-textColor px-4 pb-8  font-semibold">{desc}</p>
            </div>
        </div>
    );
}

export default Card;