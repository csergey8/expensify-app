import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import 'normalize.css/normalize.css';

import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>This from my dashboard</div>
);

const AddExpensePage = () => (
    <div>This from my AddExpensePage</div>
);

const EditExpensePage = () => (
  <div>This is edit Page </div>
);

const HelpPage = () => (
    <div> This is help page </div>
);

const NotFoundPage = () => (
    <div> 404 </div><Link to="/">Go Home</Link>
);

const routes = ( 
    <BrowserRouter>
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotFoundPage}/>
    </Switch>

    </BrowserRouter>
);



ReactDOM.render( routes, document.getElementById('app'));