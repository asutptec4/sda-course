import { Shipment } from './shipment';

export class Letter extends Shipment {
  getShipmentCost(): string {
    return `${this.shipper.getLetterCost(this.getWeight())}`;
  }
}
