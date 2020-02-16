import { withRouter} from 'react-router-dom';
import React from 'react'; 
import Login from './Login'; 
import Register from './Register';
import './../mystyle.css';

class Firstpage extends React.Component {
    render(){

        // const mystyle = {
        //         color: "red", 
        // } 

        return(
            <div>
                <button>Register</button>
                <button>Log In</button>
                <Register/>
                <Login/>
            </div>
        ); 
    }
}

export default withRouter (Firstpage); 