import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanegesMap  from './pages/OrphanegesMap';

function Routes1 () {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' Component={Landing} />
                    <Route path='/app' Component={OrphanegesMap} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes1;