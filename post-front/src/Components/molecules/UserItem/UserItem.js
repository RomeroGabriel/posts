import React from 'react';
import './UserItem.css';

const UserItem = ({ user }) => {
    const { company } = user;
    return (
        <div className="userItem">
            <p>Nome do funcionário: {user.name}</p>
            <p>Nome da empresa: {company.name}</p>
        </div>
    );
};

export default UserItem;