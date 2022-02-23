import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faAnchor } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    return (
        <div className="flex" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="infoWrapper">
                {props.logo ? <img className='logo' src={props.logo} alt={props.title}></img> : <div className="title">{props.title}</div>}
                <div className="text">
                    {props.desc}
                </div>
            </div>
            <div className="more">Read More</div>
            <div className="flexFooter">
                <div className="basr-social-share social">
                    <ul>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faAmbulance} color="white" />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faAnchor} color="white" />
                            </a>
                        </li>

                        <li>
                            <a className="" href="">
                                <FontAwesomeIcon icon={faAmbulance} color="white" />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faAnchor} color="white" />
                            </a>
                        </li>

                        <li>
                            <a className="tumblr" href="">
                                <FontAwesomeIcon icon={faAmbulance} color="white" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
