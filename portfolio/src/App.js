import React from 'react';
import Home from './components/pages/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)



function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
