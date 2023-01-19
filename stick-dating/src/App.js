import Home from './Components/Homepage'
import Account from './Components/Account'
import Dashboard from './Components/Dash'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;