import React, { Component } from 'react'
import {Link} from "react-router-dom";
import authHeader from '../services/auth-header';

export default class ConfirmBooking extends Component {
    constructor(){
        super();
        this.state = {confirmbooking: []}
    }
    componentDidMount(){
        fetch('http://localhost:8010/api/v1/carbookedusers',{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({confirmbooking: data[data.length - 1]})
            console.log(this.state.confirmbooking)
        });
    }
    render() {
        return (
        <div className="MainDiv">
        <div className="confirmbooking-loginpage">
            <div className="confirmbooking-user_login_top">
                    <p className="confirmbooking-user_login">Confirm Booking</p>
            </div>
            <div className="confirmdata">
                <p>{this.state.confirmbooking.name}</p>
                <p>{this.state.confirmbooking.phoneNumber}</p>
                <p><small>Pickup Location</small></p>  
                <p>{this.state.confirmbooking.FromLocation}</p>
                <p><small>Drop Location</small></p>  
                <p>{this.state.confirmbooking.ToLocation}</p>
                <Link to={'/thankyou'} className="linkcolor">
                    <button type="button"  className="btn btn-success m-1"> Confirm </button>
                </Link>
                <button type="button" className="btn btn-danger m-1"> Cancel </button>
            </div>
        </div>
        {/* <footer>
            <p>&copy; 2021 done by Chandru</p>
        </footer> */}
      </div>

        )
    }
}
