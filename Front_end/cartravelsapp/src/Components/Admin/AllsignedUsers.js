import React, { Component } from 'react'
import authHeader from '../services/auth-header'

export default class AllsignedUsers extends Component {
    constructor(){
        super();
        this.searchinput = React.createRef();
        this.state = {SignedUsers: [],searchList:[], displayAll:true}
    }
    componentDidMount(){
        fetch('http://localhost:8010/api/v1/signedupuserdetails',{
            headers: authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({SignedUsers: data})
            console.log("SignedUsers",this.state.SignedUsers)
        });
    }

    search(e){
        e.preventDefault();
        this.setState({displayAll:false})
        fetch('http://localhost:8010/api/v1/signedupuserdetails/'+ this.searchinput.current.value,{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({searchList : data})
            console.log("user",this.state.searchList)
        });   
    }

    allbooking(e){
        e.preventDefault();
        this.searchinput.current.value="";
        this.setState({displayAll:true});
    }

    render() {
        if(this.state.displayAll){
            var display = this.state.SignedUsers
        }else{
            var display = [this.state.searchList]
        }

        console.log("length => ",display.length)

        if(!display.length){
            var FetchedData = "No Data Available !"
        }else{
            var FetchedData = display.map((SignedUser, i)=>{
            return (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{SignedUser._id}</td>
                        <td>{SignedUser.username}</td>
                        <td>{SignedUser.emailid}</td>
                        <td>{SignedUser.phonenumber}</td>
                    </tr>
                 );
            })
        }

    return (
        <div className="MainDiv">
             <div className="bookinglist">
                <form class="form-inline">
                <h2>Signed Users</h2>
                <div class="form-group ml-auto">
                    <input type="email"  ref = {this.searchinput} className="form-control m-2 " id="inputsearch" placeholder="Search By Email Id"/>
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
                    <th scope="col">Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Phone Number</th>
                    {/* <th scope="col">Delete User</th> */}
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
    <button type="button" onClick={this.deleteSignedUser.bind(this, SignedUser.emailid)} className="btn btn-danger m-1"> Delete </button> 
    <button type="button" className="btn btn-warning m-1"> <Link to={'updateCarBookedData/' + SignedUser.name}>Update</Link> </button>
    </td> */}

    // deleteSignedUser(name){
    //     fetch('http://localhost:8010/api/v1/signedupuserdetails/' + this.state.SignedUsers.emailid, {method: 'DELETE' })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         this.setState({message: 'Record successfully deleted'})
    //         fetch('http://localhost:8010/api/v1/signedupuserdetails')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             this.setState({SignedUsers: data})
    //         });
    //     });
    // }
