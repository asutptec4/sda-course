import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
  compare(first: Item, second: Item): number {
    if (first.getWeight() > second.getWeight()) {
      return 1;
    }
    if (first.getWeight() < second.getWeight()) {
      return -1;
    }
    return first.compareTo(second);
  }
}
