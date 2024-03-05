import React, { useEffect } from "react";
import '../css/Education.css';
import '../css/MediaQueries.css';
import '../css/Main.css';
import education from '../multimedia/education.png'
import checkmark from '../multimedia/checkmark.png'
import skill from '../multimedia/experience.png'

export const Education = () => {

    
    useEffect(() => {
        const languages = [
            { name: 'HTML', experience: 'Experienced' },
            { name: 'CSS', experience: 'Experienced' },
            { name: 'React', experience: 'Intermediate' },
            { name: 'JavaScript', experience: 'Intermediate' },
            { name: 'Python', experience: 'Intermediate' },
            { name: 'Java', experience: 'Experienced' },
            { name: 'Numpy', experience: 'Intermediate' },
            { name: 'Torch', experience: 'Basic' },
            { name: 'Dart', experience: 'Intermediate' },
            { name: 'SQL', experience: 'Intermediate' },
            { name: 'PHP', experience: 'Intermediate' }
        ];

        const languagesContainer = document.createElement('div');
        languagesContainer.classList.add('languages_details');

        languages.forEach(skill => {
            const eachSkillDetail = document.createElement('div');

            const eachSkillDetailText = document.createElement('div');

            const h1 = document.createElement('h1');
            h1.textContent = skill.name;

            const p = document.createElement('p');
            p.textContent = skill.experience;

            eachSkillDetailText.appendChild(h1);
            eachSkillDetailText.appendChild(p);

            eachSkillDetail.appendChild(eachSkillDetailText);

            languagesContainer.appendChild(eachSkillDetail);
        });

        const existinglanguagesDetails = document.querySelector('.languages_section');
        if (existinglanguagesDetails) {
            existinglanguagesDetails.appendChild(languagesContainer);
        }
    }, []);

    return (
        <section id='Education'>
            <div className="education_history_top_small_screen" > 
                <h1>My Education History</h1>
            </div>
            <div className='education_history_top hidden'>
                <div class="animated-text">
                    Studied @ <span></span>
                </div>
            </div>
            <div className='education_history_bottom'>
                <div class="education_history_details card hidden">

                    <div class="education_history_details_header"> 
                        <img
                            src={education}
                            alt="Education icon"
                        />
                        <h1>Education</h1>
                    </div>

                    <p><br></br></p>
                    
                    <p className='p1'>Bachelor's Degree in Computer Science, National University of Singapore, Singapore</p>
                    <p className='p2'>June 2022 — June 2026</p>
                    <p className='p2'>With a 2nd Major in Business Managment</p>

                    <p><br></br></p>

                    <p className='p1'>A Levels, Taylor's University College, Selangor, Malaysia</p>
                    <p className='p2'>August 2019 — May 2021</p>
                    <p className='p2'>Obtained High Achiever's Award; Top in Malaysia for Computing</p>

                </div>

                <div class="languages_section card hidden">
                    <div class="languages_section_header"> 
                        <img
                            src={checkmark}
                            alt="Checkmark icon"
                        />
                        <h1>Languages</h1>
                    </div>

                    <p><br></br></p>
                </div>

                <div class="skills_section card hidden">
                    <div class="skills_section_header"> 
                        <img
                            src={skill}
                            alt="Skills icon"
                        />
                        <h1>Skills</h1>
                    </div>

                    <p><br></br></p>
                    
                    <div className="skills_containter">
                        <div className="skill">
                        <li><h3>Communication</h3> 
                            <span class="bar"><span class="Communication"></ span></span>
                        </li>
                        </div>
                        <li><h3>Creativity</h3> 
                            <span class="bar"><span class="Creativity"></ span></span>
                        </li>
                        <li><h3>Leadership</h3> 
                            <span class="bar"><span class="Leadership"></ span></span>
                        </li>
                        <li><h3>Time Management</h3> 
                            <span class="bar"><span class="Time_Management"></ span></span>
                        </li>
                        <li><h3>Adaptability</h3> 
                            <span class="bar"><span class="Adaptability"></ span></span>
                        </li>
                        <li><h3>Multitasking</h3> 
                            <span class="bar"><span class="Multitasking"></ span></span>
                        </li>
                        <li><h3>Organizational</h3> 
                            <span class="bar"><span class="Organizational"></ span></span>
                        </li>
                        <li><h3>Analytical Skills</h3> 
                            <span class="bar"><span class="Analytical_Skills"></ span></span>
                        </li>
                        <li><h3>Critical Thinking</h3> 
                            <span class="bar"><span class="Critical_Thinking"></ span></span>
                        </li>
                        <li><h3>English</h3> 
                            <span class="bar"><span class="English"></ span></span>
                        </li>
                        <li><h3>Chinese</h3> 
                            <span class="bar"><span class="Chinese"></ span></span>
                        </li>
                        <li><h3>Malay</h3> 
                            <span class="bar"><span class="Malay"></ span></span>
                        </li>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}