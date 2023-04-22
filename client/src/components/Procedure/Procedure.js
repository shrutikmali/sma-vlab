import React from 'react';

const Procedure = () => {
  return (
    <div style={{padding: '12px'}}>
      <h2>Procedure</h2>
      <ol style={{margin: '16px'}}>
        <li>Set the number of nodes using 'Node count' field</li>
        <li>Add undirected edges using 'Source' and 'Destination' fields</li>
        <li>Click on 'Add edge' button to add edge</li>
        <li>You can delete an edge using the 'Delete' button</li>
        <li>Click on 'Get measures' to get various centrality measures along with a representation of graph</li>
        <li>Click on 'Reset' button to reset the graph</li>
      </ol>
    </div>
  );
}

export default Procedure;