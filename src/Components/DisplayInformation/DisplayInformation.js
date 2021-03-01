import React from 'react';
import './DisplayInformation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature, faFlagCheckered, faUserCog, faDollarSign, faPlusSquare} from '@fortawesome/free-solid-svg-icons'

const DisplayInformation = (props) => {
    const {name, nationality, salary, image, team} = props.playerInfo;
    return (
        <div className="player-categories">
            <div className="player-data">
                <img src={image} alt=""/>
                <h3><FontAwesomeIcon icon={faFileSignature} /> {name}</h3>
                <h4><FontAwesomeIcon icon={faFlagCheckered} /> {nationality}</h4>
                <h4><FontAwesomeIcon icon={faUserCog} /> {team}</h4>
                <h4><FontAwesomeIcon icon={faDollarSign} />{salary}</h4>
                <button className="main-btn"
                onClick={()=> props.handleAddPlayer(props.playerInfo)}
                ><FontAwesomeIcon icon={faPlusSquare} /> Select Me</button>
            </div>
            
        </div>
    );
};

export default DisplayInformation;