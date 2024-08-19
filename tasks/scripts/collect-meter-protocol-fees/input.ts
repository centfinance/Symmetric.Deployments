import { Task, TaskMode } from '@src';

export type CollectProtocolFees = {
  ProtocolFeesCollector: string;
  Governance: string;
  signer: string;
  pools: string[];
};

const ProtocolFeesCollector = new Task('20210418-vault', TaskMode.READ_ONLY);

const Governance = '0x51db3Cc6431fe6297270360dE47345B0149E1F51';

const signer = '0x7255Db0d1C1B93Fb756157074fa0613Aa6878F31';

const pools = [
  '0xd9fe77653c2b75cf3442c365a3f1f9c7ed1612c7000200000000000000000003', //MTRG/USDT-USDC-suUSD
  '0xc4187382305ea2c953f0a164f02b4d27c9957db5000200000000000000000005', //MST-MTRG
  '0x6e1be32644975613212db00bb9762fb6755ab921000200000000000000000007', //ETH-wstMTRG
  '0x1ff97abe4c5a4b7ff90949b637e71626bef0dcee000000000000000000000002', //USDT-USDC-suUSD
  '0x2077a828fd58025655335a8756dbcfeb7e5bec46000000000000000000000008', //mtrg-wstMTRG
  '0xbfd3c6457069bf173714f344447be468a83e7bd500020000000000000000000b', //MST-wstMTRG
];
export default {
  ProtocolFeesCollector,
  Governance,
  signer,
  pools,
};
