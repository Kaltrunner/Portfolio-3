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
              <p className="nav-text pseudo-text-effect" data-after="Home">
                <span>Home</span>
              </p>
            </Link>
            <Link className="link" to="/Work">
              <p
                className="nav-text pseudo-text-effect"
                data-after="Work"
                id="nav-under-line"
              >
                <span>Work</span>
              </p>
            </Link>
            <Link className="link" to="/About">
              <p
                className="nav-text pseudo-text-effect"
                data-after="About"
                id="nav-under-line"
              >
                <span>About</span>
              </p>
            </Link>
            <a
              id="reach-out-link"
              href="mailto:erikrussells@gmail.com?subject=Hello!"
              data-after="Contact"
            >
              <p
                className="nav-text pseudo-text-effect"
                data-after="Email"
                id="nav-under-line"
              >
                <span>Email</span>
              </p>
            </a>
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
