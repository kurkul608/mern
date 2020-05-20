import {useState, useCallback, useEffect} from 'react'
export const useAuth = () =>{
    const storageName = 'userData'
    const [token, setToken] = useState(null)
    const [userId, setUseIid] = useState(null)
    const login = useCallback((jwtToken, id)=>{
        setToken(jwtToken)
        setUseIid(id)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            token: jwtToken
        }))
    }, [])
    const [ready, setReady] = useState(false)
    const logout = useCallback(()=>{
        setToken(null)
        setUseIid(null)

        localStorage.removeItem(storageName)
    }, [])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token){
            login(data.token, data.userId)
        }
        setReady(true)
    }, [login])
    return { login, logout, token, userId, ready }
 }