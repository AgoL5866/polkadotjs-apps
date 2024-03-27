// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { ExternalDef } from './types.js';

import { externalSubscanPNG } from '../ui/logos/external/index.js';

export const Subscan: ExternalDef = {
  chains: {
    Acala: 'acala',
    'Acala Mandala TC5': 'acala-testnet',
    'Aleph Zero': 'alephzero',
    Altair: 'altair',
    Arctic: 'arctic',
    Astar: 'astar',
    'Bajun Kusama': 'bajun',
    Basilisk: 'basilisk',
    Bifrost: 'bifrost-kusama',
    'Bifrost Polkadot': 'bifrost',
    'Calamari Parachain': 'calamari',
    Centrifuge: 'centrifuge',
    ChainX: 'chainx',
    'Composable Finance': 'composable',
    Crab2: 'crab',
    Crust: 'crust',
    'Crust Maxwell': 'maxwell',
    'Crust Shadow': 'shadow',
    'Darwinia Parachain': 'darwinia',
    'DataHighway Tanganika Kusama Parachain': 'datahighway',
    Dock: 'dock',
    'Dolphin Parachain Testnet': 'dolphin',
    HydraDX: 'hydradx',
    'Integritee Network (Kusama)': 'integritee',
    Interlay: 'interlay',
    'KILT Peregrine': 'kilt-testnet',
    'KILT Spiritnet': 'spiritnet',
    Karura: 'karura',
    Khala: 'khala',
    Kusama: 'kusama',
    KusamaAssetHub: 'assethub-kusama',
    'Mangata Kusama Mainnet': 'mangatax',
    'Moonbase Alpha': 'moonbase',
    Moonbeam: 'moonbeam',
    Moonriver: 'moonriver',
    NeuroWeb: 'neuroweb',
    'NeuroWeb Testnet': 'neuroweb-testnet',
    'Nodle Parachain': 'nodle',
    'OPAL by UNIQUE': 'opal',
    'Pangolin Parachain': 'pangolin',
    Parallel: 'parallel',
    'Parallel Heiko': 'parallel-heiko',
    'Paseo Testnet': 'paseo',
    Phala: 'phala',
    Picasso: 'picasso',
    'Pioneer Network': 'pioneer',
    Polkadex: 'polkadex',
    Polkadot: 'polkadot',
    PolkadotAssetHub: 'assethub-polkadot',
    Polymesh: 'polymesh',
    'Polymesh Testnet': 'polymesh-testnet',
    'QUARTZ by UNIQUE': 'quartz',
    Robonomics: 'robonomics',
    Rococo: 'rococo',
    RococoAssetHub: 'assethub-rococo',
    SORA: 'sora',
    'Shibuya Testnet': 'shibuya',
    Shiden: 'shiden',
    Stafi: 'stafi',
    'Subspace Gemini 2a': 'subspace',
    'Turing Network': 'turing',
    UNIQUE: 'unique',
    Westend: 'westend',
    Zeitgeist: 'zeitgeist',
    kintsugi: 'kintsugi'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://${chain}.subscan.io/${path}/${data.toString()}`,
  homepage: 'https://subscan.io/',
  isActive: true,
  paths: {
    address: 'account',
    block: 'block',
    bounty: 'bounty',
    council: 'council',
    democracyProposal: 'democracy_proposal',
    democracyReferendum: 'referenda',
    extrinsic: 'extrinsic',
    fellowshipReferenda: 'fellowship',
    referenda: 'referenda_v2',
    techcomm: 'tech',
    tip: 'treasury_tip',
    treasury: 'treasury',
    validator: 'validator'
  },
  ui: {
    logo: externalSubscanPNG
  }
};
