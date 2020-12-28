import React from 'react'
import Benefict1 from '../../assets/Community.jpg'
import Benefict2 from '../../assets/learning.jpg'

 const Beneficts = () => {
    return (
        <>
        <section className="beneficts">
            <div className="container beneficts__main">
                <h2 className="subtitle">Beneficts</h2>
                <p className="copy__section">Hammock whatever wolf pabst, tbh echo park kickstarter</p>
                
                <article className="container-bg">
                    <div className="card">
                        <div className="card__text">
                            <h3 className="card__title"> lorem ipsum</h3>
                            <p className="card__copy">
                                I'm baby hashtag occupy chia art party meh hot chicken 
                                coloring book venmo bushwick. Copper mug yuccie stumptown, 
                                la croix four loko kitsch sriracha sustainable.
                            </p>
                            <button className="button--cta">
                                <a href="/">Get started</a>
                            </button>
                        </div>
                    </div>
                    <div className="background">
                        <img src={Benefict1} alt="bgImg"/>
                        <div className=" highlight highlight__background--modifier ">
                            <h3 className="background__title"> 1 lorem ipsum</h3>
                            <p className="background__copy"> 
                                2 Hammock whatever wolf pabst, tbh echo park kickstarter
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__text">
                            <h3 className="card__title"> lorem ipsum</h3>
                            <p className="card__copy">
                                I'm baby hashtag occupy chia art party meh hot chicken 
                                coloring book venmo bushwick. Copper mug yuccie stumptown, 
                                la croix four loko kitsch sriracha sustainable.
                            </p>
                            <button className="button--cta">
                                <a href="/">Get started</a>
                            </button>
                        </div>
                    </div>
                    <div className="background">
                        <img src={Benefict2} alt="bgImg"/>
                        <div className="highlight highlight__background--modifier">
                            <h3 className="background__title"> 2 lorem ipsum</h3>
                            <p className="background__copy">2 Hammock whatever wolf pabst, tbh echo park kickstarter</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>  
        </>
    )
}

export default Beneficts;