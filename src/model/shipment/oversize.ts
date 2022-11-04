import { Shipment } from './shipment';

export class Oversize extends Shipment {
  static getMaxWeight(): number {
    return Infinity;
  }
}
