import React from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import { Tab } from 'semantic-ui-react';

const panes = [
    {
      menuItem: { key: 'about', icon: 'users', content: 'ABOUT' },
      render: () => (
        <Tab.Pane attached={false}>
            <About />
            <Footer />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'projects', icon: 'briefcase', content: 'PROJECTS' },
      render: () => (
        <Tab.Pane attached={false}>
            <Projects />
            <Footer />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'resume', icon: 'file alternative', content: 'RESUME' },
      render: () => (
        <Tab.Pane attached={false}>
            <Resume />
            <Footer />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'contact', icon: 'comments', content: 'CONTACT' },
      render: () => (
        <Tab.Pane attached={false}>
            <Contact />
            <Footer />
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
