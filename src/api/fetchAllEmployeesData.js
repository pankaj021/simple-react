import axios from 'axios';
export const fetchAllEmployeesData = () => axios.get('http://localhost:3333/findAllEmployee');
