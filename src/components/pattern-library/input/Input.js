import React from 'react';
import '../index.css';

const Input = (props) => {
    let { type, className, placeholder, label, inputRef, errorMsg, onChangeHandler} = props;
    return (
        <div className={'input ' + (className || " ")}>
            {label && <label className='user-input-label'>{ label }</label>}
            <input 
                className='user-input'
                type={type || 'text'}
                placeholder={placeholder || ""}
                ref={inputRef}
                onChange={onChangeHandler}
            />
            {errorMsg && <label className='user-input-label user-input-error'>{ errorMsg }</label>}
        </div>
    )
}

export default Input;