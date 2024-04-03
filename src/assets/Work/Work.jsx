import React, { useEffect } from "react";
import "./work.css";
import CompNav from "../CompNav/CompNav";
import Mouse from "../Mouse";
import gsap from "gsap";

function Work() {
  useEffect(() => {
    const hero = document.querySelector(".work-body-container");
    const heroTitles = hero.querySelectorAll(".work-row-text > h1");
    const subHeroTitles = hero.querySelectorAll(".sub-work-row-text > p");
    const heroSeparator = hero.querySelectorAll(".work-row-separator");

    const initHero = () => {
      gsap.set(heroTitles, { y: "101%" });
      gsap.set(subHeroTitles, { y: "101%" });
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
            duration: 0.75,
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
  }, []);

  return (
    <>
      <Mouse />
      <CompNav />
      <div className="work-body-container">
        <div className="work-body-div">
          <div className="work-row">
            <div className="work-row-text">
              <h1>Select Work</h1>
            </div>
            <div className="work-row-separator"></div>
          </div>
          <div className="sub-work-row">
            <div className="sub-work-row-text" id="sub-work-row-text-header">
              <p>Projects</p>
              <p>Year</p>
            </div>
            <div className="hidden-rudy">
              <div className="sub-work-row-text" id="row-1">
                <p>.Rudy</p>
                <p>2023</p>
                <span className="hidden-span">
                  <a
                    className="hidden-span-link"
                    href="https://rudy.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="tilt-box-wrap">
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <div className="tilt-box">
                        <img
                          className="hidden-img"
                          src="Screenshot 2023-09-28 at 6.19.22 PM.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </span>
              </div>
            </div>
            <div className="hidden-muse">
              <div className="sub-work-row-text" id="row-1">
                <p>Nútímasafn</p>
                <p>2023</p>
                <span className="hidden-span">
                  <a
                    href="https://nutimasafn.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="tilt-box-wrap">
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <div className="tilt-box">
                        <img
                          className="hidden-img"
                          src="Screenshot 2023-09-28 at 6.15.14 PM.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </span>
              </div>
            </div>
            <div className="hidden-sid">
              <div className="sub-work-row-text" id="row-1">
                <p>Sid Design System</p>
                <p>2023</p>
                <span className="hidden-span">
                  <a
                    href="https://design-system-sid.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="tilt-box-wrap">
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <div className="tilt-box">
                        <img
                          className="hidden-img"
                          src="Design-sid-screenshot.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </span>
              </div>
            </div>
            <div className="hidden-kalt">
              <div className="sub-work-row-text" id="row-1">
                <p>KALTRUNNER</p>
                <p>2023</p>
                <span className="hidden-span">
                  <a
                    href="https://kaltrunner.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="tilt-box-wrap">
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <div className="tilt-box">
                        <img
                          className="hidden-img"
                          src="Screenshot 2023-09-28 at 4.57.18 PM.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </span>
              </div>
            </div>
            <div className="sub-work-row-text" id="sub-work-row-text-header">
              <p>Experimental</p>
            </div>
            <div className="hidden-green">
              <div className="sub-work-row-text" id="row-1">
                <p>Green Square</p>
                <p>2022</p>
                <span className="hidden-span">
                  <a
                    href="https://greensquare.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="tilt-box-wrap">
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <div className="tilt-box">
                        <img
                          className="hidden-img"
                          id="hidden-green"
                          src="Green-Square-img.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </span>
              </div>
            </div>
            <div className="hidden-new">
              <div className="sub-work-row-text" id="row-1">
                <p>New Matter</p>
                <p>2023</p>
                <span className="hidden-span">
                  <a
                    href="https://new-matter.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="tilt-box-wrap">
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <div className="tilt-box">
                        <img
                          className="hidden-img"
                          src="Screenshot 2023-09-01 at 2.29.17 PM.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </span>
              </div>
            </div>
            {/* <div className="hidden-helvetica">
              <div className="sub-work-row-text" id="row-1">
                <p>Helvetica</p>
                <p>2023</p>
                <span className="hidden-span">
                  <a
                    href="https://helvetica.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="tilt-box-wrap">
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <span className="t-over"></span>
                      <div className="tilt-box">
                        <img
                          className="hidden-img"
                          src="Screenshot 2023-09-29 at 3.47.29 PM.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
