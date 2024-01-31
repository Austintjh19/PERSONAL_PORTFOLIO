import React, { useEffect } from "react";
import profile_pic from '../multimedia/profile_pic.jpg'
import linkedin from '../multimedia/linkedin.png'
import github from '../multimedia/github.png'
import about_content_2_img from '../multimedia/parallax_img_1.jpg'

import '../css/Main.css';
import '../css/About.css';
import '../css/MediaQueries.css';
import { fade_in_right } from '../components/Fade_In_Right'; 

export const About = () => {


    useEffect(() => {
        fade_in_right(); 
        
    }, []);

    return (
        <section id='About'>
            <div className="about_content">
                <div className="profile_pic">
                    <img src={profile_pic} alt="" />
                </div>
          
                <div className="about_text">
                    <div className="about_text_1">
                        <p className="about_text_p1 hidden">Hello, I'm</p>
                        <h1 className="about_text_title hidden">Austin Tan</h1>
                        <p className="about_text_p2 hidden">Full Stack Developer</p>

                        <div className="btn_container hidden">
                            <button className="btn btn_color_1" onclick="">Download CV</button>
                            <a href="#Contact"><button className="btn btn_color_2" onclick="#Contact">Contact Info</button></a>
                        </div>
                        <div className="socials_container hidden">
                            <img
                                src={linkedin}
                                alt="My LinkedIn profile"
                                className="icon"
                                onclick=""
                            />
                            <a href="https://github.com/Austintjh19" target="_blank" rel="noopener">
                            <img
                                src={github}
                                alt="My Github profile"
                                className="icon"
                                onclick=""
                            />
                            </a>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="about_content_2">

                <div className="about_text_2">
                    
                    <h1 data-text="ABOUT ME ...">ABOUT ME ...</h1>
                    
                    <p className="hidden">Resourceful and dedicated Undergraduate student with excellent critical thinking skills and a demonstrated commitment to providing great customer service. 
                    Strong organizational abilities with proven successes managing multiple academic projects and volunteering events. 
                    Bringing forth a motivated attitude and a variety of powerful skills. Adept in various social media platforms and office technology programs. 
                    Committed to utilizing my skills to further the mission of a company.</p>
                    
                </div>

                <div className="about_content_2_img">
                    <img src={about_content_2_img} alt="" />
                </div>
            </div>   

        
        </section>
       
    )
}