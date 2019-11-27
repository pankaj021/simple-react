import axios from 'axios';

export const saveEmployeeDetails = (thisObj) => {
    return axios.post('http://localhost:3333/saveEmployee', {
        "dateOfBirth": thisObj.dateOfBirthEl.value,
        "department": thisObj.departmentEl.value,
        "firstName": thisObj.firstNameEl.value,
        "gender": thisObj.genderEl.value,
        "lastName": thisObj.lastNameEl.value,
    })
}
