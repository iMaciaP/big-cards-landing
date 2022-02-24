import './arrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Arrow = (props) => {
    const handleClick = () => {
        console.log("CLICKED");
    };
    return (
        <div className='main' onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} color="white" />
        </div>
    );
}

export default Arrow;
