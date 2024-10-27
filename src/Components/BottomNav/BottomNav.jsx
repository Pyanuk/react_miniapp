import React from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; 
import { MdSmartphone } from 'react-icons/md'; 
import './BottomNav.css';

function BottomNav() {
    return (
        <div className="bottom-nav">
            <div className="nav-item">
                <FaHome size={24} />
            </div>
            <div className="nav-item">
                <MdSmartphone size={24} />
            </div>
            <div className="nav-item">
                <FaShoppingCart size={24} />
            </div>
        </div>
    );
}

export default BottomNav;
