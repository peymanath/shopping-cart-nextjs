import React from 'react';

const Button = ({text, Icon}) => {
    return (
        <button className="py-1 px-3 rounded-md bg-primary text-white">
            {
                Icon && <Icon className="w-5 h-5"/>
            }
            {text}
        </button>
    )
};

export default Button;