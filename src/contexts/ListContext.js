import React ,{ createContext ,useReducer ,useEffect} from 'react';
import { ListReducer } from '../reducers/ListReducer'

export const ListContext = createContext();

const ListContextProvider = (props) => {
    const [ items , dispatch ] = useReducer(ListReducer, [] ,() =>{
        const localData = localStorage.getItem('items')
        return localData ? JSON.parse(localData):[]
    })
    useEffect(() => {
        localStorage.setItem('items',JSON.stringify(items))
    },[items])
    return(
        <ListContext.Provider value={{items , dispatch}}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContextProvider
