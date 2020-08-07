import React from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar'
import {Link} from 'react-router-dom';
import './Chat.css';

function Chat({name, message, profile, timestamp}) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Avatar alt={name} src={profile}/>
                <div className="chat__data">
                    <h3>{name}</h3>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp"> {timestamp} </p>
            </div>
        </Link>
    )
}

export default Chat;
