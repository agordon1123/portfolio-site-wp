import React from 'react';
import { Header } from 'semantic-ui-react';

const resumeLink = 'https://res.cloudinary.com/argordon/image/upload/v1581651815/portfolio%20website/alex-gordon-resume.pdf'

const Resume = () => {
    return (
        <div className='resume-container'>
            <Header as='h1'>Resume</Header>
            <iframe src={resumeLink} scrolling="no" frameBorder='0' />
        </div>
    )
}

export default Resume;
