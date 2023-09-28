import { Outlet, Link } from "react-router-dom";
import Clock from "../Clock/Clock";
import "./splashNav.css";

function SplashNav() {
  return (
    <>
      <div className="slpashnav-wrap">
        <div className="splashNav-body-div">
          <div className="splashNav-body-wrapper">
            <Link id="link" to="#">
              <p className="nav-text">
                <a
                  className="pseudo-text-effect"
                  rel="noreferrer"
                  data-after="!portfolio"
                >
                  <span>!portfolio</span>
                </a>
              </p>
            </Link>
            <Link id="link" to="/Work">
              <p className="nav-text" id="nav-under-line">
                <a
                  className="pseudo-text-effect"
                  rel="noreferrer"
                  data-after="Work"
                >
                  <span>Work</span>
                </a>
              </p>
            </Link>
            <Link id="link" to="/About">
              <p className="nav-text" id="nav-under-line">
                <a
                  className="pseudo-text-effect"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  data-after="About"
                >
                  <span>About</span>
                </a>
              </p>
            </Link>
            <p className="nav-text" id="nav-under-line">
              <a
                className="pseudo-text-effect"
                id="reach-out-link"
                href="mailto:erikrussells@gmail.com?subject=Hello!"
                data-after="Contact"
              >
                <span>Contact</span>
              </a>
            </p>
          </div>
          <div className="clock-div">
            <Clock />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SplashNav;
