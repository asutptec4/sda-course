import { Shipper } from './shipper';

export class AirEastShipper extends Shipper {
  getLetterCost(weight: number): number {
    return 0.39 * weight;
  }

  getPackageCost(weight: number): number {
    return 0.25 * weight;
  }

  getOversizeCost(weight: number): number {
    return 0.25 * weight + 10;
  }

  getServesCodes(): string[] {
    return ['1', '2', '3'];
  }
}
