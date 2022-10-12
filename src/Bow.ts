import { Weapon } from './Weapon';

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const newDurabilityModifier =
      1 - this.getDurability() > Weapon.MODIFIER_CHANGE_RATE
        ? this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE
        : 1 - this.getBaseDurability();
    this.setDurabilityModifier(newDurabilityModifier);
  }
}
