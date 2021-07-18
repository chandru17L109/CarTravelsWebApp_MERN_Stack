import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import authHeader from '../services/auth-header';

export default class AddCarKmdetail extends Component {
    constructor(){
        super();
        this.vechicleid  = React.createRef();
        this.vechicle    = React.createRef();
        this.minkm = React.createRef();
        this.rateperkm   = React.createRef();
        this.driverallowance   = React.createRef();
        this.amount        = React.createRef();
        this.state = {CarKmDatas: [],message: "" }
    }

    AddCarKmDetail(event){
        event.preventDefault();
        if(this.vechicleid.current.value ==="" || this.vechicle.current.value === "" || this.minkm.current.value === "" || this.rateperkm.current.value === "" || this.driverallowance.current.value === "" ||  this.amount.current.value === ""){
            this.setState({message: 'Enter all the fields'})
        }else{
            fetch('http://localhost:8010/api/v1/CarkilometerDetails', {
                method: 'POST',
                headers: authHeader(),
                body: JSON.stringify({vechicleid: this.vechicleid.current.value, vechicle: this.vechicle.current.value, minkm: this.minkm.current.value, rateperkm : this.rateperkm.current.value, driverallowance : this.driverallowance.current.value, amount:this.amount.current.value}),
            })
            .then(res=>{
                console.log(res.status);
                if(res.status === 201){
                    this.setState({message: 'Successfully Added ✔ 😍'})
                    event.target.reset();
                }
            })
        } 
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
               <Container className="mt-3 p-3">
                {message}
                <form onSubmit={this.AddCarKmDetail.bind(this)}>
                    <div className="form-group">
                        <div className="form-group row">
                            <label for="inputvechicleid" className="col-sm-2 col-form-label">Vehicle Id</label>
                            <div className="col-sm-10">
                                <input ref={this.vechicleid} type="text" class="form-control" id="inputvechicleid" placeholder="Unique Vechicle Id" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputvechicle" className="col-sm-2 col-form-label">Vehicle Name</label>
                            <div className="col-sm-10">
                                <input ref={this.vechicle} type="text" class="form-control" id="inputvechicle" placeholder="Enter Vechicle" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputminkm" className="col-sm-2 col-form-label">Minimum kilometers</label>
                            <div className="col-sm-10">
                                <input ref={this.minkm} type="number" class="form-control" id="inputminkm" placeholder="Enter Minimum Kms" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputrateperkm" className="col-sm-2 col-form-label">Rate/Km</label>
                            <div className="col-sm-10">
                                <input ref={this.rateperkm} type="number" class="form-control" id="inputrateperkm" placeholder="Enter Rate/Km" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputdriverallowance" className="col-sm-2 col-form-label">Driver Allowance</label>
                            <div className="col-sm-10">
                                <input ref={this.driverallowance} type="number" class="form-control" id="inputdriverallowance" placeholder="Enter Driver Allowance" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputamount" className="col-sm-2 col-form-label">Amount</label>
                            <div className="col-sm-10">
                                <input ref={this.amount} type="number" class="form-control" id="amount" placeholder="Enter Amount" required/>
                            </div>
                        </div>
                        <input type="submit" value="Add New Detail 🚗" className="btn btn-primary m-2" disabled/>
                    </div>
                </form>
                </Container>
            </div>
        )
    }
}

