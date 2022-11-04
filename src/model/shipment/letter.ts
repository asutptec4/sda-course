import { Shipment } from './shipment';

export class Letter extends Shipment {
  static getMaxWeight(): number {
    return 15;
  }
}
