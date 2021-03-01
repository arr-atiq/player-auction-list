import React, { useEffect, useState } from 'react';
import './PlayerInformation.css';
import fakeData from '../../fakeData/fakeData';
import DisplayInformation from '../DisplayInformation/DisplayInformation';
import PlayerCart from '../PlayerCart/PlayerCart';

const PlayerInformation = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(fakeData);
    },[])
    return (
        <div className="player-card">
            <div className="player-info">
            {
                players.map(player => <DisplayInformation playerInfo= {player}></DisplayInformation> )
            }
            </div>
            <div className="player-cart">
                <PlayerCart></PlayerCart>
            </div>
        </div>
    );
};

export default PlayerInformation;