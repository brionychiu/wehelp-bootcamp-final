import React ,{ useContext }from 'react';
import { ListContext } from '../contexts/ListContext';
import AItem from './AItem';

const List = () => {
    const { items } = useContext(ListContext)
    return items.length ? ( 
        <div>
            <ul>
                { items.map((item) => (
                    <AItem item={item} key={item.id}/>
                ))}
            </ul>
        </div>
     ):(
        <h3 className='empty'> Take a break ٩(●ᴗ●)۶</h3>
     );
}
 
export default List;