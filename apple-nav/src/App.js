import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper.js';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <div>
      <NavWrapper/>
    </div>
  );
}

export default App;
