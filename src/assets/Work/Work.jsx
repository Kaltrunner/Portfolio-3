import "./work.css";
import CompNav from "../CompNav/CompNav";
import Mouse from "../Mouse";

function Work() {
  return (
    <>
      <Mouse />
      <CompNav />
      <div className="work-body-container">
        <div className="work-body-div">
          <div className="work-row">
            <div className="work-row-text">
              <h1>WORK!</h1>
              <h1 id="est">2022 – 23</h1>
            </div>
            <div className="hero-row-separator"></div>
          </div>
          <div className="lorem-div">
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
              numquam deleniti. Ipsa optio tenetur, obcaecati, quam architecto
              quidem natus, quod aspernatur laudantium ab veniam fuga quia
              officiis numquam maiores eaque? Veniam dolore culpa dolor, iste at
              voluptatem, debitis vitae sit illo consequatur eos alias hic in
              ipsum delectus non consectetur!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
