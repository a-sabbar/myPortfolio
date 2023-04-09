import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__info">
                    <h1>Contact</h1>
                    <p>Don't be shy! 👇</p>
                    <div className="contact__info__links">
                        <div className="contact__info__link">
                            <span className="img__icon">
                               <FontAwesomeIcon icon={faMapLocationDot} />
                            </span>
                            <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/r2LMF4kBu66tVLDa7">Morocco,khouribga</a>
                        </div>
                        <div className="contact__info__link">
                            <span className="img__icon">
                               <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            </span>
                            <a target="_blank" rel="noreferrer" href="https://achraf.sabbar2002@gmail.com">asabbar.business@gmail.com</a>
                        </div>
                    </div>
                    <button className="send__message">Contact Me </button>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;