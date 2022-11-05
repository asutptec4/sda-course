import { ShipmentService } from './model/shipment-service';
import { ShipmentMarker } from './model/shipment/shipment-marker';

export class Client {
  private shipmentService: ShipmentService = ShipmentService.getInstance();

  ship(): string {
    return this.shipmentService.ship();
  }

  prepareShipment(weight: number): Client {
    this.shipmentService.prepareShipment(weight);
    return this;
  }

  setFromAddress(address: string): Client {
    this.shipmentService.setFromAddress(address);
    return this;
  }

  setFromZipCode(zipCode: string): Client {
    this.shipmentService.setFromZipCode(zipCode);
    return this;
  }

  setToAddress(address: string): Client {
    this.shipmentService.setToAddress(address);
    return this;
  }

  setToZipCode(zipCode: string): Client {
    this.shipmentService.setToZipCode(zipCode);
    return this;
  }

  setMarkers(markers: ShipmentMarker[]): Client {
    this.shipmentService.setMarkers(markers);
    return this;
  }
}
