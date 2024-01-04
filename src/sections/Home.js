import React from "react";
import bg_vid from '../multimedia/bg_vid_2.mp4'

import '../css/Home.css';
import '../css/Main.css';
import Textspan from '../components/TextSpan.js'

export const Home = () => {

    const firstName = " Austin".split("")
    const lastName = " Tan.".split("")


    return (
        <section id='Home'>
            <div className="home_bg_container">

                <div className="home_bg_overlay"></div>
                <video id="home_bg" src={bg_vid} autoPlay loop muted/>

                <body>
                   
                    <div className="home_headers">
                        <div className="main_header">
                            <h1>Hi. I'm </h1>
                            <h1>
                                {firstName.map((letter,index) =>{ 
                                return (<Textspan key={index}>{letter === " " ? "\u00A0" : letter}</Textspan>)
                                })}
                            </h1>
                            <h1>
                                {lastName.map((letter,index) =>{ 
                                return (<Textspan key={index}>{letter === " " ? "\u00A0" : letter}</Textspan>)
                                })}
                            </h1>
                        </div>
                        <h2>Welcome to my website. </h2>
                        
                    </div>

                </body>

            </div>
    
        </section>
       
    )
}