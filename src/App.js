import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ServiceOrdersListComponent from './components/service-orders/service-orders-list';
import HomeComponent from './components/home/home-component';
import ServiceOrderDetailComponent from './components/service-orders/service-order-detail';
import NotFoundComponent from './components/errors/not-found';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/serviceOrders/bucket/:bucket/businessUnit/:businessUnit/status/:status" component={ServiceOrdersListComponent} />
          <Route exact path="/serviceOrders/:id" component={ServiceOrderDetailComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div >

    );
  }
}

export default App;