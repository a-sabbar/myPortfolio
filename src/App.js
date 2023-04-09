import './App.css';
import Nav from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <div className="App">
     < Nav />
     <div className="container">
      < Home />
      < About />
      </div>
      <Portfolio/>
      <Contact/>
      <footer>
        <p>© 2023 Achraf Sabbar</p>
        <div className="social">
            <a href="https://github.com/a-sabbar" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://linkedin.com/in/a-sabbar" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
