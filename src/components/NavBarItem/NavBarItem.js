import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const NavBarItem = ({elements}) => {

  console.log(elements);
  return (
    <>
        {
            elements.length > 0
            ? elements.map(item => 
                <li className="nav-item">
                    <Link className="nav-link" to="/category/2" role="button">{item.title}xxx</Link>
                </li>    
            )
            : ''
        }

        
    </>
  )

};
export default NavBarItem;