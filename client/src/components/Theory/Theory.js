import React from 'react';

const Theory = () => {
  return (
    <div style={{padding: '12px'}}>
      <h2>Theory</h2>
      <br />
      <br />
      <h3>What are network measures?</h3>
      <p>Network measures are metrics that are used to evaluate the structure and behavior of social networks, which are formed by users and their connections with each other. These measures can provide insights into the dynamics and characteristics of social networks, and can help researchers or practitioners to better understand and analyze social media data.</p>
      <br />
      <br />
      <h3>What are centrality measures?</h3>
      <p>Centrality measures are used to identify users who are most important or influential within a social network. These measures can help researchers or practitioners to better understand the structure and dynamics of social networks, and to identify key players or trends within these networks.</p>
      <br />
      <br />
      <h3>What is degree centrality?</h3>
      <p>This measures the number of direct connections (i.e., friends, followers, etc.) a user has in a social network. A user with high degree centrality is well-connected and potentially influential within the network.</p>
      <br />
      <br />
      <h3>What is betweenness centrality?</h3>
      <p>This measures the extent to which a user serves as a bridge or intermediary between other users in the network. A user with high betweenness centrality may have a significant impact on the flow of information or influence within the network.</p>
      <br />
      <br />
      <h3>What is closeness centrality?</h3>
      <p>Closeness centrality is a measure of the degree to which a node in a network is close to all other nodes in the network. It is based on the idea that nodes that are closer to other nodes can more easily communicate or interact with them, and therefore may be more central or important within the network.</p>
      <br />
      <br />
      <h3>What is eigenvector centrality?</h3>
      <p>Eigenvector centrality measures a user's influence based on the influence of their connections. A user with high eigenvector centrality has connections to other influential users, which increases their own influence within the network.</p>
      <br />
      <br />
      <h3>What is Katz centrality?</h3>
      <p>Katz centrality is a measure of node centrality in a network that takes into account both the number and quality of a node's connections to other nodes. It is based on the idea that a node's importance is determined not only by the number of connections it has, but also by the importance of the nodes it is connected to.</p>
    </div>
  )
}

export default Theory;