import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer';

library.add(fab, faEnvelope)



function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
    
    
    
  );
}

export default App;
