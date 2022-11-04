import { Letter } from '../shipment/letter';
import { Package } from '../shipment/package';
import { Shipment } from '../shipment/shipment';
import { Shipper } from './shipper';

export class ChicagoSprintShipper extends Shipper {
  getCost(shipment: Shipment): number {
    if (shipment instanceof Letter) {
      return 0.42 * shipment.getWeight();
    }
    if (shipment instanceof Package) {
      return 0.20 * shipment.getWeight();
    }
    return 0.20 * shipment.getWeight(); 
  }

  getServesCodes(): string[] {
    return ['4', '5', '6'];
  }
}
