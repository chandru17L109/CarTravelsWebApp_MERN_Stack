import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import authHeader from '../services/auth-header'
import Carimg1 from '../Assets/car-4-seater1.jpg'
import Carimg2 from '../Assets/car-6-seater.jpg'
import Carimg3 from '../Assets/toyato-6-1.png'
import Carimg4 from '../Assets/car-12-seater1.jpg'


export default class CarDetails extends Component {
        constructor(){
            super();
            this.searchinput = React.createRef();
            this.state = {Car_km_Details: [], searchList:[], displayAll:true}
        }
    
        componentDidMount(){
            fetch('http://localhost:8010/api/v1/CarkilometerDetails',{
                headers:authHeader()
            })
            .then(res=>res.json())
            .then(data=>{
                this.setState({Car_km_Details : data})
            });
        }
    
        // search(e){
        //     e.preventDefault();
        //     this.setState({displayAll:false})
        //     fetch('http://localhost:8010/api/v1/CarkilometerDetails/'+ this.searchinput.current.value,{
        //         headers:authHeader()
        //     })
        //     .then(res=>res.json())
        //     .then(data=>{
        //         this.setState({searchList : data})
        //     });   
        // }
     
        // allbooking(e){
        //     e.preventDefault();
        //     this.searchinput.current.value="";
        //     this.setState({displayAll:true});
        // }
    
        render() {
            // if(this.state.displayAll){
            //     var display = this.state.Car_km_Details
            // }else{
            //     var display = this.state.searchList
            // }
    
            // console.log("length => ",display.length)
            // if(!display.length){
            //     var FetchedData = "No Data Available !"
            // }else{
                var FetchedData = this.state.Car_km_Details.map((Car_km_Detail, i)=>{
                    return (
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{Car_km_Detail.vechicle}</td>
                                <td>{Car_km_Detail.minkm}</td>
                                <td>{Car_km_Detail.rateperkm}</td>
                                <td>{Car_km_Detail.driverallowance}</td>
                                <td>{Car_km_Detail.amount}</td>
                                </tr>
                    );
                })
            // }
    
        return (
            <div className="MainDiv main_carkmdetail ">
            
               {/* <div className="bookinglist">
                    <form class="form-inline">
                    <h2>Local Package Booking List</h2>
                    <div class="form-group ml-auto">
                        <input type="text"  ref = {this.searchinput} className="form-control m-2 " id="inputsearch" placeholder="Search By User Id"/>
                    </div>
                    <button type="submit" className="btn btn-warning m-2" onClick={this.search.bind(this)}>Search</button>
                    <button type="submit" className="btn btn-secondary m-2" onClick={this.allbooking.bind(this)}>All Bookings</button>
                    </form>
                </div> */}
        <p className="carkm_ptag">Rate/KM is applied when Minimum KM limit exceeds !</p>

          <div className="carkmdetail">
            <Table responsive className="table table-striped ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Vechicle</th>
                        <th scope="col">Minimun KM</th>
                        <th scope="col">Rate/KM</th>
                        <th scope="col">Driver Allowance</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>  {FetchedData}  </tbody>
             </Table>
          </div>

        <p className="carkm_ptag">Tollgate, Parking and Other Expenses will be Extra !</p>
        
        <footer>
            <p>&copy; 2021 done by Chandru</p>
        </footer>

        </div>
        )
       }
    }
    
    
    {/* <td><button type="button" onClick={this.deleteCar_km_Detail.bind(this, Car_km_Detail._id)} className="btn btn-danger m-1"> Delete </button> */}
    {/* <button type="button" className="btn btn-warning m-1"> <Link to={'updateCarBookedData/' + Car_km_Detail.name}>Update</Link> </button> */}
    {/* </td> */}
    // deleteCar_km_Detail(id){
    //     fetch('http://localhost:8010/api/v1/carbookedusers/' + id, {
    //     headers:authHeader(),    
    //     method: 'DELETE' 
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         this.setState({message: 'Record successfully deleted'})
    //             fetch('http://localhost:8010/api/v1/carbookedusers/',{
    //                 headers:authHeader()
    //             })
    //             .then(res=>res.json())
    //             .then(data=>{
    //                 this.setState({Car_km_Details : data})
    //             });
    //     });
    // }

      {/* <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <img src={Carimg1}></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <img src={Carimg2} ></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <img src={Carimg3} ></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <img src={Carimg4} ></img>
            </div>
        </div> */}
    