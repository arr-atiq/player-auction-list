import React from 'react';
import './PlayerCart.css';

const PlayerCart = (props) => {
    const newPlayerCart = props.playerCart;
    return (
        <div className="cart-show">
            <div className="cart-info">
                <h1 className="title"><span className="secondH">Player</span> Budget</h1>
            </div>
            <div>
                <h3>Player Added: {newPlayerCart.length}</h3>
                <h3>Total Badget:</h3>
            </div>
        </div>
    );
};

export default PlayerCart;