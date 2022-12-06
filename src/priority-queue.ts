export class PriorityQueue<T extends { priority: number }> {
  private elements: T[] = [];

  enqueue(el: T): void {
    this.elements.push(el);
    let i = this.elements.length - 1;
    while (i > 0 && this.elements[i].priority > this.elements[Math.floor((i - 1) / 2)].priority) {
      const parentIdx = Math.floor((i - 1) / 2);
      this.swap(parentIdx, i);
      i = parentIdx;
    }
  }

  private swap(idx1: number, idx2: number): void {
    const temp = this.elements[idx1];
    this.elements[idx1] = this.elements[idx2];
    this.elements[idx2] = temp;
  }

  dequeue(): T | undefined {
    if (this.elements.length === 0) {
      return undefined;
    }
    const max = this.elements[0];
    this.elements[0] = this.elements[this.elements.length - 1];
    this.elements.pop();
    let i = 0;
    while (2 * i + 1 < this.elements.length - 1) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      const selected = this.elements[left].priority > this.elements[right].priority ? left : right;
      if (this.elements[i].priority >= this.elements[selected].priority) {
        break;
      }
      this.swap(i, selected);
      i = selected;
    }
    return max;
  }

  size(): number {
    return this.elements.length;
  }
}
