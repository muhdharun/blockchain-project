import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './components/App';
import Blockchain from './components/Blockchain';
import ConductTransaction from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/blockchain' component={Blockchain} />
      <Route path='/conduct-transaction' component={ConductTransaction} />
      <Route path='/transaction-pool' component={TransactionPool} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
