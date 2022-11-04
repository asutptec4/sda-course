import { Shipper } from './shipper';

export class AirEastShipper extends Shipper {
  getCost(): number {
    return 0.39;
  }

  getServesCodes(): string[] {
    return ['1', '2', '3'];
  }
}
