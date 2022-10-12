import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
  compare(first: Item, second: Item): number {
    const diff = first.getWeight() - second.getWeight();
    if (diff > 0) {
      return 1;
    }
    if (diff < 0) {
      return -1;
    }
    return first.compareTo(second);
  }
}
