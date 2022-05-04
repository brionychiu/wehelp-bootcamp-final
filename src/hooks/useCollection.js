import { useState , useEffect , useRef } from 'react'
import { db } from '../firebase/config'

// firebase imports
import { collection , onSnapshot , query , where } from 'firebase/firestore'

export const useCollection = (c , _q) => {
    const [ documents , setDocuments ] = useState(null)
    // 原本_q 是 array , reference type , will cause usEffect infinite loop , so set useRef
    const q = useRef(_q).current
    
    useEffect(() => {
        /* c = collection , 要跟上面import的名稱不同,因為引入參數,若之後c !='book
        還可以重複使用*/
        let ref = collection(db,c)

        if (q) {
            ref = query(ref , where(...q))
        }
        // onSnapshot作用:realtime data
        const unsub = onSnapshot(ref , (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(),id:doc.id})
            });
            setDocuments(results)

        })
        return () => unsub()
    },[c,q])

    return { documents }
}
 
