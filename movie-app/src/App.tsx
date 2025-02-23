import './App.css'
import Menu from './Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './route-config';

function App() {
    

    return (
        <BrowserRouter>
            <Menu />
            <div className='container'>
            <Routes>
                {routes.map((route) => 
                    <Route key={route.path} path={route.path} element={<route.component/>} />
                )}
            </Routes> 
            </div>
            <footer className='bd-footer py-5 mt-5 bg-light'>
                <div className='container'>
                    Movies Nest {new Date().getFullYear().toString()}
                </div>
            </footer>
        </BrowserRouter>
    )
}

export default App
