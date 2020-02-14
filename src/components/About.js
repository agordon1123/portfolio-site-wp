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
                <p>In cillum veniam mollit dolore Lorem laborum nostrud id eiusmod ullamco deserunt proident irure proident. Cillum anim pariatur velit aliqua. Ad qui aliquip sint consectetur minim. Voluptate laboris excepteur minim cupidatat ut cupidatat pariatur sunt commodo ipsum pariatur Lorem duis.</p>
                <p>In cillum veniam mollit dolore Lorem laborum nostrud id eiusmod ullamco deserunt proident irure proident. Cillum anim pariatur velit aliqua. Ad qui aliquip sint consectetur minim. Voluptate laboris excepteur minim cupidatat ut cupidatat pariatur sunt commodo ipsum pariatur Lorem duis.</p>
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
