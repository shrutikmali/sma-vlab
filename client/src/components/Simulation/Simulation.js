import React, { useState } from 'react';
import './simulation.css';

const Simulation = () => {

  const [edges, setEdges] = useState([]);
  const [nodeCount, setNodeCount] = useState(null);
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [id, setId] = useState(0);
  const [image, setImage] = useState('');
  const [measures, setMeasures] = useState('');

  const addEdge = () => {
    setEdges([...edges, {id, source, destination}]);
    setId(id + 1);
    setSource('');
    setDestination('');
  }

  const deleteEdge = (toDelete) => {
    const newEdges = edges.filter(edge => edge.id !== toDelete);
    setEdges(newEdges);
  }

  const getMeasures = async () => {
    await fetch('http://127.0.0.1:5000/createGraph', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({nodes: nodeCount, edges: edges})
    })
    .then(res => res.json())
    .then(data => {
      let graphMeasures = `
      <table border='1' className='measures'>
        <th>Node</th>
        <th>Degree</th>
        <th>Closeness</th>
        <th>Betweenness</th>
        <th>Eigenvector</th>
        <th>Katz</th>
        <th>Pagerank</th>
      `;
      for(let i = 0; i < nodeCount; i++) {
        graphMeasures += `
          <tr>
            <td>${i}</td>
            <td>${Math.round(data.degree_centrality[i] * 1000) / 1000}</td>
            <td>${Math.round(data.closeness_centrality[i] * 1000) / 1000}</td>
            <td>${Math.round(data.betweeness_centrality[i] * 1000) / 1000}</td>
            <td>${Math.round(data.eigenvector_centrality[i] * 1000) / 1000}</td>
            <td>${Math.round(data.katz_centrality[i] * 1000) / 1000}</td>
            <td>${Math.round(data.pagerank_centrality[i] * 1000) / 1000}</td>
          </tr>
        `;
      }
      graphMeasures += '</table>'

      setMeasures(graphMeasures);
      setImage('data:image/png;base64,' + data.image);
    });
  }

  const reset = () => {
    setEdges([]);
    setNodeCount('');
    setSource(null);
    setDestination(null);
    setId(0);
    setImage('');
    setMeasures('');
  }

  return (
    <div className='simulation-root'>
      <div className='edges-container'>
        <div className='edge-input'>
          <label for='node-count'>Node count: </label>
          <input id='node-count' type='number' value={nodeCount} onChange={(e) => setNodeCount(parseInt(e.target.value))} />

          <label for='source-input'>Source: </label>
          <input id='source-input' type='number' value={source} onChange={(e) => setSource(parseInt(e.target.value))}/>

          <label for='dest-input' >Destination: </label>
          <input id='dest-input' type='number' value={destination} onChange={(e) => setDestination(parseInt(e.target.value))}/>

          <button onClick={addEdge}>Add edge</button>

          <button onClick={getMeasures}>Get measures</button>

          <button onClick={reset}>Reset</button>

        </div>
        <table className='edge-list' border='1'>
          <th>Source</th>
          <th>Destination</th>
          <th>Action</th>
        {edges.map(edge => (
          <tr>
            <td>{edge.source}</td>
            <td>{edge.destination}</td>
            <td><button onClick={() => deleteEdge(edge.id)}>Delete</button></td>
          </tr>
        ))}
        </table>
      </div>
      <div className='results'>
        <div className='graph'>
          {image ? <img src={image} width={500}/> : <p style={{color: 'grey'}}>Generate graph to see image</p>}
        </div>
        <div dangerouslySetInnerHTML={{__html: measures}}></div>
      </div>
    </div>
  );
}

export default Simulation;