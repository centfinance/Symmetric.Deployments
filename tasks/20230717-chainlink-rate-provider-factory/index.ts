import { Task, TaskRunOptions } from '@src';

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  await task.deployAndVerify('ChainlinkRateProviderFactory', [], from, force);
};
