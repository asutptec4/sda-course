import { AirEastShipper } from './shipper/air-east-shipper';
import { ChicagoSprintShipper } from './shipper/chicago-sprint-shipper';
import { PacificParcelShipper } from './shipper/pacific-parcel-shipper';
import { Shipment } from './shipment/shipment';
import { Shipper } from './shipper/shipper';

export class ShipmentService {
  private static instance: ShipmentService;
  private shipment: Shipment;
  private shippers: Shipper[];

  private constructor() {
    this.shipment = new Shipment();
    this.shippers = [new AirEastShipper(), new ChicagoSprintShipper(), new PacificParcelShipper()];
  }

  static getInstance(): ShipmentService {
    if (!this.instance) {
      this.instance = new ShipmentService();
    }
    return this.instance;
  }

  prepareShipment(weight: number): ShipmentService {
    this.shipment = new Shipment();
    this.shipment.setWeight(weight);
    return this;
  }

  ship(): string {
    const shipper = this.getShipper(this.shipment.getFromZipCode());
    return this.shipment.ship(shipper);
  }

  private getShipper(address?: string): Shipper {
    let shipper;
    if (address) {
      shipper = this.shippers.find((s) => s.isServeZipCode(address));
    }
    return shipper ?? this.shippers[0];
  }

  setFromAddress(address: string): ShipmentService {
    this.shipment.setFromAddress(address);
    return this;
  }

  setFromZipCode(zipCode: string): ShipmentService {
    this.shipment.setFromZipCode(zipCode);
    return this;
  }

  setToAddress(address: string): ShipmentService {
    this.shipment.setToAddress(address);
    return this;
  }

  setToZipCode(zipCode: string): ShipmentService {
    this.shipment.setToZipCode(zipCode);
    return this;
  }
}
