import { Task, TaskRunOptions } from '@src';
import { GaugeSystemDeployment } from './input';

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as GaugeSystemDeployment;

  const veBALArgs = [input.BPT, 'Vote Escrowed Symmetric SPT', 'vtSYMM', input.AuthorizerAdaptor];
  const veBAL = await task.deploy('VotingEscrow', veBALArgs, from, force);

  const gaugeControllerArgs = [veBAL.address, input.AuthorizerAdaptor];
  const gaugeController = await task.deploy('GaugeController', gaugeControllerArgs, from, force);

  const minterArgs = [input.TSYMMTokenAdmin, gaugeController.address];
  console.log(minterArgs);
  await task.deployAndVerify('BalancerMinter', minterArgs, from, force);
};
