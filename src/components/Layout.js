import React from 'react'
import NavBar from './Navbar'

function Layout(props){
//const children = props.children;

    return(
        <div>
            <NavBar/>
            {props.children}

        </div>
    );
}

export default Layout;