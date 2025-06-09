
import React, {useState, useContext} from 'react'
import UserContext from './UserContext'

function Login() {
    const [ usename, setUsername] =useState('')
    const [ password, setPassword] = useState('')
    
   const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
          e.preventDefault()
          setUser({usename, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={usename}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username' />
        {" "}
        <input type="text" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />

        <button onClick={{handleSubmit}}>Submit</button>
    </div>
  )
}

export default Login