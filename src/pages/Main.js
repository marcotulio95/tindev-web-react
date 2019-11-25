import React from 'react';
import logo from '../assets/logo.png';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main( {match }){
    return( 
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/19674686?v=4" alt="user_icon" />
                    <footer>
                        <strong>Lorem ipsum</strong>
                        <p>Lorem Minim et duis reprehenderit et occaecat sunt nostrud aute sint. Aute tempor eu officia culpa consectetur et reprehenderit officia. Anim qui nulla sit sint. In ullamco labore dolore aliqua ipsum mollit aute aliquip minim quis magna.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button" >
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button" >
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/19674686?v=4" alt="user_icon" />
                    <footer>
                        <strong>Lorem ipsum</strong>
                        <p>Lorem Minim et duis reprehenderit et occaecat sunt nostrud aute sint. Aute tempor eu officia culpa consectetur et reprehenderit officia. Anim qui nulla sit sint. In ullamco labore dolore aliqua ipsum mollit aute aliquip minim quis magna.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button" >
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button" >
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/19674686?v=4" alt="user_icon" />
                    <footer>
                        <strong>Lorem ipsum</strong>
                        <p>Lorem Minim et duis reprehenderit et occaecat sunt nostrud aute sint. Aute tempor eu officia culpa consectetur et reprehenderit officia. Anim qui nulla sit sint. In ullamco labore dolore aliqua ipsum mollit aute aliquip minim quis magna.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button" >
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button" >
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/19674686?v=4" alt="user_icon" />
                    <footer>
                        <strong>Lorem ipsum</strong>
                        <p>Lorem Minim et duis reprehenderit et occaecat sunt nostrud aute sint. Aute tempor eu officia culpa consectetur et reprehenderit officia. Anim qui nulla sit sint. In ullamco labore dolore aliqua ipsum mollit aute aliquip minim quis magna.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button" >
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button" >
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}