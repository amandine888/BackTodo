"use-strict";

import React from 'react'; 
import './../mystyle.css';

class Register extends React.Component {

    constructor(props){
        super(props); 

        this.state = {
            firstname: "", 
            lastname: "", 
            email: "", 
            password: ""
        };  

        this.registerAdd = this.registerAdd.bind (this);
        this.toggleChange = this.toggleChange.bind (this); 
    }

    registerAdd (){}; 

    toggleChange (){}; 

    render(){
        return (
            <div className="registerClass">
                <h1>Register</h1>
                <h2>Please create your account</h2>
                <form>
                    <label>Firstname</label>
                    <input type = 'text' placeholder = 'Please add your firstname' onChange={this.toggleChange}></input>
                    <label>Lastname</label>
                    <input type = 'text' placeholder = 'Please add your lastname' onChange={this.toggleChange}></input>
                    <label>Email</label>
                    <input type = 'text' placeholder = 'Please add your email' onChange={this.toggleChange}></input>
                    <label>Password</label>
                    <input type = 'text' placeholder = 'Please add your password' onChange={this.toggleChange}></input>
                </form>
                <button type="button" onClick={this.registerAdd}>Register</button>
            </div>
        );
    }
}

export default Register; 