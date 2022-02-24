import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
    const handleClick = () => {
       document.location.href = './app-files/index.html';
    };
    return (
        <div className="flex" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="infoWrapper">
                {props.logo ? <img className='logo' src={props.logo} alt={props.title}></img> : <div className="title">{props.title}</div>}
                <div className="text">
                    {props.desc}
                </div>
            </div>
            <div className="more" onClick={handleClick}>Read More</div>
            <div className="flexFooter">
                <div className="basr-social-share social">
                    <ul>
                        <>
                            {props.buttons ?
                                props.buttons.map((element, index) => {
                                    return <li key={index}><a href=''><FontAwesomeIcon icon={element.icon} color="white" /></a></li>
                                }) : null
                            }
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
