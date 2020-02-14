import React from 'react';
import Project from './Project';
import { Header, Divider } from 'semantic-ui-react';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <div className='projects-container'>
            <Header as='h1'>Projects</Header>
            <div className='projects'>
                <Project data={projects[0]} />
                <Divider />
                <Project data={projects[1]} />
                <Divider />
                <Project data={projects[3]} />
                <Divider />
                <Project data={projects[4]} />
            </div>
        </div>
    )
}

export default Projects;
