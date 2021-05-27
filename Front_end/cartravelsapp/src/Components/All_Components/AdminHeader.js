import React, { Component } from 'react'
import '../App.css'
import { Navbar, Nav, Button} from 'react-bootstrap' 
import {Link} from "react-router-dom";


export default class AdminHeader extends Component {

    logout(e){
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.reload();
        // let istoken = localStorage.getItem('token')
        // if(istoken === null){
        //     console.log("token-removed");
        //     this.props.history.push("/")
        // }else{
        //     console.log("token removed");
        // }
        // this.props.history.push("/")
        // window.location.reload();
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
                        <Button variant="outline-success" className="m-2"><Link to={'/adminhomepage'} className="linkcolor">Tour Operations</Link></Button>
                        <Button variant="outline-warning" className="m-2"><Link to={'/addpackagedetail'} className="linkcolor">Add Tour</Link></Button>
                        <Button variant="outline-info" className="m-2"><Link to={'/adminAllTourbookinglist'} className="linkcolor">Tour Booking List</Link></Button>
                        <Button variant="outline-info" className="m-2"><Link to={'/adminAllLocalBookingList'} className="linkcolor">Local Booking List </Link></Button>
                        <Button variant="outline-success" className="m-2"><Link to={'/allsignedupusers'} className="linkcolor">Signed Users</Link></Button>
                        <Button variant="outline-danger" className="m-2"  onClick={this.logout.bind(this)}>Log Out</Button>
                    </Nav.Item>
               </Navbar>
            </div>
        )
    }
}
