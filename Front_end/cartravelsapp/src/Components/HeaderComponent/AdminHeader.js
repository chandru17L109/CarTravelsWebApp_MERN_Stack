import React, { Component } from 'react'
import '../App.css'
import { Navbar, Nav, Button} from 'react-bootstrap' 
import {Link} from "react-router-dom";


export default class AdminHeader extends Component {
    constructor(){
        super();
        this.state = {navbarshow:"collapse navbar-collapse justify-content-end", ShowStatus : false}
    }

    logout(){
        localStorage.removeItem('token');
        this.props.history.push("/")
        window.location.reload();
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
                    <img alt="logo" src="https://yt3.ggpht.com/a/AATXAJyxJPOgMaAd69NNjLLzYBhyJmNT8PpQb3M4YS7jrA=s176-c-k-c0xffffffff-no-rj-mo" className="d-inline-block align-top logoimg"/>
                    <span className="cartarvels">Car Travels</span>
                </Link>
              </div>

                <button className="navbar-toggler" type="button" onClick={this.show.bind(this)} data-toggle="collapse" data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={this.state.navbarshow} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <Button variant="outline-secondary" className="m-2" ><Link to={'/Admintourchart'} className="linkcolor">Chart</Link></Button>
                        <Button variant="outline-success" className="m-2"><Link to={'/adminhomepage'} className="linkcolor">Tour Operations</Link></Button>
                        <Button variant="outline-warning" className="m-2"><Link to={'/addpackagedetail'} className="linkcolor">Add Tour</Link></Button>
                        <Button variant="outline-info" className="m-2"><Link to={'/adminAllTourbookinglist'} className="linkcolor">Tour Booking List</Link></Button>
                        <Button variant="outline-info" className="m-2"><Link to={'/adminAllLocalBookingList'} className="linkcolor">Local Booking List </Link></Button>
                        <Button variant="outline-success" className="m-2"><Link to={'/allsignedupusers'} className="linkcolor">Signed Users</Link></Button>
                        <Button variant="outline-secondary" className="m-2" ><Link to={'/carKilometerDetailsAdmin'} className="linkcolor">Car Km/hr Details</Link></Button>
                        <Button variant="outline-danger" className="m-2"  onClick={this.logout.bind(this)}>Log Out</Button>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
