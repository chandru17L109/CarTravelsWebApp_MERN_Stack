import React, { Component } from 'react'
import '../App.css'
import {Button} from 'react-bootstrap' 
import {Link} from "react-router-dom";

export default class Header extends Component {
    constructor(){
        super();
        this.state = {navbarshow:"collapse navbar-collapse justify-content-end"}
    }

    show(e){
        e.preventDefault();
        this.setState({navbarshow:"collapse navbar-collapse justify-content-end show"})
        console.log("navbar",this.state.navbarshow)
    }

    render() {
        console.log("navbar--1",this.state.navbarshow)
        return (
            <div className="MainDiv">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="navbar-brand">
                <Link to={'/'} className="linkcolor">
                    <img alt="logo" src="https://yt3.ggpht.com/a/AATXAJyxJPOgMaAd69NNjLLzYBhyJmNT8PpQb3M4YS7jrA=s176-c-k-c0xffffffff-no-rj-mo" width="40px" height="40px" className="d-inline-block align-top"/>
                    <span className="cartarvels">Car Travels</span>
                </Link>
              </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon" onclick={this.show.bind(this)}></span>
                </button>
                <div className={this.state.navbarshow} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Button variant="outline-primary" className="m-2" ><Link to={'/localnewbooking'} className="linkcolor">Local Package</Link></Button>
                        <Button variant="outline-warning" className="m-2" ><Link to={'/tourpackagelist'} className="linkcolor">Tour Package</Link></Button>
                        <Button variant="outline-info" className="m-2"><Link to={'/signup'} className="linkcolor">Sign Up </Link></Button>
                        <Button variant="outline-info" className="m-2"><Link to={'/login'} className="linkcolor">Log In </Link></Button>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}



{/* <Nav.Item className="ml-auto">
                    
                    <Button variant="outline-primary" className="m-2" ><Link to={'/localnewbooking'} className="linkcolor">Local Package</Link></Button>
                    <Button variant="outline-warning" className="m-2" ><Link to={'/tourpackagelist'} className="linkcolor">Tour Package</Link></Button>
                    <Button variant="outline-info" className="m-2"><Link to={'/signup'} className="linkcolor">Sign Up </Link></Button>
                    <Button variant="outline-info" className="m-2"><Link to={'/login'} className="linkcolor">Log In </Link></Button>
                </Nav.Item> */}