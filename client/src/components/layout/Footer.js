import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__logo fadeInDown">
                    <Link to="/" className="main__logo"><i className="fas fa-book-reader"></i>Agora Devs</Link>
                </div>
                <p className="website__rights">© Agoradevs {new Date().getFullYear()}. All rights reserved</p>
            </div>
        </footer>   
        </>
    )
}

export default Footer