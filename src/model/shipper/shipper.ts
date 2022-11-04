import { Shipment } from '../shipment/shipment';

export abstract class Shipper {
  abstract getCost(shipment: Shipment): number;

  abstract getServesCodes(): string[];

  isServeZipCode(zipCode: string): boolean {
    return this.getServesCodes().some((code) => zipCode.startsWith(code));
  }

  ship(shipment: Shipment): string {
    return shipment.toString() + `\nCost = ${this.getCost(shipment)}`;
  }
}
