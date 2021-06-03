import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import tourcar2 from '../Assets/tour-car2.png';
import authHeader from '../services/auth-header';
import AuthService from '../services/auth'

export default class TourPackage extends Component {
    constructor(){
        super();
        this.sortbydata = React.createRef();
        this.state = {GalleryDatas: [{},{}], currentrole : "",searchList:[], displayAll:true}
    }
    componentDidMount(){
        fetch('http://localhost:8010/api/v1/adminHomePage',{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({GalleryDatas: data.data})
        });
    }
        addTourBookingDB(Gallerydata){
                var userid  =  AuthService.finduserid();
                var usernameid = AuthService.findusername();
                fetch('http://localhost:8010/api/v1/cartourbookedusers', {
                        method: 'POST',
                        headers: authHeader(),
                        body: JSON.stringify({packagename: Gallerydata.packagename, packageprice : Gallerydata.packageprice, carType : Gallerydata.carType, noofdays : Gallerydata.noofdays, user : userid, usernameid : usernameid}),
                    })
                    .then(res=>{
                        console.log(res.status);
                        if(res.status === 201){
                            this.props.history.push("/tourconfirmbooking");
                        }
                    })  
       }

    booknow(Gallerydata){
        if(AuthService.findrole() === "user"){
            console.log("gallerydate = > ",Gallerydata)
            this.addTourBookingDB(Gallerydata)
            // this.props.history.push("/tourbeforeconfirmpage/"+Gallerydata)
        }else if(AuthService.findrole() === "admin"){
            alert("Admin can't Book tours")
        }else{
            alert("Please Login to Book ! 😊")
            this.props.history.push("/login")
        }
    }

    sortfunction(e){
        e.preventDefault();
        this.setState({displayAll:false})
        fetch('http://localhost:8010/api/v1/adminHomePage/?sort='+ this.sortbydata.current.value,{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({searchList : data.data, displayAll:false})
            console.log("user",this.state.searchList)
        });   
    }

    render() {
        if(this.state.displayAll){
            var display = this.state.GalleryDatas
        }else{
            var display = this.state.searchList
        }
        console.log("length => ",display.length)

        if(!display.length){
            var GalleryList = "No Data Available !"
        }else{
            var GalleryList = display.map((Gallerydata, i)=>{
            return (
                <Card className="Card_Gallery ml-3  border-0" key={i}>
                <Card.Img variant="top" src={Gallerydata.packageimage} width="340px" height="250px"/>
                <Card.Body className="text-center">
                    <Card.Title className="text-success"><b>{Gallerydata.packagename}</b></Card.Title>
                    <Card.Text >
                        <p className="card-text text-primary">{Gallerydata.packagedetails}</p>
                        <p className="card-text text-info"> Car Type : {Gallerydata.carType}</p>
                        <p className="card-text text-secondary"> No. of Days : <b>{Gallerydata.noofdays}</b> day package</p>
                        <p className="card-text"><b>Price @ ₹{Gallerydata.packageprice}</b></p>
                   </Card.Text>
                   <Button variant="success" className="mt-3"  onClick={this.booknow.bind(this,Gallerydata)}> Book now</Button> 
             </Card.Body>
             </Card>
            );
        })
    }

        return (
          <div className="MainDiv">
             <div className="row">
                <img class="d-block opacity-decide-1" width="100%" height="500px" src={tourcar2} alt="First slide"/>
                <div class="img-data">
                   <h1>Safe Journey &<br></br>Happy Journery</h1>
                   <p>Want to have a safe and happy Journey ?<br></br>Anot travels Welcomes you</p>
                   <button>
                         Select Tour Package
                         <i class="far fa-hand-point-down icon-tour"></i>
                    </button>
                 </div>
            </div>
            <Container className="card_main_div">
                    <form class="form-inline my-3">
                        <p className="tourpackage">Tour Packages</p>
                        <div class="form-group  form-inline ml-auto">
                            <select className="form-control" ref={this.sortbydata} id="sortbydata">
                                <option value=""> Display From </option>
                                <option value="packageprice"> Low to High Price</option>
                                <option value="-packageprice"> High to Low Price</option>
                            </select>
                            <button type="submit" className="btn btn-warning m-2" onClick={this.sortfunction.bind(this)}>Search</button>

                        </div>
                    </form>
            
                    <Row> 
                        {GalleryList}
                    </Row>   
            </Container> 
            <footer>
                <p>&copy; 2021 done by Chandru</p>
            </footer> 
          </div>
        )
    }
}


    // addTourBookingDB(Gallerydata){
    //     var userid  =  AuthService.finduserid();
    //     fetch('http://localhost:8010/api/v1/cartourbookedusers', {
    //             method: 'POST',
    //             headers: authHeader(),
    //             body: JSON.stringify({packagename: Gallerydata.packagename, packageprice : Gallerydata.packageprice, carType : Gallerydata.carType, noofdays : Gallerydata.noofdays, user : userid}),
    //         })
    //         .then(res=>{
    //             console.log(res.status);
    //             if(res.status === 201){
    //                 this.props.history.push("/tourconfirmbooking");
    //             }
    //         })  
    // }


{/* <Link to={'tourbeforeconfirmpage/' + Gallerydata._id}>
        <Button variant="success" className="mt-3"> Book now</Button>
</Link> */}
{/* <Button variant="success"><Link to={'/loginpage'} className="linkcolor">Book now</Link></Button> */}
        {/* <input type="text"  ref = {this.sortbydata} className="form-control m-2" id="inputsortdata" placeholder="Sort by price"/> */}
