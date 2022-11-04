import { AirEastShipper } from './air-east-shipper';
import { ChicagoSprintShipper } from './chicago-sprint-shipper';
import { PacificParcelShipper } from './pacific-parcel-shipper';
import { Shipper } from './shipper';

const ALL_SHIPPERS = [new AirEastShipper(), new ChicagoSprintShipper(), new PacificParcelShipper()];

export class ShipperManager {
  static getShipper(address: string): Shipper {
    return ALL_SHIPPERS.find((s) => s.isServeZipCode(address)) ?? this.getDefaultShipper();
  }

  static getDefaultShipper(): Shipper {
    return ALL_SHIPPERS[0];
  }
}
