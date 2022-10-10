import { Point } from './Point';
import { Shape } from './Shape';

const COMPARE_PRECISION = 3;

export class Triangle extends Shape {
  constructor(x: Point, y: Point, z: Point);
  constructor(x: Point, y: Point, z: Point, color: string, filled: boolean);
  constructor(x: Point, y: Point, z: Point, color?: string, filled?: boolean) {
    const points = [x, y, z];
    if (color !== undefined && filled !== undefined) {
      super(points, color, filled);
    } else {
      super(points);
    }
  }

  getType(): string {
    const edges = this.getEdges();
    if (
      this.compareWithPrecision(edges[0], edges[1]) &&
      this.compareWithPrecision(edges[1], edges[2])
    ) {
      return 'equilateral triangle';
    }
    if (
      this.compareWithPrecision(edges[0], edges[1]) ||
      this.compareWithPrecision(edges[1], edges[2]) ||
      this.compareWithPrecision(edges[0], edges[2])
    ) {
      return 'isosceles triangle';
    }
    return 'scalene triangle';
  }

  private compareWithPrecision(x: number, y: number): boolean {
    return (
      Math.abs(x).toPrecision(COMPARE_PRECISION) ===
      Math.abs(y).toPrecision(COMPARE_PRECISION)
    );
  }

  toString(): string {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
  }
}
