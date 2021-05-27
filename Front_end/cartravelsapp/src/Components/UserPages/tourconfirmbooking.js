import React, { Component } from 'react'
import {Link} from "react-router-dom";
import authHeader from '../services/auth-header';

export default class TourConfirmBooking extends Component {
    constructor(){
        super();
        this.state = {tourconfirmbooking: []}
    }
    componentDidMount(){
        fetch('http://localhost:8010/api/v1/cartourbookedusers',{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({tourconfirmbooking: data[data.length - 1]})
            console.log(this.state.tourconfirmbooking)
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
                <p>{this.state.tourconfirmbooking.name}</p>
                <p>{this.state.tourconfirmbooking.phoneNumber}</p>
                <p>{this.state.tourconfirmbooking.packagename}</p>
                <p>{this.state.tourconfirmbooking.noofdays} day package</p>  
                <p>{this.state.tourconfirmbooking.carType}</p>
                <p>{this.state.tourconfirmbooking.packageprice}</p>
                <Link to={'/thankyou'} className="linkcolor">
                    <button type="button"  className="btn btn-success m-1"> Confirm </button>
                </Link>
                <button type="button" className="btn btn-danger m-1"> Cancel </button>
            </div>
          </div>
        </div>

        )
    }
}
