import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import React, { useState, useEffect } from "react";

import AddpackageAdmin from './Components/Admin/AddpackageAdmin';
import Homepage from './Components/Homepage';
import HomepageAdmin from './Components/Admin/HomepageAdmin';
import UpdatepackageAdmin from './Components/Admin/UpdatepackageAdmin';
import LoginPage from './Components/Login_signup/Loginpage';
import Signuppage from './Components/Login_signup/Signuppage';
import UserHomePage from './Components/UserPages/ErrorPage';
import LocalTourPage from './Components/UserPages/LocalTourPage';
import TourPackage from './Components/UserPages/TourPackage';
import ConfirmBooking from './Components/UserPages/ConfirmBooking';
import Thanks from './Components/UserPages/Thanks';
import TourConfirmBooking from './Components/UserPages/tourconfirmbooking';
import BookingList from './Components/UserPages/BookingList';
import AllsignedUsers from './Components/Admin/AllsignedUsers';
import UserHeader from './Components/All_Components/UserHeader';
import Header from './Components/All_Components/Header';
import AuthService from './Components/services/auth'
import AdminHeader from "./Components/All_Components/AdminHeader";
import Tourbookinglist from "./Components/UserPages/Tourbookinglist";
import AllLocalBooked from "./Components/Admin/AllLocalBooked";
import AllTourBooked from "./Components/Admin/AllTourBooked";

function App() {
  const [role, setRole] = useState(false);

  useEffect(() => {
    setRole(AuthService.findrole)
    console.log(role);
  }, [])

  if(role === "user"){
      var navBar = <UserHeader/>
  }else if (role === "admin"){
    var navBar = <AdminHeader/>
  }else{
    var navBar = <Header/>
  }

  return (
    <Router>
        {navBar}
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/mainhomepage" component={HomepageAdmin}></Route>
        <Route path="/updatepackage" component={UpdatepackageAdmin}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/notloggedinErrorpage" component={UserHomePage}></Route>
        <Route path="/signup" component={Signuppage}></Route>
        <Route path="/adminhomepage" component={HomepageAdmin}></Route>
        <Route path="/addpackagedetail" component={AddpackageAdmin}></Route>
        <Route path="/localnewbooking" component={LocalTourPage}></Route>
        <Route path="/tourpackagelist" component={TourPackage}></Route>
        <Route path="/confirmbooking" component={ConfirmBooking}></Route>
        <Route path="/tourconfirmbooking" component={TourConfirmBooking}></Route>
        <Route path="/updatepackagedetail/:packagenameid" component={UpdatepackageAdmin}></Route>
        <Route path="/thankyou" component={Thanks}></Route>
        <Route path="/userlocalbookinglist" component={BookingList}></Route>
        <Route path="/usertourbookinglist" component={Tourbookinglist}></Route> 
        <Route path="/allsignedupusers" component={AllsignedUsers}></Route>
        <Route path="/adminAllLocalBookingList" component={AllLocalBooked}></Route>
        <Route path="/adminAllTourbookinglist" component={AllTourBooked}></Route>

        
      </Switch>
    </Router>
  );
}

export default App;