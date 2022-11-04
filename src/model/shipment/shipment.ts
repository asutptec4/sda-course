import { Shipper } from '../shipper/shipper';

let id = 0;

export abstract class Shipment {
  private shipmentID: number = id++;
  private weight: number = 0;
  private fromAddress: string = '';
  private fromZipCode: string = '';
  private toAddress: string = '';
  private toZipCode: string = '';

  ship(shipper: Shipper): string {
    return shipper.ship(this);
  }

  getId(): number {
    return this.shipmentID;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  getFromAddress(): string {
    return this.fromAddress;
  }

  setFromAddress(address: string): void {
    this.fromAddress = address;
  }

  getFromZipCode(): string {
    return this.fromZipCode;
  }

  setFromZipCode(zipCode: string): void {
    this.fromZipCode = zipCode;
  }

  getToAddress(): string {
    return this.toAddress;
  }

  setToAddress(address: string): void {
    this.toAddress = address;
  }

  getToZipCode(): string {
    return this.toZipCode;
  }

  setToZipCode(zipCode: string): void {
    this.toZipCode = zipCode;
  }

  toString(): string {
    return (
      `Shipment with the ID ${this.shipmentID} ` +
      `will be picked up from ${this.fromAddress} ${this.fromZipCode} ` +
      `and shipped to ${this.toAddress} ${this.toZipCode}`
    );
  }
}
