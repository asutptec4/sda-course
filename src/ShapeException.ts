export class ShapeException extends Error {
  constructor(message) {
    super(message);
    this.name = 'ShapeException';
  }
}
