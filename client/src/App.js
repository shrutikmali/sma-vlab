import { useState } from 'react';
import './App.css';
import Theory from './components/Theory/Theory';
import Procedure from './components/Procedure/Procedure';
import Simulation from './components/Simulation/Simulation';

function App() {

  const [showTheory, setShowTheory] = useState(true);
  const [showProcedure, setShowProcedure] = useState(false);
  const [showSimulation, setShowSimulation] = useState(false);

  return (
    <>
      <div className='nav-bar'>
        <h2>Network Measures</h2>
        <div className='nav-button-group'>
          <button className='nav-button' onClick={() => {setShowTheory(true); setShowProcedure(false); setShowSimulation(false)}}>Theory</button>
          <button className='nav-button' onClick={() => {setShowTheory(false); setShowProcedure(true); setShowSimulation(false)}}>Procedure</button>
          <button className='nav-button' onClick={() => {setShowTheory(false); setShowProcedure(false); setShowSimulation(true)}}>Simulation</button>
        </div>
      </div>
      {showTheory && <Theory />}
      {showProcedure && <Procedure />}
      {showSimulation && <Simulation />}
    </>
  );
}

export default App;
