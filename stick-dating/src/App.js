import Home from './Components/Homepage'
import Login from './Components/Login'
import Dashboard from './Components/Dash'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;