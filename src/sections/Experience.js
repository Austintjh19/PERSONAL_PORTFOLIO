import React from "react";

import '../css/Main.css';
import '../css/Experience.css';
import '../css/MediaQueries.css';

import Teaching from '../multimedia/Teaching.webp'
import Email from '../multimedia/email.jpg'
import Cashier from '../multimedia/cashier.jpg'

export const Experience = () => {

    return (
        <section id='Experience'>
            
            <div className="experience_subheader hiddem">
                <p>Explore my</p>
            </div>
           
            
            <div className="experience_header hidden">
                <h1>JOB EXPERIENCES</h1>
                <h1>JOB EXPERIENCES</h1>
            </div>
          
            <div class="card__container hidden">
                <article class="card__article">
                        <img src={Teaching} alt="image" class="card__img"/>
                    

                    <div class="card__data">
                        <h2 class="card__title">Teaching Assistant, King George V International School, Hong Kong</h2>
                        <span class="card__description">
                            <p>May 2019 - Jun 2019</p>
                            <p>
                                • Provided optimal instruction and academic support to students. 
                                <br></br>
                                • Followed instructions from Teachers and took initiative when necessary.
                            </p>
                        </span>
                    </div>
                </article>

                <article class="card__article">
                    <img src={Email} alt="image" class="card__img"/>

                    <div class="card__data">
                        <h2 class="card__title">Assistant/ Retail Assistant, Burberry , Orchard, Singapore</h2>
                        <span class="card__description">
                            <p>May 2023 - Sep 2023</p>
                            <p>
                            • Delivered inventory reports to my supervisor in a timely fashion every week.
                            <br></br>
                            • Redirected calls as needed and worked with my supervisor to address any outstanding issues or concerns.
                            <br></br>
                            • Documented all concerns and incidents and reported them to a senior supervisor.
                            <br></br>
                            • Maintained up to date knowledge of all retail promotions.
                            </p>
                        </span>
                    </div>
                </article>

                <article class="card__article">
                    <img src={Cashier} alt="image" class="card__img"/>

                    <div class="card__data">
                        <h2 class="card__title">Service Crew/ Cashier, Seoul Garden Hotpot, Jurong East, Singapore</h2>
                        <span class="card__description">
                            <p>December 2022 — January 2023</p>
                            <p>
                            • Assisted with food preparations prior to service.
                            <br></br>
                            • Provided superior customer service to clients by addressing all questions and concerns.
                            <br></br>
                            • Worked to achieve high customer satisfaction rates by providing optimal customer service.
                            </p>
                        </span>
                    </div>
                </article>
            </div>
           
        </section>
        
    )
}