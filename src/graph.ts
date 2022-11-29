import { Edge, Vertex, WeightedGraph } from './interfaces/weighted-graph';

export class Graph implements WeightedGraph {
  private readonly graph: Map<Vertex, Edge[]> = new Map();

  constructor(private isDirected: boolean = false) {}

  addVertex(key: Vertex): void {
    if (this.graph.has(key)) {
      return;
    }
    this.graph.set(key, []);
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number): void {
    if (!this.graph.has(vertex1) || !this.graph.has(vertex2)) {
      throw new Error('Graph does not contain input vertices.');
    }
    this.addGraphEdge(vertex1, vertex2, weight);
    if (!this.isDirected) {
      this.addGraphEdge(vertex2, vertex1, weight);
    }
  }

  private addGraphEdge(vertex1: Vertex, vertex2: Vertex, weight: number) {
    const adjList = this.graph.get(vertex1);
    if (adjList && !adjList.find((v) => v.to === vertex2)) {
      adjList.push(new Edge(vertex2, weight));
    }
  }

  getAdjacencyList(): Map<Vertex, Edge[]> {
    return this.graph;
  }
}
