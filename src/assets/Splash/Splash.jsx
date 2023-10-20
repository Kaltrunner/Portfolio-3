import React, { useEffect } from "react";
import SplashNav from "../SplashNav/SplashNav";
import Mouse from "../Mouse";
import gsap from "gsap";
import "./splash.css";

function Splash() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const heroTitles = hero.querySelectorAll(".hero-row-text > h1");
    const subHeroTitles = hero.querySelectorAll(".hero-row-text > p");
    const heroSeparator = hero.querySelectorAll(".hero-row-separator");

    const initHero = () => {
      gsap.set(heroTitles, { y: "101%" });
      gsap.set(subHeroTitles, { y: "201%" });
      gsap.set(heroSeparator, { width: 0 });
    };

    const showHero = () => {
      gsap
        .timeline({ defaults: { ease: "expo-out" } })
        .to(
          heroTitles,
          {
            duration: 1,
            y: 0,
            stagger: 0.055,
          },
          0
        )
        .fromTo(
          subHeroTitles,
          {
            opacity: 0,
          },
          {
            duration: 0.75,
            opacity: 1,
            y: 0,
            stagger: 0.055,
          },
          0
        )
        .to(
          heroSeparator,
          {
            duration: 1,
            width: "100%",
            stagger: 0.095,
          },
          0
        )
        .fromTo(
          ".cell",
          {
            height: "0",
            scale: 0.5,
          },
          {
            duration: 1,
            height: "100%",
            scale: 1,
            stagger: 0.025,
            ease: "expo.inOut",
          },
          0.5
        );
    };

    initHero();
    showHero();
  }, []); // Empty dependency array ensures this code runs only once after initial render

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
              <h1>Front–End</h1>
              <p className="coordinates">• N 40.7305°, W 73.9515°</p>
            </div>
            <div className="hero-row-separator"></div>
          </div>
          <div className="hero-row">
            <div className="hero-row-text">
              <h1>Developer</h1>
              <p className="coordinates">© 2023</p>
            </div>
            <div className="hero-row-separator"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
