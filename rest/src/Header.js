import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

const Header =(props) => {
    return(
        <>
            <div className="titlecontainer">
            <Link to = "/" >    
                <div className="icon">
                    <b> e! </b>
                </div>
            </Link> 
            <Link to='/viewbooking'> 
                <div className ="orders">
                    <i className="glyphicon glyphicon-shopping-cart"></i>
                    <span>My Cart</span>
                </div>
            </Link>          
              
                

               
            </div> 
               
        </>
    )
}

export default Header;
















