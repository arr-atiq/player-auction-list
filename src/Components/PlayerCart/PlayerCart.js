import React from 'react';
import './PlayerCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus,faFileInvoiceDollar,faThumbsUp} from '@fortawesome/free-solid-svg-icons'

const PlayerCart = (props) => {
    const newPlayerCart = props.playerCart;

    let totalBudget = 0;
    let playerPrimeInfo = [];
    for (let i = 0; i < newPlayerCart.length; i++) {
        const getCart = newPlayerCart[i];
        totalBudget = totalBudget+getCart.salary;
        const playerPrimeInfo1 = getCart.name;
        const playerPrimeInfo2 = getCart.salary;
        const allInformation = playerPrimeInfo1 + "- $"+playerPrimeInfo2;
        playerPrimeInfo.push(allInformation);
    }
    return (
        <div className="cart-show">
            <div className="cart-info">
                <h1 className="title"><span className="secondH">Player</span> Budget</h1>
            </div>
            <div className="cart-mainInfo">
                <h3><FontAwesomeIcon icon={faUserPlus} /> Player Added: {newPlayerCart.length}</h3>
                <h3><FontAwesomeIcon icon={faFileInvoiceDollar} /> Total Budget: ${totalBudget}</h3>
            </div>
            <div>
                {
                    playerPrimeInfo.map(info => <div className="info-div">
                        <FontAwesomeIcon icon={faThumbsUp} /> {info}</div> )
                }
            </div>
        </div>
    );
};

export default PlayerCart;