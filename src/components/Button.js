import React from 'react';
import { BrowserRouter , Route ,Switch ,Link} from 'react-router-dom'
import ListPage from '../pages/ListPage/ListPage'

const Button = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Link to='/todolist' className='button'>Try it now</Link>
                <Switch>
                    <Route path='/todolist'>
                        <ListPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

     );
}

export default Button;