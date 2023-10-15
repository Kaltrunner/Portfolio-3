import "./about.css";
import React, { useEffect } from "react";
import CompNav from "../CompNav/CompNav";
import Mouse from "../Mouse";
import gsap from "gsap";

function About() {
  useEffect(() => {
    const hero = document.querySelector(".about-body-container");
    const heroTitles = hero.querySelectorAll(".about-row-text > h1");
    const heroSeparator = hero.querySelectorAll(".about-row-separator");
    const loremLines = hero.querySelectorAll(".lorem-line");

    const initHero = () => {
      gsap.set(heroTitles, { y: "101%" });
      gsap.set(heroSeparator, { width: 0 });
      gsap.set(loremLines, { y: "101%" });
    };

    const showHero = () => {
      gsap
        .timeline({ defaults: { ease: "expo-out" } })
        .fromTo(
          heroTitles,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            y: 0,
            stagger: 0.055,
          },
          0
        )
        .fromTo(
          loremLines,
          {
            opacity: 0,
          },
          {
            duration: 1.25,
            opacity: 1,
            y: 0,
            stagger: 0.13,
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
  }, []);

  return (
    <>
      <Mouse />
      <CompNav />
      <div className="about-body-container">
        <div className="about-body-div">
          <div className="about-row">
            <div className="about-row-text">
              <h1>Hello</h1>
              <div className="about-link-section">
                <a
                  href="https://github.com/Kaltrunner"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p
                    className="nav-text pseudo-text-effect about-link"
                    data-after="GitHub"
                    id="nav-under-line"
                  >
                    <span>GitHub</span>
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/erik-russell-software-engineer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p
                    className="nav-text pseudo-text-effect about-link"
                    data-after="LinkedIn"
                    id="nav-under-line"
                  >
                    <span>LinkedIn</span>
                  </p>
                </a>
                <a
                  href="Erik Russell - Resume.pdf"
                  download="Erik Russell - Resume"
                  rel="noreferrer"
                >
                  <p
                    className="nav-text pseudo-text-effect about-link"
                    data-after="Resume"
                    id="nav-under-line"
                  >
                    <span>Resume</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="about-row-separator"></div>
          </div>
          <div className="about-lorem-div">
            <p className="lorem-line">
              I'm a Flatiron School graduate and front-end{" "}
            </p>
            <p className="lorem-line">
              engineer with a background in screen printing. My
            </p>{" "}
            <p className="lorem-line">
              passion lies in merging design and technology to
            </p>{" "}
            <p className="lorem-line">
              create user-friendly interfaces that prioritize
            </p>
            <p className="lorem-line">
              usability. I draw from best practices to ensure
            </p>
            <p className="lorem-line">
              efficient and enjoyable navigation experiences. My
            </p>
            <p className="lorem-line">
              goal is to bridge the gap between art and
            </p>
            <p className="lorem-line">
              technology, crafting visually appealing and
            </p>
            <p className="lorem-line">functional solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
