import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1><span className='firstH'>Bangladesh-</span> <span className='secondH'>Player-</span> Auction List</h1>

            <nav>
                <a href="/players">Players</a>
                <a href="/batsMan">BatsMan</a>
                <a href="/bowler">Bowler</a>
                <a href="/team">Team</a>
                <a href="/signup">Sign Up</a>
            </nav>
        </div>
    );
};

export default Header;