import { Vertex } from './weighted-graph';

export interface Path {
  path: string[];
  distance: number;
}

export interface Dijkstra {
  findShortestPath(vertex1: Vertex, vertex2: Vertex): Path;
  findAllShortestPaths(vertex: Vertex): Record<string, Path>;
}
