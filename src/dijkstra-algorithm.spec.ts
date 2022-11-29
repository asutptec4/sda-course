import { beforeAll, describe, expect, test } from '@jest/globals';
import { DijkstraAlgorithm } from './dijkstra-algorithm';

import { Graph } from './graph';
import { Dijkstra } from './interfaces/dijkstra';
import { Vertex, WeightedGraph } from './interfaces/weighted-graph';

describe('Dijkstra test', () => {
  let graph: WeightedGraph;
  let dijkstra: Dijkstra;

  function createGraph(vertices: Vertex[], edges: [Vertex, Vertex, number][]) {
    graph = new Graph();
    vertices.forEach((v) => graph.addVertex(v));
    edges.forEach(([from, to, weight]) => graph.addEdge(from, to, weight));
    dijkstra = new DijkstraAlgorithm(graph);
  }

  const vertices = [new Vertex('1'), new Vertex('2'), new Vertex('3'), new Vertex('4'), new Vertex('5')];
  const edges: [Vertex, Vertex, number][] = [
    [vertices[0], vertices[3], 3],
    [vertices[0], vertices[1], 5],
    [vertices[0], vertices[2], 4],
    [vertices[1], vertices[3], 6],
    [vertices[1], vertices[2], 5],
  ];

  beforeAll(() => {
    createGraph(vertices, edges);
  });

  test('graph is generated', () => {
    expect(graph.getAdjacencyList().size).toBe(vertices.length);
  });

  test('findShortestPath: correct vertices', () => {
    expect(dijkstra.findShortestPath(vertices[3], vertices[2])).toEqual({ path: ['4', '1', '3'], distance: 7 });
  });

  test('findShortestPath: same vertex', () => {
    expect(dijkstra.findShortestPath(vertices[0], vertices[0])).toEqual({ path: ['1'], distance: 0 });
  });

  test('findShortestPath: no path', () => {
    expect(dijkstra.findShortestPath(vertices[0], vertices[4])).toEqual({ path: [], distance: Infinity });
  });

  test('findAllShortestPaths', () => {
    expect(dijkstra.findAllShortestPaths(vertices[3])).toEqual({
      '1': { path: ['4', '1'], distance: 3 },
      '2': { path: ['4', '2'], distance: 6 },
      '3': { path: ['4', '1', '3'], distance: 7 },
      '5': { path: [], distance: Infinity },
    });
  });

  describe('additional test for findShortestPath', () => {
    const vertices = [
      new Vertex('1'),
      new Vertex('2'),
      new Vertex('3'),
      new Vertex('4'),
      new Vertex('5'),
      new Vertex('6'),
    ];
    const edges: [Vertex, Vertex, number][] = [
      [vertices[0], vertices[1], 7],
      [vertices[0], vertices[2], 9],
      [vertices[0], vertices[5], 14],
      [vertices[1], vertices[2], 10],
      [vertices[1], vertices[3], 15],
      [vertices[2], vertices[3], 11],
      [vertices[2], vertices[5], 2],
      [vertices[3], vertices[4], 6],
      [vertices[4], vertices[5], 9],
    ];

    beforeAll(() => {
      createGraph(vertices, edges);
    });

    test('correct vertices', () => {
      expect(dijkstra.findShortestPath(vertices[0], vertices[4])).toEqual({ path: ['1', '3', '6', '5'], distance: 20 });
    });
  });
});
