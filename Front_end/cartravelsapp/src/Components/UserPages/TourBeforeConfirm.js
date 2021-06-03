import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import authHeader from '../services/auth-header';

export default class TourBeforeConfirm extends Component {
    constructor(){
        super();
        this.username       = React.createRef();
        this.phonenumber    = React.createRef();
        this.packagename    = React.createRef();
        this.packagedetails = React.createRef();
        this.packageprice   = React.createRef();
        // this.packageimage   = React.createRef();
        this.carType        = React.createRef();
        this.noofdays       = React.createRef();
        this.state = {currentCardData: [],message: "" }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(this.props);
        fetch('http://localhost:8010/api/v1/adminHomePage/'+params.packagenameid,{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.packagename.current.value = data.packagename;  
            this.packagedetails.current.value = data.packagedetails;
            this.packageprice.current.value = data.packageprice;
            // this.packageimage.current.value = data.packageimage;
            this.carType .current.value = data.carType ;  //---
            this.noofdays.current.value = data.noofdays; //---
            this.setState({currentCardData: data})
        })
    }

    senttoconfirmbookingpage(event){
        event.preventDefault();
        // var currentDetails = [this.username.current.value, this.phonenumber.current.value, this.packagename.current.value, this.packagedetails.current.value,this.packageprice.current.value, this.carType.current.value, this.noofdays.current.value]
        // console.log(currentDetails)
        // this.props.history.push("/tourconfirmbooking/"+ currentDetails)
        
        // if(this.packagename.current.value === "" || this.packagedetails.current.value === "" || this.packageprice.current.value === ""){
        //     this.setState({message: 'Enter all the fields'})
        // }else{
        //     fetch('http://localhost:8010/api/v1/adminHomePage/'+this.state.GalleryDatas.packagenameid, {
        //         method: 'PATCH',
        //         headers:authHeader(),
        //         body: JSON.stringify({username: this.username.current.value, phonenumber : this.phonenumber.current.value, packagename: this.packagename.current.value, packagedetails: this.packagedetails.current.value, packageprice : this.packageprice.current.value, carType:this.carType.current.value,noofdays:this.noofdays.current.value}),
        //     })
        //     .then(res=>{
        //         console.log(res.status);
        //         if(res.status === 200){
        //             this.setState({message: 'Successfully Updated ✔ 😍'})
        //         }
        //     })
        // } 
    }

    closemessage(){
        this.setState({message : ""})
    }

    render() {
        if(this.state.message){
             var message = (
                <div class="alert alert-success" role="alert">
                    {this.state.message}
                   <button type="button" className="closebutton float-right" onClick={this.closemessage.bind(this)}>x</button>
                </div>
        )}
        return (
        <div className="MainDiv">
               <Container className="p-3">
                {message}
                <form>
                    <div className="form-group">
                    <div className="form-group row">
                            <label for="inputusername" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input ref={this.username} type="text" class="form-control" id="inputusername" placeholder="Your Name" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputphonenumber" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                                <input ref={this.phonenumber} type="number" class="form-control" id="inputphonenumber" placeholder="Phonenumber" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputpackagename" className="col-sm-2 col-form-label">Package Name</label>
                            <div className="col-sm-10">
                                <input ref={this.packagename} type="text" class="form-control" id="inputpackagename" placeholder="Enter PackageName" disabled required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputpackagedetails" className="col-sm-2 col-form-label">Package Detail</label>
                            <div className="col-sm-10">
                                <input ref={this.packagedetails} type="text" class="form-control" id="inputpackagedetails" placeholder="Enter Package Detail" disabled required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputpackageprice" className="col-sm-2 col-form-label">Package Price</label>
                            <div className="col-sm-10">
                                <input ref={this.packageprice} type="number" class="form-control" id="inputpackageprice" placeholder="Enter Package Price" disabled required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputcarType" className="col-sm-2 col-form-label">Car Type</label>
                            <div className="col-sm-10">
                                <input ref={this.carType} type="text" class="form-control" id="carType" placeholder="Enter Car Type" disabled required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputnoofdays" className="col-sm-2 col-form-label">No. of Days </label>
                            <div className="col-sm-10">
                                <input ref={this.noofdays} type="text" class="form-control" id="inputnoofdays" placeholder="Enter Package Days" disabled  required/>
                            </div>
                        </div>
                        <button type="submit" onClick={this.senttoconfirmbookingpage.bind(this)} className="btn btn-success"> Book Now 🚗</button>
                    </div>
                </form>
                </Container>
            </div>
        )
    }
}
