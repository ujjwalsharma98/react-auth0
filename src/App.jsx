import { useAuth0 } from "@auth0/auth0-react";
import './App.css'

function App() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <>
      {isAuthenticated && <h1>Hello {user.name}</h1>}
      {isAuthenticated ? 
        <button onClick={() => logout()}>Log Out</button> : 
        <button onClick={() => loginWithRedirect()}>Log In</button>
      }
    </>
  )
}

export default App
