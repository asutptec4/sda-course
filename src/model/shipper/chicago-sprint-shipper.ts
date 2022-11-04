import { Shipper } from './shipper';

export class ChicagoSprintShipper extends Shipper {
  getCost(): number {
    return 0.42;
  }

  getServesCodes(): string[] {
    return ['4', '5', '6'];
  }
}
