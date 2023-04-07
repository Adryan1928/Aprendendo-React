import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanegesMap  from './pages/OrphanegesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes1 () {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' Component={Landing} />
                    <Route path='/app' Component={OrphanegesMap} />
                    <Route path='/orphanages/create' Component={CreateOrphanage} />
                    <Route path='/orphanages/:id' Component={Orphanage} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes1;