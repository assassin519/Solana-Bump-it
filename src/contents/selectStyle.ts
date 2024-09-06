import React from "react";
import { StylesConfig } from "react-select";
interface Option {
    value: string;
    label: string;
    icon?: React.FC;
}

export const customStyles: StylesConfig<Option> = {

    control: (provided) => ({
        ...provided,
        width: '200px', // Set your desired width
        // height: '12px', // Set your desired height
        outline: 'none',
        backgroundColor: 'f0f0f0',
        borderColor: 'transparent', // Remove border
        boxShadow: 'none', // Remove shadow
        '&:hover': {
            // borderColor: 'black', // Keep border transparent on hover
        },
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 9999, // Ensure the dropdown is above other elements
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#f0f0f0' : 'white', // Change background on hover
        color: 'black', // Change text color
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'black', // Change selected value color
    }),

};