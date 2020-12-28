import React from 'react'
import {Link} from 'react-router-dom'

 const  FooterApp = () => {
    return (
        <footer className="footer__app">
            <div className="footer__app--options">
                <div>
                    <Link to="/posts">
                        <i className="bx bxs-home"></i>
                    </Link>
                </div>
                <div>
                    <Link to="/profiles">
                        <i className="bx bxs-user-circle" ></i>
                    </Link>
                </div>
                <div>
                    <Link to="/dashboard">
                        <i className="bx bxs-cog"></i>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default FooterApp