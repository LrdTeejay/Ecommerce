import './App.css'
import AuthContext from './context/auth-context'
import { Route } from './routes/route'


function App() {

  return (
    <div className=''>
      <AuthContext>
        <Route />
      </AuthContext>
    </div>
  )
}

export default App
