import { Shipment } from './shipment';

export class Package extends Shipment {
  getShipmentCost(): string {
    return `${this.shipper.getPackageCost(this.getWeight())}`;
  }
}
