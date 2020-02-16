"use-strict";

import React from 'react'; 

class Login extends React.Component {
    constructor(props){
        super (props);

        this.state={
            email: "",
            password: ""
        }

        this.login = this.login.bind (this);
        this.toggleChange = this.toggleChange.bind (this);
    }

    login(){}
    toggleChange(){}

    render(){
        return(
            <div className="loginClass">
                <h1>Login</h1>
                <h2>Please login to access to your account</h2>
                <form>
                <label>Your Email</label>
                <input type = 'text' placeholder = 'Please enter your email'></input>
                <label>Your Password</label>
                <input type = 'text' placeholder = 'Please enter your password'></input>
                <button>Login</button>
                </form>
            </div>
        ); 
    }; 
}

export default Login; 