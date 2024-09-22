import { Task, TaskMode } from '@src';

export type ChildChainLiquidityGaugeFactoryDeployment = {
  AuthorizerAdaptor: string;
  Points: string;
  Vault: string;
};

const AuthorizerAdaptor = new Task('20220325-authorizer-adaptor', TaskMode.READ_ONLY);
const Vault = new Task('20210418-vault', TaskMode.READ_ONLY);
const Points = new Task('00000000-tokens', TaskMode.READ_ONLY);

export default {
  AuthorizerAdaptor,
  Vault,
  Points,
};
