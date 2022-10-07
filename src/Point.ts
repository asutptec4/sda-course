export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  distance(): number;
  distance(point: Point): number;
  distance(x: number, y: number): number;
  distance(x?: number | Point, y?: number): number {
    let distance: number;
    if (x instanceof Point) {
      distance = this.calculateDistance(x.x, x.y);
    } else if (x !== undefined && y !== undefined) {
      distance = this.calculateDistance(x, y);
    } else {
      distance = this.calculateDistance(0, 0);
    }
    return distance;
  }

  private calculateDistance(x: number, y: number): number {
    const xDiff = Math.abs(this.x - x);
    const yDiff = Math.abs(this.y - y);
    return Math.hypot(xDiff, yDiff);
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}
