import React, { Component } from 'react'
import Header from './Component/Header/Header'
import '../src/Assets/css/all.css'
import '../src/Assets/css/bootstrap.min.css'
import '../src/Assets/css/responsive.css'
import '../src/Assets/css/style.css'
import Sidebar from './Component/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, /*Route*/ } from "react-router-dom";
import RoutingOfComponent from './Component/Routing/RoutingOfComponent'

class App extends Component {
  render() {
    return (

      // <>
      //   <Header />
      //   <Sidebar />
      //   </>

      <Router>
        <Switch>
          {
            Object.keys(RoutingOfComponent).map(function (key) {
              var Routing = RoutingOfComponent[key];
              return <Routing.layoutName path={`/${key}`} component={Routing.componentName} key={key} {...Routing} />
            })
          }
        </Switch>
      </Router>
      
    );
  }
}

export default App;
