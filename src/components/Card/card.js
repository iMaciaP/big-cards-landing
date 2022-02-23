import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faAnchor } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    return (
        <div className="flex" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="infoWrapper">
                {/* <div className="title" style={{ backgroundImage: `url(${props.logo})` }}>TEXT 1</div> */}
                <div className="title">{props.title}</div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    tincidunt purus eget justo dignissim euismod. Donec non quam
                    commodo, consequat orci nec...
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
