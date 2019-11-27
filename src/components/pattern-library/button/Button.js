import React from 'react';
import './Button.css';

const Button = (props) => {
    let { className, btnType, text, onClickHandler} = props;
    return (
        <button 
            className={'button ' + (className || " " + (' ' + btnType || ""))} 
            onClick={onClickHandler}
        >
            {text || 'button'}
        </button>
    )
}

export default Button;