import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Tab } from 'semantic-ui-react';

const panes = [
    {
      menuItem: 'About',
      render: () => (
        <Tab.Pane attached={false}>
            <About />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Projects',
      render: () => (
        <Tab.Pane attached={false}>
            <Projects />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Contact',
      render: () => (
        <Tab.Pane attached={false}>
            <Contact />
        </Tab.Pane>
      )
    },
]

const Nav = () => {
    return (
        <div className='nav-container'>
            <Tab menu={{ attached: false }} panes={panes} />
        </div>
    )
}

export default Nav;
