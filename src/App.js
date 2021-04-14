
import React from 'react'
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import { Route, Switch } from 'react-router-dom';
import Register from './components/pages/Register';
// import Mystatic from './components/Mystatic';
import Search from './components/pages/Search'
import CreateShop from './components/CreateShop';
import PageNotFound from './components/pages/PageNotFound';



const App=()=> {
  return (
    <>
  
    <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/Dashboard/" component={Dashboard} />
      <Route exact path="/Dashboard/Profile" component={Dashboard} />
      <Route exact path="/Dashboard/Additem" component={Dashboard} />
      <Route exact path="/Dashboard/Myitem" component={Dashboard} />
      <Route exact path="/Dashboard/Mystatic" component={Dashboard} />
      <Route exact path="/Register/" component={Register} />
      <Route exact path="/Register/Signin" component={Register} />
      <Route exact path="/Register/Forget" component={Register} />
      <Route exact path="/Register/CreateShop" component={CreateShop} />
      <Route exact path="/Search/" component={Search} />
      <Route exact path="/Search/explore" component={Search} />
      <Route  component={PageNotFound} />
    </Switch >
    
  
    </>
  );
}

export default App;
