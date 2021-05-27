import React from 'react';
import img1 from './image/img1.jpg';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home_container">Welcome to <strong>CV Maker</strong>
                    <br />
               Your CV means our Responsibility.
               <br />

                    <NavLink to="/writecv" >
                        <button className="get_started">Get Started</button>
                    </NavLink>

                </div>

                <div className="image">
                    <img src={img1} alt="image" />
                </div>
            </div>
        </>
    )
}
export default Home;