import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import {NotFound} from './NotFound'
import {ROOT, DASHBOARD, PAGE1} from "./CONSTANTS"
import { Page1 } from '../pages/Page1'

export const RouterConfig:React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Home} />
                <Route exact path={DASHBOARD} component={Dashboard} />
                <Route exact path={PAGE1} component={Page1} />

                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </div>
    )
}
