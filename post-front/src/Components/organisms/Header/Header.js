import React from 'react';

const Header = ({ usersTotal }) => {
    return (
        <div className="row justify-content-center">
            {usersTotal === 0 ? 
                <h2>Falha a buscar dados</h2> :
                <h2>Total de usuários: {usersTotal}</h2>
            }
        </div>
    )
};

export default Header;