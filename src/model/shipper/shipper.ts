import { Shipment } from '../shipment/shipment';

export abstract class Shipper {
  abstract getCost(): number;

  abstract getServesCodes(): string[];

  isServeZipCode(zipCode: string): boolean {
    return this.getServesCodes().some((code) => zipCode.startsWith(code));
  }

  ship(shipment: Shipment): string {
    return `${this.getCost() * shipment.getWeight()}`;
  }
}
