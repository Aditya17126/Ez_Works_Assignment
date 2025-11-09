import React from "react";
import "./Css/home.css";
import NavBar from "./Navbar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="image1">
          <img src="/Images/image4.png" alt="image" />
          <img className="films" src="/Images/image3.png" alt="logotext" />
        </div>

        <div className="text-content">
          <div>
            <h1>Varnan is where stories find their voice and form</h1>
          </div>
          <div>
            <h2>Films . Brands . Art</h2>
          </div>
          <div>
            <p>
              Since 2009, V’ve been telling stories - stories of people, their
              journeys, and the places that shape them. Some begin in polished
              boardrooms, others in humble village squares. But every story
              starts the same way - by listening with intention. V believes it
              takes trust, patience, and an eye for the unseen to capture what
              truly matters. V doesn’t just tell stories - V honors them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
