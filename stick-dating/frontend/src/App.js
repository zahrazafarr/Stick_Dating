import Home from './Components/Homepage'
import Account from './Components/Account'
import Feed from './Components/Feed'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/feed' element={<Feed/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;