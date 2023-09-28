// import React, { useEffect, useState } from 'react';
import SplashNav from "../SplashNav/SplashNav";
import Mouse from "../Mouse";
import "./splash.css";

function Splash() {
  return (
    <>
      <Mouse />
      <SplashNav />
      <div className="hero">
        <div className="hero-wrapper">
          <div className="hero-row">
            <div className="hero-row-text">
              <h1>Erik Russell</h1>
              <h1 id="est">Est.2022</h1>
            </div>
            <div className="hero-row-separator"></div>
          </div>
          <div className="hero-row">
            <div className="hero-row-text">
              <h1>Front-End</h1>
              <h1></h1>
            </div>
            <div className="hero-row-separator"></div>
          </div>
          <div className="hero-row">
            <div className="hero-row-text">
              <h1>Software Engineer</h1>
              <p className="coordinates">• N 40.7305°, W 73.9515°</p>
            </div>
            <div className="hero-row-separator"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
