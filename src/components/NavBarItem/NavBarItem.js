import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const NavBarItem = ({elements}) => {

    
    return (
    <>
        {
            elements.length > 0
            ? elements.map(item => 
                
                <li key={item.id} className="nav-item">
                    <Link className="nav-link" to={`/category/${item.categoria_id}`} role="button">{item.nombre}</Link>
                </li>    
            )
            : ''
        }

        
    </>
  )

};
export default NavBarItem;