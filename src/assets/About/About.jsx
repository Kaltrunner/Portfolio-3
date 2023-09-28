import "./about.css";
import CompNav from "../CompNav/CompNav";
import Mouse from "../Mouse";

function About() {
  return (
    <>
      <Mouse />
      <CompNav />
      <div className="about-body-container">
        <div className="about-body-div">
          <div className="about-row">
            <div className="about-row-text">
              <h1>ABOUT ME!</h1>
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
            <div className="hero-row-separator"></div>
          </div>
          <div className="lorem-div">
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              perspiciatis, exercitationem voluptatem veniam iste, aliquid
              officia obcaecati tempora illum accusantium quasi cupiditate,
              dolores distinctio beatae. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Possimus perspiciatis, exercitationem voluptatem
              veniam iste, aliquid officia obcaecati tempora illum accusantium
              quasi cupiditate, dolores distinctio beatae. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Possimus perspiciatis,
              exercitationem voluptatem veniam iste, aliquid officia obcaecati
              tempora illum accusantium quasi cupiditate, dolores distinctio
              beatae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
