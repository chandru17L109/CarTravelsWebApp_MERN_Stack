import React, { Component } from 'react'
import {Row} from 'react-bootstrap' 
import car4 from '../Assets/car4.png';
import kovai from '../Assets/kovai.JPG';
import authHeader from '../services/auth-header';
import AuthService from '../services/auth'

export default class LocalTourPage extends Component {
    constructor(){
        super();
        this.state = {username:"", phonenumber:"", fromlocation:"", tolocation:"", usernameCheck:"form-control", phonenumberCheck:"form-control", fromlocationCheck:"form-control", tolocationCheck:"form-control", currentuserid : []}
    }

    usernameHandler(event){
        let username1 = event.target.value;
        var validusername = new RegExp('[a-zA-Z\s]{3,25}');
        if (validusername.test(username1)) {
            this.setState({usernameCheck:"form-control is-valid",username:username1})
        }
        else {this.setState({usernameCheck:"form-control is-invalid"})}
    }

    phonenumberHandler(event){
        let phonenumber1 = event.target.value;
        var validphonenumber = new RegExp('[6-9]{1}[0-9]{9}$');
        if (validphonenumber.test(phonenumber1)) {
            this.setState({phonenumberCheck:"form-control is-valid",phonenumber:phonenumber1})
        }
        else {this.setState({phonenumberCheck:"form-control is-invalid"})}
    }

    fromlocationHandler(event){
        let fromlocation1 = event.target.value;
        if (fromlocation1.length >= 10) {
            this.setState({fromlocationCheck:"form-control is-valid",fromlocation:fromlocation1})
        }
        else {this.setState({fromlocationCheck:"form-control is-invalid"})}
    }

    tolocationHandler(event){
        let tolocation1 = event.target.value;
        if (tolocation1.length >= 10) {
            this.setState({tolocationCheck:"form-control is-valid",tolocation:tolocation1})
        }
        else {this.setState({tolocationCheck:"form-control is-invalid"})}
    }
    
    booknow(){
        console.log("book now")
        if(AuthService.findrole() === "user"){
            console.log("true user")
        }else if(AuthService.findrole() === "admin"){
            console.log("true admin")
            alert("Admin can't Book tours")
            this.props.history.push("/localnewbooking")
        }else{
            console.log("false notuser")
            alert("Please Login to Book ! 😊")
            this.props.history.push("/login")
        }
    }

    addBooking(event){
        event.preventDefault();
        console.log("before booknow function")
        this.booknow();
        console.log("after booknow function")
        console.log(this.state.username,this.state.phonenumber,this.state.fromlocation,this.state.tolocation);
        if(this.state.usernameCheck === "form-control is-valid" && this.state.fromlocationCheck === "form-control is-valid" && this.state.phonenumberCheck === "form-control is-valid" && this.state.tolocationCheck === "form-control is-valid"){
            var userid  =  AuthService.finduserid();
            console.log("userid",userid); 

            fetch('http://localhost:8010/api/v1/carbookedusers', {
                method: 'POST',
                headers: authHeader(),
                body: JSON.stringify({name: this.state.username, phoneNumber: this.state.phonenumber, FromLocation : this.state.fromlocation, ToLocation : this.state.tolocation, user: userid}),
            })
            .then(res=>{
                console.log(res.status);
                if(res.status === 201){
                    event.target.reset();
                    this.props.history.push("/confirmbooking");
                }
            })
        }else{
            this.setState({usernameCheck:"form-control is-invalid",fromlocationCheck:"form-control is-invalid",phonenumberCheck:"form-control is-invalid",tolocationCheck:"form-control is-invalid"})
        }  
    }

