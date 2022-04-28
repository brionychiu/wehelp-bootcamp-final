import React ,{ useContext }from 'react';
import { ListContext } from '../contexts/ListContext';

const AItem = ({ item }) => {
    const { dispatch } = useContext(ListContext)
    return ( 
        <li>
            <h3>{item.memo}</h3>
            <button onClick={() => dispatch(
                {type:'REMOVE_MEMO',id:item.id})}>
                delete
            </button>
        </li>
     );
}
 
export default AItem;