import React from 'react';
import { Message, Icon, Header } from 'semantic-ui-react';
import '../styles/register.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <Header as='h2' icon textAlign='center'>
                <Icon name='user secret' circular />
                <Message size='massive'>Not Found</Message>
            </Header>
        </div>
    )
}

export default NotFoundPage;