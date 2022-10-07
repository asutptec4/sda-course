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
      throw new ShapeException('Please provide at least 3 points');
    }
  }

  abstract getType(): string;

  getPerimeter(): number {
    let perimetr = 0;
    const verticesCount = this.points.length;
    for (let i = 0; i < verticesCount; i++) {
      const nextPoint = i + 1 < verticesCount ? i + 1 : 0;
      perimetr += this.points[i].distance(this.points[nextPoint]);
    }
    return perimetr;
  }

  toString(): string {
    return `A Shape with color of ${this.color} and ${
      this.filled ? '' : 'not '
    }filled. Points: ${this.points.map((p) => p.toString()).join(', ')}.`;
  }
}
