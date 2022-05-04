// must have!?
import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

// styles
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <div>
        <NavBar/>
        <Header/> 
        <Link to='/list' className='button'>Try it now</Link>
        {/* <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
        </ul> */}
        </div>
    );
}
 
export default HomePage;