import React from  'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetaulPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'

export  const useRoutes = isAuthentificated => {
    if (isAuthentificated){
        return(
            <Switch>
                <Route path='/links' exact>
                    <LinksPage />
                </Route>
                <Route path='/create' exact>
                    <CreatePage />
                </Route>
                <Route path='/detail/:id'>
                    <DetaulPage />
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path="/" exact>
                <AuthPage  />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}