import './App.css';

import React from  'react'

import Contador from './components/Contador'
import Card from './components/layouts/Card'

export default () => (
  <div className="App">
    <h1>Contador</h1>
    <div className="Cards">
      <Card titulo="Contador Componentizado" color="#0d3024">
        <Contador numeroinicial={10}/>
      </Card>
    </div>
  </div> 
);
