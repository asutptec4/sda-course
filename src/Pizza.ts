import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number = 0;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super('pizza', 100, 1, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;
      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }
      return 'You are eating a slice of the pizza.';
    } else {
      return '';
    }
  }
}
