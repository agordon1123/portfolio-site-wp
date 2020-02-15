import React, { useState } from 'react';
import { Header, Form, Icon, Loader, Dimmer } from 'semantic-ui-react';
import axios from 'axios';

const initialState = {
    name: '',
    email: '',
    message: ''
};

const Contact = () => {
    const [packet, setPacket] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [charCount, setCharCount] = useState({ chars: 0 });
    
    const handleChange = e => {
        setPacket({
            ...packet,
            [e.target.name]: e.target.value
        })
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        axios.post(process.env.REACT_APP_DB_URL, packet)
            .then(res => {
                setLoading(false);
                // TODO: create toast
                alert(res.data.message);
                setPacket(initialState);
                setCharCount({ chars: 0 });
            })
            .catch(err => {
                setLoading(false);
                alert(err.message);
            });
    };

    const handleCharCount = e => {
        setCharCount({
            ...charCount,
            chars: e.target.value.length
        });
    };

    return (
        <div className='contact-container'>
            <Header as='h1'>Contact</Header>
            <div className='contact-details-container'>
                <Header as='h2'>Contact Info</Header>
                <p><span>Location</span>: Charleston, SC</p>
                <p><span>Status</span>: Available</p>
                <p><span>Email</span>: argordon.dev@gmail.com</p>
                <p><span>Zoom</span>: agordon1123</p>
                <div className='contact-links'>
                    <a href="https://www.twitter.com/argordondev" target='_blank'>
                        <Icon name='twitter square' />
                    </a>
                    <a href="https://www.linkedin.com/in/agordon1123" target='_blank'>
                        <Icon name='linkedin' />
                    </a>
                    <a href="https://www.github.com/agordon1123" target='_blank'>
                        <Icon name='github square' />
                    </a>
                </div>
            </div>
            <div className='form-container'>
                <Header as='h2'>Contact Form</Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid 
                            required
                            label='Name'
                            name='name'
                            value={packet.name}
                            placeholder='Name'
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid 
                            required
                            label='Email'
                            name='email'
                            value={packet.email}
                            placeholder='Email'
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.TextArea 
                        required
                        maxLength={500}
                        label='Message'
                        name='message'
                        value={packet.message}
                        placeholder='How can I help?'
                        onChange={e => {
                            handleChange(e);
                            handleCharCount(e);
                        }}
                    />
                    <p>{charCount.chars}/500</p>
                    <Form.Button type='submit'>SEND A MESSAGE</Form.Button>
                    {/* {loading && (
                        <Dimmer active>
                            <Loader />
                        </Dimmer>
                    )} */}
                </Form>
            </div>
        </div>
    )
}

export default Contact;
