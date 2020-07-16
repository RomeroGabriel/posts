import React from 'react';

const UserContent = ({ users = [] }) => {
    return (
        <div className="row">
            {users.length === 0 ?
                <></> :
                <div>
                    {users.map((u) => {
                        return (
                            <p>oi {u.name}</p>
                        )
                    })}
                </div>
            }
        </div>
    )
};

export default UserContent;