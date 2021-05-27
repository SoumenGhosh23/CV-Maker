import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import Feedback from './Feedback';
import Home from './Home';
import logo from './image/logo.png';
import Writecv from './Writecv';

const Navbar = () => {
    return (
        <>


            <div className='navbar'>

                <div className="logo">
                    <img src={logo} alt="logo" style={{ height: 50 }} />
                </div>
                <span className="company_name">CV Maker</span>


                <span className="nav_link"> <NavLink exact activeClassName="active_class" style={{ textDecoration: "none", color: "white" }} to="/">Home</NavLink></span>
                <span className="nav_link"> <NavLink exact activeClassName="active_class" style={{ textDecoration: "none", color: "white" }} to="/writecv">Write cv</NavLink></span>
                <span className="nav_link"> <NavLink exact activeClassName="active_class" style={{ textDecoration: "none", color: "white" }} to="/contact">Contact Us</NavLink></span>
                <span className="nav_link"> <NavLink exact activeClassName="active_class" style={{ textDecoration: "none", color: "white" }} to="/feedback">Feedback</NavLink></span>




            </div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/feedback" component={Feedback}></Route>
                <Route exact path="/writecv" component={Writecv}></Route>

                <Redirect to="/" />
            </Switch>



        </>
    )
}
export default Navbar;