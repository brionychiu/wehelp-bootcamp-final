import React from 'react';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import ListPage from './src/pages/ListPage/ListPage';
import HomePage from './src/pages/HomePage/HomePage';
// import Login from './src/pages/Login/Login';
// import Signup from './src/pages/Signup/Signup';

const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    {/* <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup/>}/> */}
                    <Route path='/list' element={<ListPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
     );
}
 
export default App;