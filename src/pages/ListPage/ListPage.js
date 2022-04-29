import React from 'react';
import { Link } from 'react-router-dom'
import List from '../../components/List'
import Edit from '../../components/Edit'
import ListContextProvider from '../../contexts/ListContext';


const ListPage = () => {
    return ( 
        <div className='list-box'>
            <ListContextProvider>
                <h1>My to-do List</h1>
                <Edit/>
                <hr/>
                <List/>
                <Link to='/' className='button'> back to home </Link>
            </ListContextProvider>
        </div>
     );
}
 
export default ListPage;