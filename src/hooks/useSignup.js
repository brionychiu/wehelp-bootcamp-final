import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
    const [ error , setError ] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = (email , password) => {
        // 每次的登入 都要先重置error=null
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({type:'LOGIN' , payload:res.user})
            })
            .catch((err) => {
                setError(err.message)
            })
            
    } 

    return { error , signup }
} 