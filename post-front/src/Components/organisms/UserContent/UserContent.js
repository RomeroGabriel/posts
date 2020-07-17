import React from 'react';
import UserItem from '../../molecules/UserItem/Index';

const UserContent = ({ users = [] }) => {
    return (
        <>
            {users.length === 0 ?
                <p>Sem dados</p> :
                <div>
                    {users.map((u, index) =>
                        <UserItem
                            key={index}
                            user={u}
                        />)}
                </div>
            }
        </>
    )
};

export default UserContent;