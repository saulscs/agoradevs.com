import React from 'react'
import ImgAbout from '../../assets/business_network.jpg'

const  About = () => {
    return (
        <>
        <section className="about">
            <div className="container about__main">
                <div className="about__content">
                    <h2 className="subtitle">Connections are always valuable</h2>
                    <p className="copy__section">Although it’s not necessarily “all about who you know,” your business 
                        network can be a huge asset when you’re looking for a job, launching a 
                        business, in need of referrals, or searching for guidance.
                    </p>
                </div>
                <div className="about__img--container">
                    <img  src={ImgAbout} alt="aboutImg"/>
                </div>
            </div>
        </section> 
        </>
    )
}

export default About