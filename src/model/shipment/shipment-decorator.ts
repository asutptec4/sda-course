import { Shipper } from '../shipper/shipper';
import { Shipment } from './shipment';
import { ShipmentMarker } from './shipment-marker';

export class ShipmentDecorator extends Shipment {
  private original: Shipment;
  private markers: ShipmentMarker[] = [];

  constructor(shipment: Shipment) {
    super();
    this.original = shipment;
  }
  
  ship(shipper: Shipper): string {
    return this.original.ship(shipper) + '\n' + this.printMarkers();
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
