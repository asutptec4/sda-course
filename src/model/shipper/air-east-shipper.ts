import { Letter } from '../shipment/letter';
import { Package } from '../shipment/package';
import { Shipment } from '../shipment/shipment';
import { Shipper } from './shipper';

export class AirEastShipper extends Shipper {
  getCost(shipment: Shipment): number {
    if (shipment instanceof Letter) {
      return 0.39 * shipment.getWeight();
    }
    if (shipment instanceof Package) {
      return 0.25 * shipment.getWeight();
    }
    return 0.25 * shipment.getWeight() + 10; 
  }

  getServesCodes(): string[] {
    return ['1', '2', '3'];
  }
}
