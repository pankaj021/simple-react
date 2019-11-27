import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../header/Header';
import RegistrationForm from '../registration-form/RegistrationForm';
import EmployeeDashboard from '../employee-dashboard/EmployeeDashboard';
import './App.css'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={RegistrationForm}/>
                        <Route exact path='/dashboard' component={EmployeeDashboard}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;