import React, { Component } from 'react'
import { Navbar, Nav, Button, Container} from 'react-bootstrap'
import {Link} from "react-router-dom";

export default class Signuppage extends Component {
    constructor(){
        super();
        this.state = {username:"",emailid:"",phonenumber:"",password:"",
                     usernameCheck:"form-control",emailidCheck:"form-control",phonenumberCheck:"form-control",passwordCheck:"form-control"}
    }
    
    usernameHandler(event) {
        let username1 = event.target.value;
        var validusername = new RegExp('[a-zA-Z\s]{3,25}');
        if (validusername.test(username1)) {
            this.setState({usernameCheck:"form-control is-valid",username:username1})
        }
        else {this.setState({usernameCheck:"form-control is-invalid"})}
        console.log(this.state.username, event.target.value)
    }

    emailidHandler(event) {
        let email1 = event.target.value;
        var validemail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if(validemail.test(email1)){
            this.setState({emailidCheck:"form-control is-valid",emailid:email1})
        }
        else{this.setState({emailidCheck:"form-control is-invalid"})}
        console.log(this.state.emailid,  event.target.value)
    }

    phonenumberHandler(event) {
        let phoneNumber1 = event.target.value;
        var validphonenumber = new RegExp('^[6-9]{1}[0-9]{9}$');
        if(validphonenumber.test(phoneNumber1)){
            this.setState({phonenumberCheck:"form-control is-valid",phonenumber:phoneNumber1})
        }
        else{this.setState({phonenumberCheck:"form-control is-invalid"})}
        console.log(this.state.phonenumber ,  event.target.value)
    }

    passwordHandler(event) {
        let password1 = event.target.value;
        if(password1.length < 7) {this.setState({passwordCheck:"form-control is-invalid"})}
        else {this.setState({passwordCheck:"form-control is-valid",password:event.target.value})}
        console.log(this.state.password ,  event.target.value)
    }
    
    signupuser(event){
        event.preventDefault();
        if(this.state.usernameCheck === "form-control is-valid" && this.state.emailidCheck === "form-control is-valid" && this.state.phonenumberCheck === "form-control is-valid" && this.state.passwordCheck === "form-control is-valid"){
            fetch('http://localhost:8010/api/v1/signedupuserdetails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username: this.state.username, emailid: this.state.emailid, phonenumber: this.state.phonenumber, password : this.state.password}),
            })
            .then(data =>data.json())
            .then(res=>{
                console.log(res);
                console.log(this.state.username, this.state.emailid,  this.state.phonenumber, this.state.password);
                if(res.success === true){
                    event.target.reset();
                    alert(`Successfully signed up ✔ \nPlease Login to Continue 😊`)
                    this.props.history.push('/login')
                }
            })
        }else{
            this.setState({usernameCheck:"form-control is-invalid",emailidCheck:"form-control is-invalid",phonenumberCheck:"form-control is-invalid",passwordCheck:"form-control is-invalid"})
        }
    }

    render() {
        return (
            <div className="MainDiv">
            <Container className="m-3 p-3">
                <div className="signuppage">
                    <div className="user_signup_top"></div>
                    <p className="user_signup mt-2">Sign Up</p>
                    <form onSubmit={this.signupuser.bind(this)}>
                        <div className="form-group">
                            <div className="form-group row">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fas fa-user"></i></div>
                                    </div>
                                    <input type="text" onChange={this.usernameHandler.bind(this)} class={this.state.usernameCheck} id="username" placeholder="Username"/>
                                    <small class="invalid-feedback text-left"> 
                                        Please Enter Valid Username
                                    </small>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fas fa-envelope-square"></i></div>
                                        </div>
                                    <input type="email" onChange={this.emailidHandler.bind(this)} class={this.state.emailidCheck} id="email" placeholder="Email Id"/>
                                    <small class="invalid-feedback text-left"> 
                                        Please Enter Valid Email-Id
                                    </small>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fas fa-mobile-alt"></i></div>
                                        </div>
                                    <input type="number" onChange={this.phonenumberHandler.bind(this)} class={this.state.phonenumberCheck} id="phonenumber" placeholder="Phonenumber"/>
                                    <small class="invalid-feedback text-left"> 
                                        Please Enter Valid Phonenumber
                                    </small>
                                </div>
                            </div>  
                            <div className="form-group row">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fas fa-unlock-alt"></i></div>
                                        </div>
                                    <input type="password"  onChange={this.passwordHandler.bind(this)} class={this.state.passwordCheck} id="password" placeholder="Create Password"/>
                                    <small class="invalid-feedback text-left"> 
                                        Password Should be minimum of length 8
                                    </small>
                                </div>
                            </div>
                        </div>
                       <input type="submit" value="Sign Up" className="signup-button"></input>
                    </form>
                    <p className="text-muted mt-3 mb-1">Already having an account </p>
                    <Link to={'/login'} className="linkcolor">
                         <input type="button" value="Log in" className="signup-login-button mb-4"></input>
                    </Link>
                </div>
               </Container>
               <footer>
                 <p>&copy; 2021 done by Chandru</p>
                </footer>
            </div>
        )
    }
}
