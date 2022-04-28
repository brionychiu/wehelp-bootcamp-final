import React , { useContext ,useState }from 'react';
import { ListContext } from '../contexts/ListContext';

const Edit = () => {
    const { dispatch } = useContext(ListContext)
    const [ memo , setMemo ] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'ADD_MEMO',item:{
            memo:memo
        }})
        setMemo('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Please tap in ...' value={memo}
            onChange={(e)=> setMemo (e.target.value)} required/>
            <input type='submit' value='add'/>
        </form>
     );
}
 
export default Edit;