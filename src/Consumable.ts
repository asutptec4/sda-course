import { Item } from './Item';

export abstract class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
    this.consumed = false;
  }

  eat(): string {
    this.consumed = true;
    return `You eat the ${this.getName()}.`;
  }

  use(): string {
    if (this.consumed) {
      return `There is nothing left of the ${this.getName()} to consume.`;
    }
    if (this.spoiled) {
      return `${this.eat()}\nYou feel sick.`;
    }
    return this.eat();
  }

  toString(): string {
    return `${super.toString()}, Spoiled: ${this.spoiled}, Consumed: ${this.consumed}`;
  }

  isConsumed(): boolean {
    return this.consumed;
  }

  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }
}
