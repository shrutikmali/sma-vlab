from flask import Flask, request, jsonify
from flask_cors import CORS
import networkx as nx
import matplotlib
import matplotlib.pyplot as plt
import base64
import os

app = Flask(__name__)
cors = CORS(app)
matplotlib.use('Agg')

@app.route("/")
def hello_world():
  return "Hello world"



@app.route("/createGraph", methods=['POST'])
def create_graph_and_calculate_measures():
  if request.method == 'POST':
    data = request.get_json()
    graph = nx.Graph()
    nodes = data['nodes']
    graph.add_nodes_from(list(range(nodes)))

    edges = []
    req_edges = data['edges']
    for edge in req_edges:
      edges.append((edge['source'], edge['destination']))
    graph.add_edges_from(edges)

    # Draw graph
    nx.draw(graph, with_labels=True, font_color="whitesmoke")
    if os.path.exists('graph.png'):
      os.remove('graph.png')
    plt.savefig('graph.png')
    plt.clf()
    image_file = open('./graph.png', 'rb')
    image_encoded = base64.b64encode(image_file.read()).decode('utf-8')

    
    # Get measures
    degree_centrality = nx.degree_centrality(graph)

    eigenvector_centrality = nx.eigenvector_centrality(graph)

    # eigenvalues = nx.adjacency_spectrum(graph)
    # max_eigenvalue = eigenvalues[0]
    # for eigenvalue in eigenvalues:
    #   max_eigenvalue = max(max_eigenvalue, abs(eigenvalue))
    # alpha = 1 / max_eigenvalue

    katz_centrality = nx.katz_centrality(graph)

    closeness_centrality = nx.closeness_centrality(graph)

    betweeness_centrality = nx.betweenness_centrality(graph)

    pagerank = nx.pagerank(graph)

    # print(request.get_json())
    return jsonify({
      'res': 1,
      'degree_centrality': degree_centrality,
      'eigenvector_centrality': eigenvector_centrality,
      'katz_centrality': katz_centrality,
      'closeness_centrality': closeness_centrality,
      'betweeness_centrality': betweeness_centrality,
      'pagerank_centrality': pagerank,
      'image': image_encoded
    })
