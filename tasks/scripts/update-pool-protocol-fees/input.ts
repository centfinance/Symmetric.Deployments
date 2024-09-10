export type UpdateProtocolFeePercentageCache = {
  signer: string;
  pools: string[];
};

const signer = '0x7255Db0d1C1B93Fb756157074fa0613Aa6878F31';

const pools = [
  '0xbf0fa44e5611c31429188b7dcc59ffe794d1980e000200000000000000000009', //80TSYMM20WTLOS
  '0x2d714951f7165a51e8bd61f92d8a979ab0ed4b59000200000000000000000006',
  '0x0ca5d4b7aeeca61aff78c8f734596ec88456d5c300010000000000000000000a', // BTCb-ETH-USDC
  '0x2b014535525aad053b8811c22a337e57caae82df00020000000000000000000f', //WTLOS-USDC
  // '0xbb8a33dbbf10882d3d8d9180c56ff13ad6fd917d000200000000000000000011', //TSYMM-TSOUL
  // '0x09ef3684052c0566caa6fc61008922030ff455b1000200000000000000000010', //TKIND-TSOUL
  '0x0e4907910a6bd1a5e95500f7149dd57d328f65cb000200000000000000000012', //BTCb-STLOS
  '0x0485ecd8aa4e0624dd0f5da84139409ab7cee03c000200000000000000000013', //ETH-STLOS
  '0x304970d2511aa3b121148afd387cfa623f551410000200000000000000000016', //MST-USDM
  '0x5fc5f565d6e186a7e03b9ee58bdd551ebff0c0bd000200000000000000000014', //Trump-WTLOS,
  '0x6587a54645c39bc47c96e6f12052db347cc1003a000200000000000000000015', //CMDR-WTLOS
  '0xcf29825dfe41e62e218baa10b791a3d087fa7a83000200000000000000000018', //SOULS-TSYMM
  // '0x429d4ec4707734b7d9b82d1860202fcba2315481000200000000000000000017', //KINDS-SOULS
  '0xcacc06ea569e239d0e4b718e4da1b456d49e06f6000200000000000000000019', //KINDs-SOULS
  '0x03b038d9ad0a69339c9af310ac0f205e2670f9b200020000000000000000001b', //STLOS-wUSK
  '0x30f0797bbe89172b669467039d49d413eb09244b00020000000000000000001c', // SOULS-WTLOS
  // '0xfa5f3ba362577e35875e91eb3b16fbe7108f448600020000000000000000001d', // SOULS-SUSD
  '0x058d4893efa235d86cceed5a7eef0809b76c8c66000000000000000000000004',
  '0x9a77bd2edbbb68173275cda967b76e9213949ace000000000000000000000008',
  '0x5e99843486cf052baf0925a0cdeb40920477295900000000000000000000000b',
  // '0xd757973e91a8045808e8cd37cc2b7df128e7ca2c00000000000000000000000d',
  '0x412b37b8074e25683fdd4f5b2ac0218647dcc50e00000000000000000000001a', //wUSK-USDC
  '0xceb2728bf37332291fa44891414a53b1d668578200020000000000000000001e', // ALI-SOULS
];
export default {
  signer,
  pools,
};
