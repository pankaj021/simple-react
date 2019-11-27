import React, { Component } from 'react';
import { Input, DropDown, Button } from '../pattern-library';
// import {Link} from 'react-router-dom';
import {saveEmployeeDetails} from '../../api/saveEmployeeDetails';
import './RegistrationForm.css'

class RegistrationForm extends Component {  
    constructor(){
        super();
        this.state = {
            firstNameError: null,
            lastNameError: null,
            dobError: null,
            departmentError: null,
        }
    }  

    validateInput() {
        return {
            hasError: !( this.firstNameEl.value && this.lastNameEl.value && this.dateOfBirthEl.value && this.departmentEl.value ),
            firstNameError: this.firstNameEl.value ? null : "Can't be empty",
            lastNameError: this.lastNameEl.value ? null : "Can't be empty",
            dobError: this.dateOfBirthEl.value ? null : "Can't be empty",
            departmentError: this.departmentEl.value ? null : "Can't be empty"
        }
    }

    registerUser = (event) => {
        let errors = this.validateInput();
        if(errors.hasError){
            this.setState({...errors})
        } else {
            saveEmployeeDetails(this)
            .then(response => console.log("Employee details saved....", response))
            .catch(error => console.log("Employee occurred...", error))
        }
    }

    render() {
        let { firstNameError, lastNameError, dobError, departmentError } = this.state;
        return (
            <div className='registration-form'>
                <h2>Register</h2>
                <div className='form'>
                    <Input
                        type='text'
                        className="mg-b-15"
                        placeholder='Enter First Name'
                        label="First Name"
                        errorMsg={firstNameError}
                        inputRef={(el => this.firstNameEl = el)}
                        onChange={() => { }}
                    />
                    <Input
                        type='text'
                        className="mg-b-15"
                        placeholder='Enter Last Name'
                        label="Last Name"
                        errorMsg={lastNameError}
                        inputRef={(el => this.lastNameEl = el)}
                        onChange={() => { }}
                    />
                    <Input
                        type='text'
                        className="mg-b-15"
                        placeholder='Enter Department'
                        label="Department"
                        errorMsg={departmentError}
                        inputRef={(el => this.departmentEl = el)}
                        onChange={() => { }}
                    />
                    <DropDown
                        label="Gender"
                        className="mg-b-15"
                        ddRef={(el => this.genderEl = el)}
                        options={
                            ['Male', 'Female']
                        }
                        onChange={() => { }}
                    />
                    <Input
                        type='date'
                        className="mg-b-15"
                        placeholder='dd/mm/yyyy'
                        label="Date of Birth"
                        errorMsg={dobError}
                        inputRef={(el => this.dateOfBirthEl = el)}
                        onChange={() => { }}
                    />
                    <Button
                        text='Submit'
                        btnType='btn-pm'
                        onClickHandler={this.registerUser}
                    />
                </div>
            </div>
        )
    }
}

export default RegistrationForm;