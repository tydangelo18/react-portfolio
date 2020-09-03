import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)



function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
