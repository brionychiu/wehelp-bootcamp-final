import React from 'react';
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
            </ListContextProvider>
        </div>
     );
}
 
export default ListPage;