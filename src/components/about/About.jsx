import "./about.css";
import Award from "../../img/award.png";
import AboutMe from "../../img/me2.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={AboutMe}
            alt="about_me.png"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Coming Soon...
        </p>
        <p className="a-desc">
        Coming Soon...
        </p>
        <div className="a-award">
          {/* <img className="a-award-img" src={Award} alt=""  /> */}
          <div className="a-award-texts">
            <h4 className="a-award-title"></h4>
            <p className="a-award-desc">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
