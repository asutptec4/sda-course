import { Shipment } from './shipment';

export class Package extends Shipment {
  static getMaxWeight(): number {
    return 160;
  }
}
