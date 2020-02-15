import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { services } from '../data/services';
import { skills } from '../data/skills';

const About = () => {
    return (
        <div className='about-container'>
            <Header as='h1'>About Me</Header>
            <div className='about-details'>
                <p><span>Full Name</span>: Alex Gordon</p>
                <p><span>Job</span>: Freelancer</p>
                <p><span>Location</span>: Charleston, SC</p>
                <p><span>Status</span>: Available</p>
                <p><span>Gmail</span>: argordon.dev</p>
                <p><span>Zoom</span>: agordon1123</p>
            </div>
            <div className='about-description'>
                <Header as='h2'>I'm a Web Developer</Header>
                <p>I am a full-stack web developer with a passion for creative problem solving. I use a range of technologies and programming languages to create websites and applications that responsivley deliver content with an excellent user experience.</p>
                <p>I've always loved working with my hands. Before studying programming and computer science, I worked in the swimming pool industry for 6 years as a service technician, and more recently service manager, where I got to develop skills in plumbing, electrical, and gas installation and troubleshooting (feel free to leave your pool questions in the contact section).</p>
            </div>
            <div className='about-services'>
                {
                    services.map((el, i) => {
                        return (
                            <div className='service'>
                                <div className='icon-background'>
                                    <Icon name={el.icon} />
                                </div>
                                <div className='service-description'>
                                    <Header as='h3'>{el.title}</Header>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='about-skills'>
                {
                    skills.map((el, i) => {
                        return (
                            <Icon name={el} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About;
