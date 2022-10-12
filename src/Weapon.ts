import { Item } from './Item';

export abstract class Weapon extends Item {
  static readonly MODIFIER_CHANGE_RATE = 0.05;

  private baseDamage: number;
  private baseDurability: number;
  private damageModifier: number = 0;
  private durabilityModifier: number = 0;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  abstract polish(): void;

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  use(): string {
    if (this.isBroken()) {
      return `You can't use the ${this.getName()}, it is broken.`;
    }
    this.durabilityModifier = this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;
    const result = `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`;
    if (this.isBroken()) {
      return `${result}\nThe ${this.getName()} breaks.`;
    }
    return result;
  }

  private isBroken(): boolean {
    return this.getDurability() <= 0;
  }

  toString(): string {
    return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability() * 100}%`;
  }

  getBaseDamage(): number {
    return this.baseDamage;
  }

  setBaseDamage(baseDamage: number) {
    this.baseDamage = baseDamage;
  }

  getDamageModifier(): number {
    return this.damageModifier;
  }

  setDamageModifier(damageModifier: number) {
    this.damageModifier = damageModifier;
  }

  getBaseDurability(): number {
    return this.baseDurability;
  }

  setBaseDurability(baseDurability: number) {
    this.baseDurability = baseDurability;
  }

  getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  setDurabilityModifier(durabilityModifier: number) {
    this.durabilityModifier = durabilityModifier;
  }
}
