import 'react-multi-carousel/lib/styles.css';


import '../css/Main.css';
import '../css/Projects.css';
import '../css/MediaQueries.css';

import website from '../multimedia/website.png'
import SignMeUp from '../multimedia/SignMeUp.png'
import ClassConnect from '../multimedia/ClassConnect.png'
import Osiris from '../multimedia/Osiris.png'



export const Projects = () => {

    return (
        <section id='Projects'>

            <div className="project_header hidden" >
                <p class="">Browse My Recent</p>
                <span><h1>Projects</h1></span>
            </div>

            <div className="projects hidden">

                <div className="project_card">
                    <div className="project_img"> 
                        <img
                            src={website}
                            alt='website_image'
                        />
                    </div>

                    <div className="project_details">

                        <h1>Personal Website</h1>
                        <p><br></br></p>

                        <div className='project_desrip'>
                            <p>• A sleek and responsive Personal Portfolio using HTML, CSS, React.js, and related packages.</p>
                            <p>• Delivered a dynamic user experience characterised by fluid navigation and content presentation.</p>
                            <p>• Integration of animations to infuse interface with dynamism and interactivity.</p>
                        </div>


                        <div class="btn_container">
                            <div className='button_left'>
                                <a href='https://github.com/Austintjh19/PERSONAL_PORTFOLIO' target="_blank" rel="noreferrer">
                                <button
                                    className=""
                                    onclick=""
                                > <span>
                                    Github
                                </span> <i></i>
                                </button>
                                </a>
                            </div>
                            
                            <div className='button_right'>
                                <a href='https://austintanjunheng.netlify.app/' target="_blank" rel="noreferrer">
                                <button
                                    className=""
                                    onclick="'"
                                ><span>
                                    Live Demo
                                </span> <i></i>
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <div className="project_img"> 
                        <img
                            src={SignMeUp}
                            alt='SignMeUp_Image'
                        />
                    </div>

                    <div className="project_details">

                        <h1>SignMeUp</h1>
                        <p><br></br></p>

                        <div className='project_desrip'>
                            <p>• A full stack Android platform that allows users to create and register for events/ activities, built with Flutter, Dart, and Firebase.</p>
                            <p>• Engineered the database architecture and implemented diverse API calls for messaging, searching, and among other functionalities.</p>
                            <p>• Implemented user authentication and authorization features using Firebase Authentication for secure user access.</p>
                        </div>

                        <div class="btn_container">
                            <div className='button_left'>
                                <a href='https://github.com/Austintjh19/SignMeUp' target="_blank" rel="noreferrer">
                                <button
                                    
                                    className=""
                                    onclick=""
                                > <span>
                                    Github
                                </span> <i></i>
                                </button>
                                </a>
                            </div>
                            <div className='button_right'>
                                <a href='https://www.youtube.com/watch?v=_ZXdAOsF2AQ' target="_blank" rel="noreferrer">
                                <button
                            
                                    className=""
                                    onclick=""
                                ><span>
                                    Live Demo
                                </span> <i></i>
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <div className="project_img"> 
                        <img
                            src={ClassConnect}
                            alt='ClassConnect'
                        />
                    </div>

                    <div className="project_details">

                        <h1>ClassConnect</h1>
                        <p><br></br></p>

                        <div className='project_desrip'>
                            <p>• A comprehensive web application designed to foster seamless communication and collaboration among classmates.</p>
                            <p>• Leveraged a sophisticated tech stack including JavaScript, HTML, CSS, PHP, PHPAdmin, XAMPP, and SQL.</p>
                            <p>• Designed and implemented a real-time messaging system enabling classmates to communicate effectively.</p>
                        </div>

                        <div class="btn_container">
                            <div className='button_left'>
                                <a href='https://github.com/Austintjh19/ClassConnect' target="_blank" rel="noreferrer">
                                <button
                                    
                                    className=""
                                    onclick=""
                                > <span>
                                    Github
                                </span> <i></i>
                                </button>
                                </a>
                            </div>
                            <div className='button_right'>
                                <a href='https://youtu.be/lgJUs2IK-bo' target="_blank" rel="noreferrer">
                                <button
                            
                                    className=""
                                    onclick=""
                                ><span>
                                    Live Demo
                                </span> <i></i>
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <div className="project_img"> 
                        <img
                            src={Osiris}
                            alt='Osiris'
                        />
                    </div>

                    <div className="project_details">

                        <h1>Osiris</h1>
                        <p><br></br></p>

                        <div className='project_desrip'>
                            <p>• Chatbot for task management, developed using Java, JavaFx, JUnit, Javadoc, and Gradle. </p>
                            <p>• Demonstrated proficient use of Git version control, including effectively managing merges, resolving merge conflicts, creating tags for release versions, and initiating and managing pull requests for collaborative development.</p>
                        </div>

                        <div class="btn_container">
                            <div className='button_left'>
                                <a href='https://github.com/Austintjh19/ip' target="_blank" rel="noreferrer">
                                <button
                                    className=""
                                    onclick=""
                                > <span>
                                    Github
                                </span> <i></i>
                                </button>
                                </a>
                            </div>
                            <div className='button_right'>
                                <button
                                ><span>
                                    Live Demo
                                </span> <i></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
        </section>    
    )
}