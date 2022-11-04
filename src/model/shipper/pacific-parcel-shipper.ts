import { Letter } from '../shipment/letter';
import { Package } from '../shipment/package';
import { Shipment } from '../shipment/shipment';
import { Shipper } from './shipper';

export class PacificParcelShipper extends Shipper {
  getCost(shipment: Shipment): number {
    if (shipment instanceof Letter) {
      return 0.51 * shipment.getWeight();
    }
    if (shipment instanceof Package) {
      return 0.19 * shipment.getWeight();
    }
    return 0.21 * shipment.getWeight(); 
  }

  getServesCodes(): string[] {
    return ['7', '8', '9'];
  }
}
