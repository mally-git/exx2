import React, { useContext, useEffect, useRef } from "react"

import User from './useContext'

function Login() {
    const { user, setuser } = React.useContext(User)
    const name = useRef()
    const password = useRef()
    useEffect(() => 
        console.log(user), [user])
    return (
        <>
            <label>Name:</label>
            <br />
            <input ref={name}></input>
            <br />
            <label>Password:</label>
            <br />
            <input ref={password}></input>
            <button onClick={() => { setuser({ name: name.current.value, password: password.current.value }) }}>Login</button>
        </>

    )
}
export default Login