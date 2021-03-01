import React from 'react';
import './DisplayInformation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature, faFlagCheckered, faUserCog, faDollarSign, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const DisplayInformation = (props) => {
    const {name, nationality, salary, image, team} = props.playerInfo;
    return (
        <div className="player-categories">
            <div className="player-data">
                <img src={image} alt=""/>
                <h3><FontAwesomeIcon icon={faFileSignature} /> {name}</h3>
                <h3><FontAwesomeIcon icon={faFlagCheckered} /> {nationality}</h3>
                <h3><FontAwesomeIcon icon={faUserCog} /> {team}</h3>
                <h3><FontAwesomeIcon icon={faDollarSign} />{salary}</h3>
                <Button variant="success addbtn"
                onClick={()=> props.handleAddPlayer(props.playerInfo)}
                ><FontAwesomeIcon icon={faPlusSquare} /> Select Me</Button>
            </div>
            
        </div>
    );
};

export default DisplayInformation;