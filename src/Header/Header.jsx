import styles from './Header.module.css';
import { useState, useEffect } from 'react';

export default Header = ({ author, appName }) => {
    return (
        <div 
            className = "container"
        >
            <div
                className = "app-info"
            > 
                <p className = "app-info app-name">{appName}</p>
                <p className = "app-info author">by {author}</p>
            </div>
        </div>
    )
}