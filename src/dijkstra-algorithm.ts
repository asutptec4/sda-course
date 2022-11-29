import { Dijkstra, Path } from './interfaces/dijkstra';
import { Vertex, WeightedGraph } from './interfaces/weighted-graph';

export class DijkstraAlgorithm implements Dijkstra {
  constructor(public graph: WeightedGraph) {}

  findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
    if (!this.hasAdjacencyVertex(vertex1) || !this.hasAdjacencyVertex(vertex2)) {
      return { path: [], distance: Infinity };
    }
    return this.findPath(vertex1, vertex2);
  }

  private hasAdjacencyVertex(vertex: Vertex): boolean {
    const adjList = this.graph.getAdjacencyList().get(vertex);
    if (adjList) {
      return adjList.length > 0;
    }
    return false;
  }

  private findPath(start: Vertex, end: Vertex): Path {
    const adjacencyList = this.graph.getAdjacencyList();
    const distances: Map<Vertex, number> = new Map();
    const previous: Map<Vertex, Vertex | null> = new Map();
    const nodes: Set<Vertex> = new Set();
    for (const vertex of adjacencyList.keys()) {
      distances.set(vertex, vertex !== start ? Infinity : 0);
      previous.set(vertex, null);
      nodes.add(vertex);
    }
    while (nodes.size) {
      const minDistanceNode = Array.from(distances.entries())
        .filter((v) => nodes.has(v[0]))
        .sort((a, b) => b[1] - a[1])
        .pop()![0];
      nodes.delete(minDistanceNode);
      if (distances.get(minDistanceNode) === Infinity || minDistanceNode === end) {
        break;
      }
      for (const adjacency of adjacencyList.get(minDistanceNode)!) {
        if (!nodes.has(adjacency.to)) {
          continue;
        }
        const dist = distances.get(minDistanceNode)! + adjacency.weight;
        if (dist < distances.get(adjacency.to)!) {
          distances.set(adjacency.to, dist);
          previous.set(adjacency.to, minDistanceNode);
        }
      }
    }
    let prev = end;
    const path: Vertex[] = [prev];
    while (previous.get(prev)) {
      prev = previous.get(prev)!;
      path.unshift(prev);
    }
    return { path: path.map((v) => v.id), distance: distances.get(end)! };
  }

  findAllShortestPaths(vertex: Vertex): Record<string, Path> {
    const nodes: Set<Vertex> = new Set(this.graph.getAdjacencyList().keys());
    nodes.delete(vertex);
    let result: { [key: string]: Path } = {};
    for (const node of nodes.keys()) {
      result[node.id] = this.findShortestPath(vertex, node);
    }
    return result;
  }
}
