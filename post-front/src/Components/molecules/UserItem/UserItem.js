import React from 'react';
import './UserItem.css';

const UserItem = ({ user }) => {
    const { company, postUser } = user;
    return (
        <div className="userItem">
            <p>Nome do funcionário: {user.name}</p>
            <p>Nome da empresa: {company.name}</p>
            <p>Nº de post {postUser.length} </p>
        </div>
    );
};

export default UserItem;