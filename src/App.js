
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

import MiniDrawer from './componets/Drawer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ListVehiculo from './componets/ListVehiculo';

function App() {

  return (
    <div >
      <BrowserRouter>
        <MiniDrawer></MiniDrawer>
        <Switch>
          <Route exact path={["/","/home"]} component={ListVehiculo}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
