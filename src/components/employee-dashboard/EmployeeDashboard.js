import React from 'react';
import {fetchAllEmployeesData} from '../../api/fetchAllEmployeesData';
import testData from '../../api/test.json';
import './EmployeeDashboard.css'

class EmployeeDashboard extends React.Component {
    constructor(){
        super();
        this.state = {employees: []}
    }
    componentDidMount(){
        fetchAllEmployeesData()
        .then(response => {
            this.setState({employees: response.data|| testData})
        })
        .catch(error => {
            console.log("Something went wrong..", error)
            this.setState({employees: testData})
        })
    }
    listEmployees = () => {
        return this.state.employees.map((employee, index) => (
            <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.gender}</td>
                <td>{employee.department}</td>
            </tr>
        ))
    }
    render() {
        if(this.state.employees.length){
            return (
                <div className='employee-dashboard'>
                    <h2>All Employees</h2>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>firstName</th>
                                    <th>lastName</th>
                                    <th>dateOfBirth</th>
                                    <th>gender</th>
                                    <th>department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.listEmployees()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        return (
            <div className='employee-dashboard'>
                <h1>Nothing to Show</h1>
            </div>
        )
    }
}

export default EmployeeDashboard;