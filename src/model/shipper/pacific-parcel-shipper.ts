import { Shipper } from './shipper';

export class PacificParcelShipper extends Shipper {
  getLetterCost(weight: number): number {
    return 0.51 * weight;
  }

  getPackageCost(weight: number): number {
    return 0.19 * weight;
  }

  getOversizeCost(weight: number): number {
    return 0.21 * weight;
  }

  getServesCodes(): string[] {
    return ['7', '8', '9'];
  }
}
