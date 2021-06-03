import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Container} from 'react-bootstrap'
import AuthService from '../services/auth'

export default class LoginPage extends Component {
    constructor(){
        super();
        this.state = {emailid: "", password:"", showalert : false,
                      emailidCheck:"form-control",passwordCheck:"form-control" }
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

    passwordHandler(event) {
        let password1 = event.target.value;
        if(password1.length < 7) {this.setState({passwordCheck:"form-control is-invalid"})}
        else {this.setState({passwordCheck:"form-control is-valid",password:event.target.value})}
        console.log(this.state.password ,  event.target.value)
    }

    loginuser(event){
        event.preventDefault();
        if(this.state.emailidCheck === "form-control is-valid" && this.state.passwordCheck === "form-control is-valid"){
            fetch('http://localhost:8010/api/v1/signedupuserdetails/loginuser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({emailid: this.state.emailid, password : this.state.password}),
            })
            .then(data =>data.json())
            .then(res=>{
                console.log(res);
                if(res.success === true){ 
                    if(!localStorage.getItem('token')){
                        localStorage.setItem('token', res.token);
                        alert("Successfully Logged in ✔")
                        var current_user = AuthService.finduserid()
                        fetch('http://localhost:8010/api/v1/AllUsersLog',{
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({user : current_user, loggedinAt : new Date().toLocaleString(), status : "IN"}),
                        })
                        .then(data =>data.json())
                        .then(res=>{
                            console.log(res);
                        })
                        this.props.history.push("/");
                         window.location.reload();
                    }else{
                        alert("Already Signed In ✔")
                        this.props.history.push("/");
                        window.location.reload();
                    }    
                }else{
                    alert("Username/Password incorrect ❌\nor\nAfter Signup Please Login ☺")
                }
            })
        }else{
            alert("Please Enter All the fields Correctly!")
        //  this.setState({emailidCheck:"form-control is-invalid",passwordCheck:"form-control is-invalid"})
        } 
    }

    render() {
        return (
            <div className="MainDiv">
                {/* <div>
                    <Header/>
                </div> */}
               <Container className="mt-3 mb-4 p-3">
                <div className="loginpage">
                    <div className="user_login_top"></div>
                    <p className="user_login mt-2">User Login</p>
                    <form onSubmit={this.loginuser.bind(this)}>
                        <div className="form-group">
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
                                        <div class="input-group-text"><i class="fas fa-unlock-alt"></i></div>
                                    </div>
                                        <input type="password"  onChange={this.passwordHandler.bind(this)} class={this.state.passwordCheck} id="password" placeholder="Create Password"/>
                                        <small class="invalid-feedback text-left"> 
                                            Password Should be minimum of length 8
                                        </small>
                                 </div>
                            </div>
                        </div>
                       <input type="submit" value="Log in" className="login-button"></input>
                    </form>
                    <p className="text-muted mt-3 mb-1">Create Your Account </p>
                    <Link to={'/signup'} className="linkcolor">
                         <input type="button" value="Sign up" className="login-signup-button mb-4"></input>
                    </Link>
                </div>
               </Container>
               {/* <footer>
                 <p>&copy; 2021 done by Chandru</p>
                </footer> */}
            </div>
        )
    }
}
