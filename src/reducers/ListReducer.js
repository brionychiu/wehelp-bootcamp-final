import { v4 as uuid } from 'uuid'

export const ListReducer = (state,action) => {
    switch(action.type){
        case 'ADD_MEMO':
            return [...state , {
                memo:action.item.memo,
                id:uuid()
            }]
        case 'REMOVE_MEMO':
            return state.filter(item => item.id !== action.id)
        default:
            return state
    }
    
}
