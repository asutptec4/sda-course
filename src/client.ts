import { Letter } from './model/shipment/letter';
import { Oversize } from './model/shipment/oversize';
import { Package } from './model/shipment/package';
import { Shipment } from './model/shipment/shipment';

export class Client {
  private shipment: Shipment = new Letter();

  ship(): string {
    return this.shipment.ship();
  }

  setFromAddress(address: string): Client {
    this.shipment.setFromAddress(address);
    return this;
  }

  setFromZipCode(zipCode: string): Client {
    this.shipment.setFromZipCode(zipCode);
    return this;
  }

  setToAddress(address: string): Client {
    this.shipment.setToAddress(address);
    return this;
  }

  setToZipCode(zipCode: string): Client {
    this.shipment.setToZipCode(zipCode);
    return this;
  }

  prepareShipment(weight: number): Client {
    if (weight <= 15) {
      this.shipment = new Letter();
    } else if (weight <= 160) {
      this.shipment = new Package();
    } else {
      this.shipment = new Oversize();
    }
    this.shipment.setWeight(weight);
    return this;
  }
}
