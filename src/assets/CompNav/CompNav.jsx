import { Outlet, Link } from "react-router-dom";
import Clock from "../Clock/Clock";
import "./compNav.css";

function CompNav() {
  return (
    <>
      <div className="slpashnav-wrap">
        <div className="splashNav-body-div">
          <div className="splashNav-body-wrapper">
            <Link id="link" to="/">
              <p
                className="nav-text pseudo-text-effect"
                data-after="Home"
                id="nav-under-line"
              >
                <span>Home</span>
              </p>
            </Link>
            <Link id="link" to="/Work">
              <p
                className="nav-text pseudo-text-effect"
                data-after="Work"
                id="nav-under-line"
              >
                <span>Work</span>
              </p>
            </Link>
            <Link id="link" to="/About">
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
            >
              <p
                className="nav-text pseudo-text-effect"
                data-after="Contact"
                id="nav-under-line"
              >
                <span>Contact</span>
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

export default CompNav;
