
const EmployeeList = (props) => {

    const updateEmployee = (employeeId) => {
        props.setSelectedEmployee(employeeId);
    }

    return <div style={{}}> {
        
       props.data.map(employee => {

        return <p class="list"> 
        <b>Employee ID:</b> {employee.id}<br></br>
        <b>Name:</b> {employee.name}<br></br>
        <b>Department:</b> {employee.department} <br></br>
        <button type="button" class="btn btn-success mt-3 mb-3 list" onClick={() => { updateEmployee(employee.id)}} > View Info </button>
         </p>

       })
        
        } </div>

}
export default EmployeeList;