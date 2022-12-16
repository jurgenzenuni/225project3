import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Employee = (props) => {

    return <div class="container d-flex justify-content-center" style={{backgroundColor:'', color: '',}}>
        <Card style={{ width: '60rem' }} className="mx-auto">
        <Card.Img src = {props.data.photo}/>
                <Card.Body>
                 <Card.Title> Employee ID: {props.data.id} <br></br>
                 {props.data.name} <br></br>
                 Start Date: {props.data.startDate} <br></br>
                 Role: {props.data.role}<br></br>
                 Department: {props.data.department}<br></br>
                 </Card.Title>
                 <Card.Text>
                 <button type="button" class="btn btn-success mt-3 mb-3" onClick={props.resetState}> Back To Employee Directory </button>
                 </Card.Text>
                </Card.Body>
        </Card>

        
        </div>
}

export default Employee;