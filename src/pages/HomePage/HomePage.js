import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

const HomePage = () => {
    return (
        <div>
        <NavBar/>
        <Header/> 
        <Link to='/list' className='button'>Try it now</Link>
        </div>
    );
}
 
export default HomePage;