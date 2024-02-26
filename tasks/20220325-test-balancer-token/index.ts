import { Task, TaskRunOptions } from '@src';
import { TestBalancerTokenDeployment } from './input';

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as TestBalancerTokenDeployment;

  const args = [input.Admin, 'Symmetric on Meter', 'mSYMM'];
  await task.deployAndVerify('TestBalancerToken', args, from, force);
};
