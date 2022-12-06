export class Job {
  constructor(public readonly id: string, public readonly priority: number) {}

  run(): void {
    console.log(`Job ${this.id} with priority ${this.priority} completed.`);
  }
}
