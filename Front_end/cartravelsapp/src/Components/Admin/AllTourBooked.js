import React, { Component } from 'react'
import authHeader from '../services/auth-header'

export default class AllTourBooked extends Component {
    constructor(){
        super();
        this.searchinput = React.createRef();
        this.state = {tourpreviousBookingList: [],searchList:[], displayAll:true}
    }

    componentDidMount(){
        fetch('http://localhost:8010/api/v1/cartourbookedusers',{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({tourpreviousBookingList: data})
            console.log(this.state.tourpreviousBookingList)
        });
    }

    search(e){
        e.preventDefault();
        this.setState({displayAll:false})
        fetch('http://localhost:8010/api/v1/cartourbookedusers/'+ this.searchinput.current.value,{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({searchList : data})
        });   
    }

    allbooking(e){
        e.preventDefault();
        this.searchinput.current.value="";
        this.setState({displayAll:true});
    }

    render() {
        if(this.state.displayAll){
            var display = this.state.tourpreviousBookingList
        }else{
            var display = this.state.searchList
        }

        console.log("length => ",display.length)

        if(!display.length){
            var FetchedData = "No Data Available !"
        }else{
            var FetchedData = display.map((previousBooking, i)=>{
                return (
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{previousBooking.user}</td>
                            <td>{previousBooking.packagename}</td>
                            <td>{previousBooking.carType}</td>
                            <td>{previousBooking.noofdays}</td>
                            <td>{previousBooking.packageprice}</td>
                            <td>{previousBooking.packageDate}</td>
                        </tr>
                );
            })
        }
      

    return (
        <div className="MainDiv">
             <div className="bookinglist">
                <form class="form-inline">
                <h2>Tour Package Booking List</h2>
                <div class="form-group ml-auto">
                    <input type="text"  ref = {this.searchinput} className="form-control m-2 " id="inputsearch" placeholder="Search By User Id"/>
                </div>
                <button type="submit" className="btn btn-warning m-2" onClick={this.search.bind(this)}>Search</button>
                <button type="submit" className="btn btn-secondary m-2" onClick={this.allbooking.bind(this)}>All Bookings</button>
                </form>
            </div>

        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Package Name</th>
                    <th scope="col">Car Type</th>
                    <th scope="col">Days</th>
                    <th scope="col">Price</th>
                    <th scope="col">Booked Date</th>
                </tr>
            </thead>
            <tbody>
                {FetchedData}
            </tbody>
        </table>
        </div>
    )
    }
}



{/* <td>
<button type="button" onClick={this.deletepreviousBooking.bind(this, previousBooking.packagename)} className="btn btn-danger m-1"> Delete </button>
<button type="button" className="btn btn-warning m-1"> <Link to={'updateCarBookedData/' + previousBooking.name}>Update</Link> </button>
</td> */}

// deletepreviousBooking(packagename){
//     fetch('http://localhost:8010/api/v1/cartourbookedusers/' + packagename, {
//         headers:authHeader(),
//         method: 'DELETE'
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         this.setState({message: 'Record successfully deleted'})
//         fetch('http://localhost:8010/api/v1/cartourbookedusers',{
//             headers:authHeader()
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             this.setState({tourpreviousBookingList: data})
//         });
//     });
// }