import './Home.css';
import myphoto from "./img/asabbar.jpg"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Js from "./img/languages/js.png";
import React from "./img/languages/react.png";
import Ts from "./img/languages/ts.png";
import C from "./img/languages/c.png";
import Cpp from "./img/languages/cpp.png";
import Css3 from "./img/languages/css3.png";
import Html from "./img/languages/html.png";
import Docker from "./img/languages/docker.png";
import Git from "./img/languages/git.png";
const Home = () => {
 return (
    <div id='Home' className="container">
      <div className="info">
        <div className="text">
          <h1>Front-End React<br/>Developer <span id='hand'> 👋</span></h1>
          <p>
            Hello , I'm Achraf Hunter. I'm a full-stack web developer. I'm currently
            working on a few projects. I'm also looking for a job. If you're
            interested in hiring me, please contact me.
          </p>
          <div className="social">
            <a href="https://github.com/a-sabbar" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://linkedin.com/in/a-sabbar" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} /></a>
          </div> 
        </div>
        <img className="photoProfile" src={myphoto} alt="Achraf Hunter"  />
      </div>
      <div className="skills">
        <p>Tech Stack : </p>
        <span ></span>
        <div className='__skills'>
          <div className='myLanguages'>
              <img className='Js' src={Js} alt="Js" />
              <img className='Ts' src={Ts} alt="Ts" />
              <img className='React' src={React} alt="React" />
              <img className='Html' src={Html} alt="HTML" />
              <img className='Css3' src={Css3} alt="Css3" />
              <img className='C' src={C} alt="C" />
              <img className='Cpp' src={Cpp} alt="Cpp" />
              <img className='Docker' src={Docker} alt="Cpp" />
              <img className='Git' src={Git} alt="Git" />
              <img className='Js' src={Js} alt="Js" />
              <img className='Ts' src={Ts} alt="Ts" />
              <img className='React' src={React} alt="React" />
              <img className='Html' src={Html} alt="HTML" />
              <img className='Css3' src={Css3} alt="Css3" />
              <img className='C' src={C} alt="C" />
              <img className='Cpp' src={Cpp} alt="Cpp" />
              <img className='Docker' src={Docker} alt="Cpp" />
              <img className='Git' src={Git} alt="Git" />
          </div>
        </div>
      </div>

    </div>
  );
}
 
export default Home;
