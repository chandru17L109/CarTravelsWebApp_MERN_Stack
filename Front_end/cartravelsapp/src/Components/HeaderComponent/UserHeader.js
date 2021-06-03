import React, { Component } from 'react'
import '../App.css'
import {Button} from 'react-bootstrap' 
import {Link} from "react-router-dom";
import AuthService from '../services/auth'
import authHeader from '../services/auth-header';

export default class UserHeader extends Component {
    constructor(){
        super();
        this.state = {navbarshow:"collapse navbar-collapse justify-content-end", ShowStatus : false}
    }

    logout(){
        var current_user = AuthService.finduserid();
        var current_user_id;
        fetch('http://localhost:8010/api/v1/AllUsersLog/'+current_user,{
            headers: authHeader()
        })
        .then(data =>data.json())
        .then(res=>{
            console.log("response",res);
            current_user_id =  res[res.length - 1]._id
            console.log("userlog",current_user_id)
            fetch('http://localhost:8010/api/v1/AllUsersLog/'+current_user_id, {
                method: 'PATCH',
                headers:authHeader(),
                body: JSON.stringify({loggedoutAt : new Date().toLocaleString(), status : "OUT"}),
            })
            .then(res=>{
                console.log(res.status);
                if(res.status === 200){
                    console.log("logout successful")
                    localStorage.removeItem('token');
                    this.props.history.push("/");
                    window.location.reload();
                }
            })
        })
    }
 
    show(){
        if(!this.state.ShowStatus){
          this.setState({navbarshow:"collapse navbar-collapse justify-content-end show", ShowStatus : true})
        }else{
          this.setState({navbarshow:"collapse navbar-collapse justify-content-end", ShowStatus : false})
        }
    }

    render() {
        return (
            <div className="MainDiv">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="navbar-brand">
                <Link to={'/'} className="linkcolor">
                    <img alt="logo" src="https://yt3.ggpht.com/a/AATXAJyxJPOgMaAd69NNjLLzYBhyJmNT8PpQb3M4YS7jrA=s176-c-k-c0xffffffff-no-rj-mo" className="d-inline-block logoimg align-top"/>
                    <span className="cartarvels">Car Travels</span>
                </Link>
              </div>

                <button className="navbar-toggler" type="button" onClick={this.show.bind(this)} data-toggle="collapse" data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={this.state.navbarshow} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Button variant="outline-info" className="m-2"><Link to={'/userlocalbookinglist'} className="linkcolor">Local Booking List </Link></Button>
                        <Button variant="outline-info" className="m-2"><Link to={'/usertourbookinglist'} className="linkcolor">Tour Booking List</Link></Button>
                        <Button variant="outline-primary" className="m-2" ><Link to={'/localnewbooking'} className="linkcolor">Local Package</Link></Button>
                        <Button variant="outline-warning" className="m-2" ><Link to={'/tourpackagelist'} className="linkcolor">Tour Package</Link></Button>
                        <Button variant="outline-secondary" className="m-2" ><Link to={'/carKilometerDetails'} className="linkcolor">Car Km/hr Details</Link></Button>
                        <Button variant="outline-primary" className="m-2"><Link to={'/userlogdetails'} className="linkcolor">Log Details</Link></Button>
                        <Button variant="outline-info" className="m-2"  onClick={this.logout.bind(this)}>Log Out</Button>
                     </ul>
                </div>

                </nav>
            </div>
        )
    }
}
