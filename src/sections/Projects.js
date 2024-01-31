import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import '../css/Main.css';
import '../css/Projects.css';
import '../css/MediaQueries.css';

import website from '../multimedia/website.png'
import SignMeUp from '../multimedia/SignMeUp.png'
import Court_Estore from '../multimedia/Court_Estore.png'
import Others from '../multimedia/Others.png'


export const Projects = () => {


    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section id='Projects'>

            <div className="project_header hidden" >
                <p class="">Browse My Recent</p>
                <span><h1>Projects</h1></span>
            </div>
            
            <Carousel responsive={responsive} className='hidden'>
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

                        <div class="btn_container">
                            <a href='https://github.com/Austintjh19/PERSONAL_PORTFOLIO'>
                            <button
                                className=""
                                onclick=""
                            > <span>
                                Github
                            </span> <i></i>
                            </button>
                            </a>
                            <a href='https://austintanjunheng.netlify.app/'>
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

                <div className="project_card">
                    <div className="project_img"> 
                        <img
                            src={SignMeUp}
                            alt='SignMeUp_Image'
                        />
                    </div>

                    <div className="project_details">

                        <h1>Events App</h1>
                        <p><br></br></p>

                        <div class="btn_container">
                            <button
                                
                                className=""
                                onclick="location.href='https://github.com/'"
                            > <span>
                                Github
                            </span> <i></i>
                            </button>
                            <button
                        
                                className=""
                                onclick="location.href='https://github.com/'"
                            ><span>
                                Live Demo
                              </span> <i></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <div className="project_img"> 
                        <img
                            src={Court_Estore}
                            alt='Estore_Image'
                        />
                    </div>

                    <div className="project_details">

                        <h1>Courts Estore</h1>
                        <p><br></br></p>

                        <div class="btn_container">
                            <button
                                
                                className=""
                                onclick="location.href='https://github.com/'"
                            > <span>
                                Github
                            </span> <i></i>
                            </button>
                            <button
                        
                                className=""
                                onclick="location.href='https://github.com/'"
                            ><span>
                                Live Demo
                              </span> <i></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <div className="project_img"> 
                        <img
                            src={Others}
                            alt='Others_Image'
                        />
                    </div>

                    <div className="project_details">

                        <h1>Others ...</h1>
                        <p><br></br></p>

                        <div class="btn_container">
                            <button
                                
                                className=""
                                onclick="location.href='https://github.com/'"
                            > <span>
                                Github
                            </span> <i></i>
                            </button>
                            <button
                        
                                className=""
                                onclick="location.href='https://github.com/'"
                            ><span>
                                Live Demo
                              </span> <i></i>
                            </button>
                        </div>
                    </div>
                </div>
                

            </Carousel>
           
        </section>    
    )
}