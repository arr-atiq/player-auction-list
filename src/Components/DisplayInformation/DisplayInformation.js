import React from 'react';
import './DisplayInformation.css';

const DisplayInformation = (props) => {
    const {name, nationality, salary, image, team} = props.playerInfo;
    return (
        <div className="player-categories">
            <div className="player-data">
                <img src={image} alt=""/>
                <h3>{name}</h3>
                <h4>{nationality}</h4>
                <h4>{team}</h4>
                <h4>{salary}</h4>
                <button className="main-btn">Select Me</button>
            </div>
            
        </div>
    );
};

export default DisplayInformation;