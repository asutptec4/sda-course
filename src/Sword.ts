import { Weapon } from './Weapon';

export class Sword extends Weapon {
  private static readonly MAX_POLISH_RATE = 0.25;

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('sword', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const maxPolishDamageModifier = this.getBaseDamage() * Sword.MAX_POLISH_RATE;
    if (this.getDamageModifier() < maxPolishDamageModifier) {
      const newDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
      this.setDamageModifier(newDamageModifier > maxPolishDamageModifier ? maxPolishDamageModifier : newDamageModifier);
    }
  }
}
