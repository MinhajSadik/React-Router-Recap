import React from 'react';

const Friends = (props) => {
    const { id, title, url, thumbnailUrl} = props.friend;
    const friendStyle = {
        border: '2px solid blue',
        borderRadius: '15px',
        padding: '15px',
        margin: '15px'
    }
    return (
        <div style={friendStyle}>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h3>{url}</h3>
            <img src={thumbnailUrl} alt=""/>
        </div>
    );
};

export default Friends;