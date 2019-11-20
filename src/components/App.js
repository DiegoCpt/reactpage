import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound'


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/Badges" component={Badges} />
                    <Route exact path="/badge/new" constant={BadgeNew}></Route>
                    <Route component={NotFound}/>

                </Switch>
            </Layout>
        </BrowserRouter>


    )
}

export default App;