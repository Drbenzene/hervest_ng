import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


const Plans = lazy(() => import('../../pages/plans/plans'))
const Plan = lazy(() => import('../../pages/plans/plan'))

// const defaultPath = 'user/'

function UserRoute() {
    return (
        <Suspense fallback={''}>
            <Routes>
                <Route path={'/'} element={<Plans/>} />
                <Route path={'plan/:type'} element={<Plan/>} />
            </Routes>
        </Suspense>
    );
}

export default UserRoute