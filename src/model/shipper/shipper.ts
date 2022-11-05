export abstract class Shipper {
  abstract getLetterCost(weight: number): number;

  abstract getPackageCost(weight: number): number;

  abstract getOversizeCost(weight: number): number;

  abstract getServesCodes(): string[];

  isServeZipCode(zipCode: string): boolean {
    return this.getServesCodes().some((code) => zipCode.startsWith(code));
  }
}
