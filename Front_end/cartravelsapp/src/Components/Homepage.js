import React, { Component } from 'react'
import './App.css'
import {Card,Row} from 'react-bootstrap' 
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import car1 from './Assets/car1.png';


export default class Homepage extends Component {
    constructor(){
        super();
        this.state = {GalleryDatas: []}
    }
    componentDidMount(){
        fetch('http://localhost:8010/api/v1/adminHomePage')
        .then(res=>res.json())
        .then(data=>{
            this.setState({GalleryDatas: data.data})
        });
    }

    render() {
        console.log(this.state.GalleryDatas)
        let GalleryList = this.state.GalleryDatas.map((Gallerydata, i)=>{
            if(i<3){
                return (
                 <Card className="Card_Gallery m-3 border-0" key={i}>
                    <Card.Img variant="top" src={Gallerydata.packageimage} width="340px" height="200px"/>
                    <Card.Body className="text-center">
                        <Card.Title>{Gallerydata.packagename}</Card.Title>
                        <Card.Text >
                            <p className="card-text">{Gallerydata.packagedetails}</p>
                            <p className="card-text"> Car Type : {Gallerydata.carType}</p>
                            <p className="card-text"> No. of Days : <b>{Gallerydata.noofdays}</b> day package</p>
                            <p className="card-text"><b>Price @ ₹{Gallerydata.packageprice}</b></p>
                       </Card.Text>
                        {/* <Button variant="success"><Link to={'/loginpage'} className="linkcolor">Book now</Link></Button> */}
                    </Card.Body>
                 </Card>
               );
            }
        })
        return (
            <div className="MainDiv">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block carouselImg"src="https://cdn1.tripoto.com/media/filter/tst/img/747480/Image/1585825644_ooty.jpg" alt="Ooty"/>
                        <Carousel.Caption><h3>Ooty</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block carouselImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/1200px-Mysore_Palace_Morning.jpg" alt="Mysore palace"/>
                        <Carousel.Caption><h3>Mysore</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block carouselImg" src="https://images.outlookindia.com/public/uploads/articles/2020/8/18/Meenakshi_Amman_Temple,_Madurai.jpg" alt="Madhurai temple"/>
                        <Carousel.Caption><h3>Madurai</h3></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            <Row className="homepage-second-main">
                    <div className="homepage-main-content-div">
                        <img className="homepage-car-main-img" src={car1} alt="car"></img> 
                     </div>   
                     <div className="homepage-car-img-div">
                        <span className="home-main-heading"> LOG IN <br></br> SELECT PACKAGE <br></br> TRAVEL</span>
                    </div>
            </Row>
                <div className="package">
                  <div className = "pack">
                      <Link to={'/tourpackagelist'} >
                        <div className="tour-package-div">
                          <span className="tour-span">Tour<br></br> Package</span>
                        </div>
                      </Link>
                      <Link to={'/localnewbooking'} >
                      <div className="local-package-div">
                         <span className="tour-span">Local <br></br>Package</span>
                      </div>
                      </Link>
                    </div>
                </div>
                <Container className="card_main_div">
                    <p className="tourpackage">Popular Packages</p>
                    <Row> 
                         {GalleryList}
                    </Row>   
                </Container> 
                <p className="Gallery">Gallery</p>
                <Carousel>
                    <Carousel.Item>
                        <div className="Gallery-slider">
                           <img src="http://www.transindiatravels.com/wp-content/uploads/mysore-zoo-mysore.jpg" alt="gallry pic"  />
                           <img src="https://hippie-inheels.com/wp-content/uploads/2015/04/things-to-do-in-mysore.jpg" alt="gallry pic"/>
                           <img src="https://cdn1.goibibo.com/voy_ing/t_fs/mysore-brindavan-gardens-149598201814o.jpeg" alt="gallry pic"/>
                           <img src="https://4.imimg.com/data4/CC/CC/GLADMIN-/images-mysore-16001718986_a7538d38fe_b-500x500.jpg" alt="gallry pic" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                       <div className="Gallery-slider">
                           <img src="https://www.makemytrip.com/travel-guide/media/dg_image/ooty/Government-Museum-PP-Yoonus-wikimedia-commons.jpg" alt="gallry pic" />
                           <img src="https://cdn1.tripoto.com/media/filter/tst/img/747480/Image/1585825644_ooty.jpg" alt="gallry pic"/>
                           <img src="https://lp-cms-production.imgix.net/2020-11/Keukenhof%20tulips.jpg" alt="gallry pic"/>
                           <img src="https://static.toiimg.com/thumb/msid-71134080,imgsize-349304,width-400,resizemode-4/71134080.jpg" alt="gallry pic" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                       <div className="Gallery-slider">
                           <img src="https://www.cgpsc.info/wp-content/uploads/2021/02/famous-places-to-visit-in-munnar.jpeg" alt="gallry pic" />
                           <img src="https://i.ytimg.com/vi/Of6FWToCby0/maxresdefault.jpg" alt="gallry pic"/>
                           <img src="https://www.makemytrip.com/travel-guide/media/dg_image/munnar/Mattupetty-Dam_Munnar_0.jpg" alt="gallry pic"/>
                           <img src="https://i.pinimg.com/736x/84/54/d7/8454d78fd34ba82cefeefe50857d3298.jpg" alt="gallry pic" />
                        </div>
                    </Carousel.Item>
                </Carousel>
                <footer>
                    <p>&copy; 2021 done by Chandru</p>
                </footer>

            </div>
        )
    }
}

    {/* <Row>
                    <div className="col col-sm-12 col-md-8 col-xs-6">
                        <img src={car1} alt="car"></img> 
                     </div>   
                     <div className="col col-sm-12  col-md-4 col-xs-6">
                        <span> LOG IN <br></br> SELECT PACKAGE <br></br> TRAVEL</span>
                    </div>
            </Row> */}
              