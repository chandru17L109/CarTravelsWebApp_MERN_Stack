import React, { Component } from 'react'
import {Link} from "react-router-dom";
import authHeader from '../services/auth-header';

export default class TourConfirmBooking extends Component {
    constructor(){
        super();
        this.state = {tourconfirmbooking: [],userselectedDetails:[]}
    }
    componentDidMount(){
        // const { match: { params } } = this.props;
        // console.log(this.props);
        // console.log(params.currentdetails)
        // var templist = (params.currentdetails).split(",");
        // console.log(templist)
        // this.setState({userselectedDetails : params.currentdetails})
        // console.log(this.state.userselectedDetails)
       //console.log(this.state.userselectedDetails.username)
    
        fetch('http://localhost:8010/api/v1/cartourbookedusers',{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({tourconfirmbooking: data[data.length - 1]})
            console.log(this.state.tourconfirmbooking)
            // console.log(this.state.userselectedDetails)
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
