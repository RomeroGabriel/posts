import React from 'react';
import UserItem from '../../molecules/UserItem/Index';
import './UsersContent.css';

const UserContent = ({ users = [] }) => {
    return (
        <div className="usersContent">
            {users.length === 0 ?
                <></> :
                <div>
                    {users.map((u, index) =>
                        <UserItem
                            key={index}
                            user={u}
                        />)}
                </div>
            }
        </div>
    )
};

export default UserContent;