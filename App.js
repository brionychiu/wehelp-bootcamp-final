import React from 'react';
import { BrowserRouter , Route ,Switch ,Link } from 'react-router-dom'
import ListPage from './src/pages/ListPage/ListPage';
import HomePage from './src/pages/HomePage/HomePage';

const App = () => {
    return ( 
        <div>
             <BrowserRouter>
             <div>
                <Link exact to='/' > back to home </Link>
                <Link to='/list' className='button'>Try it now</Link>
                
             </div>

                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>

                    <Route path='/list'>
                        <ListPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
     );
}
 
export default App;