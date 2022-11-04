import { Shipper } from './shipper';

export class PacificParcelShipper extends Shipper {
  getCost(): number {
    return 0.51;
  }

  getServesCodes(): string[] {
    return ['7', '8', '9'];
  }
}
