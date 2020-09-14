import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handelInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }

        
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                className = 'buscador'
                type = 'text'
                value = {inputValue}
                onChange = {handelInputChange}
                />
        </form>
    );
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}