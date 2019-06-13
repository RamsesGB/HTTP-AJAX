import React from 'react';
import '../App.css';



function FriendsList(props) {
    return(
        <div>
        {props.friendsData.map(obj => (
            <div key={obj.id} className='friendCard'>
                <p>Name: {obj.name}</p>
                <p>Age: {obj.age}</p>
                <p>E-mail: {obj.email}</p>
            </div>
        ))}
        </div>
    );
}

export default FriendsList;