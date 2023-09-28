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
