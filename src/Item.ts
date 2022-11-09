import { Comparable } from './Comparable';

let counter = 0;

export abstract class Item implements Comparable<Item> {
  private id: number = counter++;
  private name: string;
  private value: number;
  private weight: number;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  static get numberOfItems(): number {
    return counter;
  }

  static reset(): void {
    counter = 0;
  }

  abstract use(): string;

  compareTo(other: Item): number {
    const diff = this.value - other.value;
    if (diff > 0) {
      return 1;
    }
    if (diff < 0) {
      return -1;
    }
    return this.compareName(other);
  }

  private compareName(other: Item): number {
    return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }

  getId(): number {
    return this.id;
  }

  getValue(): number {
    return this.value;
  }

  setValue(price: number): void {
    this.value = price;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }
}
