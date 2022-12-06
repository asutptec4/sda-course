import { Job } from './job';
import { PriorityQueue } from './priority-queue';

export class JobRunner {
  jobQueue: PriorityQueue<Job> = new PriorityQueue();

  addJob(job: Job): void {
    this.jobQueue.enqueue(job);
  }

  run(): void {
    while (this.jobQueue.size()) {
      this.jobQueue.dequeue()!.run();
    }
  }
}
