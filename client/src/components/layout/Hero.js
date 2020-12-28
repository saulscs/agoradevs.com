import React from 'react'
import {Link} from 'react-router-dom'
import ImgHero from '../../assets/pic1.svg'


const  Hero = () => {
    return (
    <header className="hero">
        <section className="container hero__main">
            <div className="hero__content fadeIn">
                <h1>NEXT GENERATION</h1>
                <h2>TECHNOLOGY</h2>
                <p>See what makes up different</p>
                <button className="button--cta" type="submit">
                    <Link to="/register">Get started</Link>
                </button>
            </div>
            <div className="hero__img--container fadeIn">
                <img className="main__img" src={ImgHero} alt="heroImg"/>
            </div>
        </section>
    </header>
    )
}

export default Hero