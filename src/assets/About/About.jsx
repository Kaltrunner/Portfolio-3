import "./about.css";
import React, { useEffect } from "react";
import CompNav from "../CompNav/CompNav";
import Mouse from "../Mouse";
import gsap from "gsap";

function About() {
  useEffect(() => {
    const hero = document.querySelector(".about-body-container");
    const heroTitles = hero.querySelectorAll(".about-row-text > h1");
    const subHeroTitles = hero.querySelectorAll(".about-lorem-div > p");
    const heroSeparator = hero.querySelectorAll(".about-row-separator");

    const initHero = () => {
      gsap.set(heroTitles, { y: "101%" });
      gsap.set(subHeroTitles, { y: "60%" });
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
          subHeroTitles, // Select the subHeroTitles
          {
            opacity: 0, // Start from 0 opacity
          },
          {
            duration: 1,
            opacity: 1, // Animate opacity to 1 for full visibility
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

  window.onload = () => {
    initHero();
  };

  return (
    <>
      <Mouse />
      <CompNav />
      <div className="about-body-container">
        <div className="about-body-div">
          <div className="about-row">
            <div className="about-row-text">
              <h1>Hello</h1>
              <p className="nav-text" id="nav-under-line">
                <a
                  className="pseudo-text-effect"
                  href="https://github.com/Kaltrunner"
                  target="_blank"
                  rel="noreferrer"
                  data-after="GitHub"
                >
                  <span>GitHub</span>
                </a>
              </p>
              <p className="nav-text" id="nav-under-line">
                <a
                  className="pseudo-text-effect"
                  href="https://www.linkedin.com/in/erik-russell-software-engineer/"
                  target="_blank"
                  rel="noreferrer"
                  data-after="LinkedIn"
                >
                  <span>LinkedIn</span>
                </a>
              </p>
              <p className="nav-text" id="nav-under-line">
                <a
                  className="pseudo-text-effect"
                  href="Erik Russell - Resume.pdf"
                  download="Erik Russell - Resume"
                  rel="noreferrer"
                  data-after="Resume"
                >
                  <span>Resume</span>
                </a>
              </p>
            </div>
            <div className="about-row-separator"></div>
          </div>
          <div className="about-lorem-div">
            <p className="lorem">
              I'm a Flatiron School graduate and front-end engineer with a
              background in screen printing. My passion lies in merging design
              and technology to create user-friendly interfaces that prioritize
              usability. I draw from best practices to ensure efficient and
              enjoyable navigation experiences. My goal is to bridge the gap
              between art and technology, crafting visually appealing and
              functional solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
