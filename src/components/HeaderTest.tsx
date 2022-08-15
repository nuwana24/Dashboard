import React from 'react'
import { Row, Col } from 'react-bootstrap';
import "../css/navbar.css"
import UserPicture from "../img/user.jpg"


type Props = {}

const HeaderTest = (props: Props) => {
    return (
        <nav className='nav__brand'>
            <div className='me-auto left-links'>
                <div className="nav__togglar">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className='nav__menu'>
                    <li className="nav__item"><a id='nav-a' href="/" className='nav__link'>Overview</a></li>
                    <li className="nav__item"><a id='nav-a' href="/organization" className='nav__link'>Organizations</a></li>
                    <li className="nav__item"><a id='nav-a' href="/user" className='nav__link'>Users</a></li>
                </ul>

            </div>
            <div className='right-links'>
                <h5>Leo Blair</h5>
                <img
                    src={UserPicture}
                    alt=""
                    height={"50px"}
                    style={{ borderRadius: "50px" }}
                />

            </div>
        </nav>
    );
}
export default HeaderTest