import { Shipment } from './model/shipment';

export class Client {
  private shipment: Shipment = new Shipment();

  ship(): string {
    return this.shipment.ship();
  }

  setWeight(weight: number): Client {
    this.shipment.setWeight(weight);
    return this;
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

  prepareShipment(): Client {
    this.shipment = new Shipment();
    return this;
  }
}
