import React from 'react';
import './DropDown.css';

const DropDown = (props) => {
    let { className, label, options, ddRef, errorMsg, onChangeHandler} = props;
    const optionList = options && options.map((value, index) => <option key={index}>{value}</option>)
    return (
        <div className={'drop-down ' + (className || " ")}>
            {label && <label className='user-input-label'>{ label }</label>}
            <select 
                className='user-input user-input-select'
                ref={ddRef}
                onChange={onChangeHandler}
            >   
                {optionList}
            </select>
            {errorMsg && <label className='user-input-label user-input-error'>{ errorMsg }</label>}
        </div>
    )
}

export default DropDown;