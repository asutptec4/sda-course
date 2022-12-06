import { Job } from './src/job';
import { JobRunner } from './src/job-runner';

const times = 10000;
const jobRunner = new JobRunner();

for (let i = 0; i < times; i++) {
  jobRunner.addJob(new Job(i.toString(), Math.random() * times));
}

jobRunner.run();
