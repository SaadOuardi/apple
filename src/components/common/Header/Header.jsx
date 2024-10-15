import React from 'react';
import './Header.scss';

export const Header = () => {
    return (
        <header>
            <div className='header-content'>
                <div className='logo'>
                    <i class="fa fa-apple"></i>
                </div>
                <div className='navbar'>
                    <ul>
                        <li>
                            <a href="/">Store</a>
                        </li>
                        <li>
                            <a href="/">Mac</a>
                        </li>
                        <li>
                            <a href="/">iPad</a>
                        </li>
                        <li>
                            <a href="/">iPhone</a>
                        </li>
                        <li>
                            <a href="/">Watch</a>
                        </li>
                        <li>
                            <a href="/">AirPods</a>
                        </li>
                        <li>
                            <a href="/">TV & Home</a>
                        </li>
                        <li>
                            <a href="/">Only on Apple</a>
                        </li>
                        <li>
                            <a href="/">Accessoires</a>
                        </li>
                        <li>
                            <a href="/">Support</a>
                        </li>
                    </ul>
                </div>
                <div className='icons'>
                    <i class="fa fa-shopping-bag"></i>
                    <i class="fa fa-search"></i>
                </div>
            </div>
        </header>
    )
}