import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../components/Login';

export default function SignRoutes(){
    return(
        <BrowserRouter>
            <Route PATH="/" component={ Login } />
        </BrowserRouter>
    );
}