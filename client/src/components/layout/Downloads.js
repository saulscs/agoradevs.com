import React from 'react'
import {Link} from 'react-router-dom'

const Download = () => {
    return (
        <>
        <section className="dowloads">
            <div className="container download__main">
                <div className="download__section">
                    <h3 className="downloads__title">Download our app</h3>
                    <div className="download__app">
                        <div className="download__item">
                            <i className="bx bxl-play-store download__logo"></i>
                            <h4 className="download__title">Play Store</h4>
                        </div>
                        <div className="download__item">
                            <i className="bx bxl-apple download__logo"></i>
                            <h4 className="download__title">App Store</h4>
                        </div>
                    </div>
                    <div className="download__copy">
                        <Link to="#" className="termsAndConditions termsAndConditions--margin">Privacy Policy</Link>
                        <Link to="#" className="termsAndConditions">User Agreement</Link>
                    </div>
                </div>

                <div className="getEmail">
                    <h3 className="downloads__title">Keep in touch</h3>
                    <form className="newsletter newsletter--modifier">
                        <input 
                            type="text" 
                            className="newsletter__input" 
                            placeholder="Your email"
                        />
                        <input 
                            type="submit" 
                            className="newsletter__submit" 
                            value="Start today"
                        />
                    </form>
                    <div className="socialmedia">
                        <p className="socialmedia__legend">Follow us</p>
                        <i className="socialmedia__icon bx bxl-facebook-square" ></i>
                        <i className="socialmedia__icon bx bxl-linkedin-square" ></i>
                        <i className="socialmedia__icon bx bxl-twitter"></i>
                        <i className="socialmedia__icon bx bxl-instagram" ></i>
                        <i className="socialmedia__icon bx bxl-github" ></i>
                    </div>
                </div>
            </div>
        </section> 
        </>
    )
}

export default Download