import React from 'react'
import FirsPerson from '../../assets/first-person.jpg'
import SecondPerson from '../../assets/second_person.jpg'
import Google from '../../assets/google_logo.svg'

const  Testimony = () => {
    return (
        <>
        <section className="testimony">
            <div className="container">
                <h2 className="subtitle">Users</h2>
                <p className="copy__section"> 2  Although it’s not necessarily “all about who you know,”</p>
                
                <div className="testimony__container">
                    <div className="testimony__card">
                        <img src={FirsPerson} alt="fp" className="testimony__card--img"/>
                        <div className="testimony__copy highlight highlight__testimony--modifier">
                            <i className="bx bxl-google testimony__logo" ></i>
                            <div className="testimony__info">
                                <h3 className="testimony__name">Andres García</h3>
                                <p className="testimony__position">Director de google México</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimony__card">
                        <img src={SecondPerson} alt="fp" className="testimony__card--img"/>
                        <div className="testimony__copy highlight highlight__testimony--modifier">
                            <i className="bx bxl-apple testimony__logo" ></i>
                            <div className="testimony__info">
                                <h3 className="testimony__name">Andres García</h3>
                                <p className="testimony__position">Director de Apple México</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimony__card">
                        <div className="testimony__text">
                            <img src={Google} alt="google logo" className="testimony__logo"/>
                            <p className="testimony__story">Desde que empezamos a trabajar con Saúl Corona comenzamos a 
                                tener resultados increibles. Ahora hemos llegado a una mayor cantidad de clientes potenciales.
                            </p>
                            <div className="testimony__copy highlight testimony__copy--modifier">
                                <img src={FirsPerson} alt="fp" className="testimony__card--img logo--picture"/>
                                <div className="testimony__info">
                                    <h3 className="testimony__name">Andres García</h3>
                                    <p className="testimony__position">Director de Apple México</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimony