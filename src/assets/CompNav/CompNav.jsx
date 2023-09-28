import { Outlet, Link } from "react-router-dom";
import Clock from "../Clock/Clock";
import "./compNav.css";

function CompNav() {
  return (
    <>
      <div className="splashNav-body-div">
        <div className="splashNav-body-wrapper">
          <Link id="link" to="/">
            <p className="nav-text" id="nav-under-line">
              <a
                class="pseudo-text-effect"
                rel="noreferrer"
                data-after="HOME"
              >
                <span>HOME</span>
              </a>
            </p>
          </Link>
          <Link id="link" to="/Work">
            <p className="nav-text" id="nav-under-line">
              <a class="pseudo-text-effect" rel="noreferrer" data-after="Work">
                <span>Work</span>
              </a>
            </p>
          </Link>
          <Link id="link" to="/About">
            <p className="nav-text" id="nav-under-line">
              <a
                class="pseudo-text-effect"
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
              class="pseudo-text-effect"
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
              class="pseudo-text-effect"
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
              class="pseudo-text-effect"
              id="reach-out-link"
              href="mailto:erikrussells@gmail.com?subject=Hello!"
              data-after="Contact"
            >
              <span>Contact</span>
            </a>
          </p>
          {/* <div className="clock-div">
          <Clock />
        </div> */}
        </div>
        <div className="clock-div">
          <Clock />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default CompNav;
