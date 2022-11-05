import { Shipment } from './shipment';

export class Oversize extends Shipment {
  getShipmentCost(): string {
    return `${this.shipper.getOversizeCost(this.getWeight())}`;
  }
}
