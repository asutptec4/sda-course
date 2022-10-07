import { Point } from './Point';
import { ShapeException } from './ShapeException';

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    this.color = color ?? 'green';
    this.filled = filled ?? true;
    this.points = points;
    this.validateShape();
  }

  private validateShape(): void {
    if (this.points.length <= 2) {
      throw new ShapeException('Please provide at least 3 points for a shape.');
    }
  }

  abstract getType(): string;

  protected getEdges(): number[] {
    return this.points.map((p, i) => {
      if (i < this.points.length - 1) {
        return p.distance(this.points[i + 1]);
      } else {
        return p.distance(this.points[0]);
      }
    });
  }

  getPerimeter(): number {
    return this.getEdges().reduce((s, edge) => (s += edge), 0);
  }

  toString(): string {
    return `A Shape with color of ${this.color} and ${
      this.filled ? '' : 'not '
    }filled. Points: ${this.points.map((p) => p.toString()).join(', ')}.`;
  }
}
