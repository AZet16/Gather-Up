import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegAndLog from './pages/RegAndLogin';


const App = () => {
    return <div>
        <BrowserRouter>
        
            <Route path="/home" exact component={Home} />
            <Route path="/regandlog" exact component={RegAndLog} />
        
        </BrowserRouter>
    </div>
}