    render() {
        return (
        <div className="MainDiv">
             <div className="new-booking-body row">
                    <div className="car-img-div">
                        <span className="main-heading"> Book your <br></br> Local travel location<br></br>Here ! 🚗</span>
                    </div>
                    <div className="main-content-div">
                        <img className="car-main-img" src={car4} alt="car"></img> 
                     </div>   
            </div>
            <Row className="popular-image-kovai p-5">
               <div className="poupular-places">
                   <p> Popular Places</p>
               </div>
                <div className="Card_Gallery text-center m-3 border-0">
                <div className="Card_Gallery_pic m-3">
                    <img variant="top" src="https://images.sadhguru.org/sites/default/files/media_files/guru-purnima-photo.jpg" width="343px" height="200px" alt="galleryimages"/>
                    <span className="title-font">Isha Yoga</span>
                </div>
                </div>
                <div className="Card_Gallery text-center m-3 border-0">
                <div className="Card_Gallery_pic m-3">
                    <img variant="top" src="https://www.nativeplanet.com/photos/325x244x100/2018/11/photo-91-174633-1.jpg" width="343px" height="200px" alt="galleryimages"/>
                    <span className="title-font"> Marudhamalai Temple</span>
                </div>
                </div>
                <div className="Card_Gallery text-center m-3 border-0">
                <div className="Card_Gallery_pic m-3">
                    <img variant="top" src="https://www.covaipost.com/wp-content/uploads/2018/04/kovaikutralam.jpg" width="343px" height="200px" alt="galleryimages"/>
                    <span className="title-font"> Kovai Kutralam</span>
                </div>
                </div>
                <div className="Card_Gallery text-center m-3 border-0">
                <div className="Card_Gallery_pic m-3">
                    <img variant="top" src="https://content3.jdmagicbox.com/comp/coimbatore/e9/0422px422.x422.110827121420.b4e9/catalogue/brookefields-plaza-coimbatore-ho-coimbatore-malls-1f0ntkf.jpg" width="343px" height="200px" alt="galleryimages"/>
                    <span className="title-font"> Brookefield</span>
                </div>
                </div>
                <div className="Card_Gallery text-center m-3 border-0">
                <div className="Card_Gallery_pic m-3">
                    <img variant="top" src="https://pbs.twimg.com/media/DFQb0s5VoAAZyQv.jpg" width="343px" height="200px" alt="galleryimages"/>
                    <span className="title-font"> Prozone</span>
                </div>
                </div>
                <div className="Card_Gallery text-center m-3 border-0">
                <div className="Card_Gallery_pic m-3">
                    <img variant="top" src="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1585559d1481876573t-visit-gedee-car-museum-coimbatore-dsc_0715.jpg" width="343px" height="200px" alt="galleryimages"/>
                    <span className="title-font"> Gedee Museum </span>
                </div>
                </div>
        </Row>
        <div className="form-bg">
        <div className="newbooking-loginpage">
        <div className="newbooking-user_login_top"></div>
        <p className="mt-2 newbooking-user_login">Travel local places in Coimbatore</p>
        <form onSubmit={this.addBooking.bind(this)} className="newbooking-form">
            <div className="form-group">
                <div className="form-group row">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fas fa-user"></i></div>
                        </div>
                        <input type="text"  onChange={this.usernameHandler.bind(this)} class={this.state.usernameCheck} id="name" placeholder="Name"/>
                        <small class="invalid-feedback text-left"> 
                            Please Enter Valid Username
                        </small>
                    </div>
                </div>
                <div className="form-group row">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fas fa-mobile-alt"></i></div>
                        </div>
                        <input type="number"  onChange={this.phonenumberHandler.bind(this)} class={this.state.phonenumberCheck} id="phonenumber" placeholder="Phonenumber"/>
                        <small class="invalid-feedback text-left"> 
                            Please Enter Valid phonenumber
                        </small>
                    </div>
                </div>  
                <div className="form-group row">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fas fa-user"></i></div>
                        </div>
                        <input type="text"  onChange={this.fromlocationHandler.bind(this)} class={this.state.fromlocationCheck}  id="inputFromLocation" placeholder="Pickup Location"/>
                        <small class="invalid-feedback text-left"> 
                            Please Enter Valid Location of Min length 10
                        </small>
                    </div>
                </div>
                <div className="form-group row">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fas fa-user"></i></div>
                        </div>
                        <input type="text"  onChange={this.tolocationHandler.bind(this)} class={this.state.tolocationCheck}  id="inputToLocation" placeholder="Drop Location"/>
                        <small class="invalid-feedback text-left"> 
                            Please Enter Valid Location of Min length 10
                        </small>
                    </div>
                </div>
                <input type="submit" className="btn btn-info mb-4" value="Book now"/>
            </div>
            </form>
        </div>
        </div>
        <img src={kovai} width="100%" className="love-kovai"></img>
      
        <footer>
            <p>&copy; 2021 done by Chandru</p>
        </footer>
   </div>
        )
    }
}