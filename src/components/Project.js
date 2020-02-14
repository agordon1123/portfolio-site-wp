import React from 'react';
import { Item, Icon } from 'semantic-ui-react';

const Project = props => {
    const { data } = props;

    return (
        <div className='project-container'>
            <Item.Group>
                <Item>
                    <Item.Image size='medium' src={data.mockup} />
                    <div className='project-description'>
                        <Item.Header
                            as='a'
                            href={data.href}
                            target='_blank'
                        >
                            {data.name}
                        </Item.Header>

                        <Item.Description>
                            <p>{data.description}</p>
                            <p className='stack'>{data.stack}</p>
                            <a href={data.code} target='_blank'>
                                <Icon name='code' />
                            </a>
                            <a href={data.href} target='_blank'>
                                <Icon name='linkify' />
                            </a>
                        </Item.Description>
                    </div>
                </Item>
            </Item.Group>
        </div>
    )
}

export default Project;
