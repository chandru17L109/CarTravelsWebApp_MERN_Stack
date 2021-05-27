import React, { Component } from 'react'
import '../App.css'
import { Navbar, Nav, Button} from 'react-bootstrap' 
import {Link} from "react-router-dom";

export default class UserHeader extends Component {

    logout(){
    localStorage.removeItem('token');
    console.log("token-removed");
    window.location.reload();
   }

    render() {
        return (
            <div className="MainDiv">
                <Navbar bg="dark" variant="dark" className="p-3">
                    <Navbar.Brand>
                    <Link to={'/'} className="linkcolor">
                        <img alt="logo" src="https://yt3.ggpht.com/a/AATXAJyxJPOgMaAd69NNjLLzYBhyJmNT8PpQb3M4YS7jrA=s176-c-k-c0xffffffff-no-rj-mo" width="40px" height="40px" className="d-inline-block align-top"/>
                        <span className="cartarvels">Car Travels</span>
                    </Link>
                    </Navbar.Brand>
                    <Nav.Item className="ml-auto">
                        {/* <Button variant="outline-success" className="m-2">Call Now</Button> */}
                        <Button variant="outline-info" className="m-2"><Link to={'/userlocalbookinglist'} className="linkcolor">Local Booking List </Link></Button>
                        <Button variant="outline-info" className="m-2"><Link to={'/usertourbookinglist'} className="linkcolor">Tour Booking List</Link></Button>
                        <Button variant="outline-primary" className="m-2" ><Link to={'/localnewbooking'} className="linkcolor">Local Package</Link></Button>
                        <Button variant="outline-warning" className="m-2" ><Link to={'/tourpackagelist'} className="linkcolor">Tour Package</Link></Button>
                        <Button variant="outline-info" className="m-2"  onClick={this.logout.bind(this)}>Log Out</Button>
                    </Nav.Item>
               </Navbar>
            </div>
        )
    }
}
