import { useEffect, useState } from 'react';
import './App.css';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';
import Error from './components/Error';
import Loading from './components/Loading';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [error, setError] = useState(false);

  const resetState = () => {
    setEmployeeData([]);
    setSelectedEmployee(null);
    setLoading(true);
    getEmployeeData();
  }

  const getEmployeeData = (id=null) => {
    setLoading(true);


    let actualId= '';

    if (!!id && parseInt(id,10) > 0) {
      actualId = parseInt(id, 10);
    }


    axios.get(`https://api.matgargano.com/employees/${actualId}`).then(response => {
      setEmployeeData(response.data);
      setLoading(false);
    })

  }

  useEffect(() => {
    getEmployeeData();
  }, []);

  useEffect(() => {

    if(!!selectedEmployee){
      getEmployeeData(selectedEmployee);
    }

  }, [selectedEmployee])


  return (
    <div className="App">
      
    <nav class="navbar p-3 mb-5 ">
      <div class="container-fluid ">
        <a class="navbar-brand text-white mx-auto" href="#"> <h2>Employee Directory</h2></a>
      </div>
    </nav>


      {!!error && <Error />}
      {!error && <div>
        {!!loading && <Loading />}
        {!loading && <div>

          {!selectedEmployee && <EmployeeList setSelectedEmployee={setSelectedEmployee} data={employeeData} />}

          {!!selectedEmployee && <Employee resetState={resetState} data={employeeData} />}
          
        </div>}
        
        </div>}
    </div>
  );
}

export default App;
