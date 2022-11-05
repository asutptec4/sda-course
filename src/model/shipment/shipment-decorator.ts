import { Shipment } from './shipment';
import { ShipmentMarker } from './shipment-marker';

export class ShipmentDecorator extends Shipment {
  private original: Shipment;
  private markers: ShipmentMarker[] = [];

  constructor(shipment: Shipment) {
    super();
    this.original = shipment;
  }

  getShipmentCost(): string {
    return this.original.getShipmentCost();
  }

  ship(): string {
    return this.original.ship() + '\n' + this.printMarkers();
  }

  getMarkers(): ShipmentMarker[] {
    return this.markers;
  }

  setMarkers(markers: ShipmentMarker[]): void {
    this.markers = markers;
  }

  private printMarkers() {
    return this.markers.map((m) => `**MARK ${m}**`).join('\n');
  }
}
