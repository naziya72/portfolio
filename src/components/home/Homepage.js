import React, { useEffect, useState } from 'react';
import Header from '../Header';
import './home.css'; // Import the CSS file for styling
const Homepage = () => {
    const [isFrontEnd, setIsFrontEnd] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsFrontEnd((prev) => !prev);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
      <Header />
      <div className="content">
        <div className="intro">
          <h1 className="intro-heading">
            Hello <span role="img" aria-label="waving-hand" className="emoji">👋</span>

            <br/> I'm Naziya Patel
          </h1>
          <div className="typewriter">
            {isFrontEnd ? (
              <>
                <h2>Front End Developer</h2>
                <h2 className="hidden">Back End Developer</h2>
              </>
            ) : (
              <>
                <h2 className="hidden">Front End Developer</h2>
                <h2>Back End Developer</h2>
              </>
            )}
          </div>
        </div>
        <div className="gif-container">
          <img src="https://media.tenor.com/S59bPkT0pqcAAAAC/programming.gif" alt="Developer Animation" />
        </div>
      </div>
      {/* <About/> */}
    </div>
  );
};

export default Homepage;
