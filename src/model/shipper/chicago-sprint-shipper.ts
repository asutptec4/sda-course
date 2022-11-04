import { Shipper } from './shipper';

export class ChicagoSprintShipper extends Shipper {
  getLetterCost(weight: number): number {
    return 0.42 * weight;
  }

  getPackageCost(weight: number): number {
    return 0.2 * weight;
  }

  getOversizeCost(weight: number): number {
    return 0.2 * weight;
  }

  getServesCodes(): string[] {
    return ['4', '5', '6'];
  }
}
