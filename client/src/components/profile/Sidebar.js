import React from 'react'


const SideBar = ()  =>{
    return (
        <aside className="profile__aside  container container--modifier">
        <div className="grid-aside">
            <div className="bgCard bgCard--modifier views">
                <h2 className="text-primary">People also view</h2>
                <div className="views__cards">
                    <div className="views__img">
                        <a>
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"/>
                        </a>
                    </div>
                    <div className="views__desc">
                        <a>
                        <h3>Erika flores</h3>
                        <p>Full Stack Developer</p>
                        </a>
                    </div>
                    <div className="views__add">
                        <a>
                        <i className="bx bxs-user-plus fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="views__cards">
                    <div className="views__img">
                        <a>
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"/>
                        </a>
                    </div>
                    <div className="views__desc">
                        <a>
                        <h3>Erika flores</h3>
                        <p>Full Stack Developer</p>
                        </a>
                    </div>
                    <div className="views__add">
                        <a>
                        <i className="bx bxs-user-plus fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="views__cards">
                    <div className="views__img">
                        <a>
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"/>
                        </a>
                    </div>
                    <div className="views__desc">
                        <a>
                        <h3>Erika flores</h3>
                        <p>Full Stack Developer</p>
                        </a>
                    </div>
                    <div className="views__add">
                        <a>
                        <i className="bx bxs-user-plus fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="views__more">
                    <button>See more +</button>
                </div>
            </div>
        <div className="bgCard bgCard--modifier views">
            <h2 className="text-primary">People you may know</h2>
            <div className="views__cards">
                <div className="views__img">
                    <a>
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"/>
                    </a>
                </div>
                <div className="views__desc">
                    <a>
                    <h3>Erika flores</h3>
                    <p>Full Stack Developer</p>
                    </a>
                </div>  
                <div className="views__add">
                    <a>
                    <i className="bx bxs-user-plus fa-2x"></i>
                    </a>
                </div>
            </div>
            <div className="views__cards">
                <div className="views__img">
                    <a>
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"/>
                    </a>
                </div>
                <div className="views__desc">
                    <a>
                    <h3>Erika flores</h3>
                    <p>Full Stack Developer</p>
                    </a>
                </div>  
                <div className="views__add">
                    <a>
                    <i className="bx bxs-user-plus fa-2x"></i>
                    </a>
                </div>
            </div>
            <div className="views__more">
                <button>See more +</button>
            </div>
        </div>
        </div>
    </aside>
    )
}



export default SideBar