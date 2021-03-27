import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/Home';

export default function OtherRoutes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={ Home } />
        </BrowserRouter>
    );
}