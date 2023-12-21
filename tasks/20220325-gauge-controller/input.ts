import { Task, TaskMode } from '@src';

export type GaugeSystemDeployment = {
  BPT: string;
  TSYMMTokenAdmin: string;
  AuthorizerAdaptor: string;
};

const AuthorizerAdaptor = new Task('20220325-authorizer-adaptor', TaskMode.READ_ONLY);
const TSYMMTokenAdmin = new Task('20220325-balancer-token-admin', TaskMode.READ_ONLY);

export default {
  AuthorizerAdaptor,
  TSYMMTokenAdmin,
  mainnet: {
    BPT: '0x5c6Ee304399DBdB9C8Ef030aB642B10820DB8F56', // BPT of the canonical 80-20 BAL-WETH Pool
  },
  kovan: {
    BPT: '0xDC2EcFDf2688f92c85064bE0b929693ACC6dBcA6', // BPT of an 80-20 BAL-WETH Pool using test BAL
  },
  goerli: {
    BPT: '0xf8a0623ab66F985EfFc1C69D05F1af4BaDB01b00', // BPT of an 80-20 BAL-WETH Pool using test BAL
  },
  sepolia: {
    BPT: '0x650C15c9CFc6063e5046813f079774f56946dF21', // BPT of an 80-20 BAL-WETH Pool using test BAL
  },
  telos: {
    BPT: '0xbf0FA44e5611C31429188B7dcc59ffe794D1980e',
  },
  telosTestnet: {
    BPT: '0x037D0B5511eFF40fF31dA11A9A0619efC3B87EC9', // SPT of an 80-20 SYMM-TLOS Pool using test SYMM
  },
};
