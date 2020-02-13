import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const imgUrl = 'https://res.cloudinary.com/argordon/image/upload/v1569615141/portfolio%20website/3476-bw_h18tup.jpg';

const Rail = () => {
    return (
        <div className='rail-container'>
            <Card>
                <Image src={imgUrl} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>ALEX GORDON</Card.Header>
                    <Card.Description>
                        Web Developer
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href="#">Tweet</a>
                    <a href="#">Linkd</a>
                    <a href="#">Git</a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default Rail;
