export class Vertex {
  constructor(public readonly id: string) {}
}

export class Edge {
  constructor(public readonly to: Vertex, public readonly weight: number) {}
}

export interface WeightedGraph {
  addVertex(key: Vertex): void;
  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number): void;
  getAdjacencyList(): Map<Vertex, Edge[]>;
}
