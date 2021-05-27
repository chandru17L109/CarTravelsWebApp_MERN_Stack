import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import tourcar2 from '../Assets/tour-car2.png';
import authHeader from '../services/auth-header';
import AuthService from '../services/auth'

export default class TourPackage extends Component {
    constructor(){
        super();
        this.state = {GalleryDatas: [], currentrole : ""}
    }
    componentDidMount(){
        fetch('http://localhost:8010/api/v1/adminHomePage',{
            headers:authHeader()
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({GalleryDatas: data})
        });
    }

    addTourBookingDB(Gallerydata){
        var userid  =  AuthService.finduserid();
        fetch('http://localhost:8010/api/v1/cartourbookedusers', {
                method: 'POST',
                headers: authHeader(),
                body: JSON.stringify({packagename: Gallerydata.packagename, packageprice : Gallerydata.packageprice, carType : Gallerydata.carType, noofdays : Gallerydata.noofdays, user : userid}),
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
            this.addTourBookingDB(Gallerydata)
        }else if(AuthService.findrole() === "admin"){
            alert("Admin can't Book tours")
        }else{
            alert("Please Login to Book ! 😊")
            this.props.history.push("/login")
        }
    }

    render() {
        let GalleryList = this.state.GalleryDatas.map((Gallerydata, i)=>{
            return (
                <Card className="Card_Gallery m-3 border-0" key={i}>
                <Card.Img variant="top" src={Gallerydata.packageimage} width="340px" height="200px"/>
                <Card.Body className="text-center">
                    <Card.Title className="text-success"><b>{Gallerydata.packagename}</b></Card.Title>
                    <Card.Text >
                        <p className="card-text text-primary">{Gallerydata.packagedetails}</p>
                        <p className="card-text text-info"> Car Type : {Gallerydata.carType}</p>
                        <p className="card-text text-secondary"> No. of Days : <b>{Gallerydata.noofdays}</b> day package</p>
                        <p className="card-text"><b>Price @ ₹{Gallerydata.packageprice}</b></p>
                   </Card.Text>
                   <Button variant="success" onClick={this.booknow.bind(this,Gallerydata)}>Book now</Button>
                    {/* <Button variant="success"><Link to={'/loginpage'} className="linkcolor">Book now</Link></Button> */}
                </Card.Body>
             </Card>
            );
        })

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

            <Container>
                <p className="tourpackage">Tour Packages</p>
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
