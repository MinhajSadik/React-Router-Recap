import React from 'react';
import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setFriends(data))
    }, [])
    const homeStyle = {
        textAlign: 'center',
        border: '3px solid black',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={homeStyle}>
            <h1> Available Friends : {friends.length}</h1>
            {
                friends.map(friend => <Friends friend={friend} />)
            }
        </div>
    );
};

export default Home;