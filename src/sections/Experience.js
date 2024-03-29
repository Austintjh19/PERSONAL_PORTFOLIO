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
                        <img src={Teaching} alt="Teaching_Image" class="card__img"/>
                    

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
                    <img src={Email} alt="Email_Image" class="card__img"/>

                    <div class="card__data">
                        <h2 class="card__title">Admin/ Data Analyst, Burberry , Orchard, Singapore</h2>
                        <span class="card__description">
                            <p>May 2023 - Sep 2023</p>
                            <p>
                            • Utilised formulas and functions to automate calculations and analyses.
                            <br></br>
                            • Inputting data into spreadsheets or databases. Developed charts and graphs to visualise performance trends.
                            <br></br>
                            • Generating reports and summaries for management review.
                            </p>
                        </span>
                    </div>
                </article>

                <article class="card__article">
                    <img src={Cashier} alt="Cashier_Image" class="card__img"/>

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