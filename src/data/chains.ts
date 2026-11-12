export interface ChainExperience {
  id: string;
  name: string;
  icon: string;
  /** One-liner shown on hover / modal header */
  tagline: string;
  /** Longer description for the modal body */
  description: string;
  /** Concrete deliverables / PR highlights */
  highlights: string[];
  /** Swappers / protocols touched on this chain */
  protocols: string[];
  /** Category for visual grouping */
  category: 'l1' | 'evm-l2' | 'non-evm';
  /** Link to filtered GitHub PRs (optional) */
  prLink?: string;
  /** Proof links: PRs, announcements, listings */
  links?: { label: string; url: string }[];
}

const MY_PRS = (query: string) =>
  `https://github.com/shapeshift/web/pulls?q=is%3Apr+author%3Aswdiscordia+is%3Amerged+${encodeURIComponent(query)}`;

const KYBER_PR = { label: 'KyberSwap swapper PR', url: 'https://github.com/shapeshift/web/pull/12819' };

export const CHAINS: ChainExperience[] = [
  {
    id: 'elysium',
    name: 'Elysium',
    icon: 'https://kinetiq.xyz/assets/brand/elysium/elysium-logomark-colorized.png',
    tagline: 'Launch-day chain integration, from research to production',
    description:
      'I ran the Elysium integration from the pre-launch research to production: the chain in the ShapeShift app, the public API and the swap widget, plus swap status and fee tracking. KyberSwap, 0x and Relay were live on launch day, tested with real mainnet swaps.',
    highlights: [
      'Integrated the Elysium chain in the ShapeShift app',
      'Added Elysium to the public API and the swap widget',
      'Added Elysium swap status to swap-service',
      'Added Elysium fee tracking to the revenue dashboard',
    ],
    protocols: ['KyberSwap', '0x', 'Relay'],
    category: 'evm-l2',
    prLink: MY_PRS('elysium'),
    links: [
      { label: 'Chain integration PR', url: 'https://github.com/shapeshift/web/pull/12832' },
      { label: 'Public API PR', url: 'https://github.com/shapeshift/web/pull/12843' },
      { label: 'Swap widget PR', url: 'https://github.com/shapeshift/web/pull/12844' },
      { label: 'Swap-service PR', url: 'https://github.com/shapeshift/microservices/pull/83' },
      { label: 'Revenue tracking PR', url: 'https://github.com/shapeshift/revenue-dashboard/pull/50' },
    ],
  },
  {
    id: 'robinhood',
    name: 'Robinhood Chain',
    icon: 'https://assets.relay.link/icons/4663/light.png',
    tagline: 'Chain integration after the mainnet launch',
    description:
      'I scoped Robinhood Chain after its mainnet launch and integrated it in ShapeShift as a second-class EVM chain, routed by Relay, 0x and Across and tested with real mainnet swaps.',
    highlights: ['Integrated Robinhood Chain (EVM 4663)', 'Wired Relay, 0x and Across on the chain'],
    protocols: ['Relay', '0x', 'Across'],
    category: 'evm-l2',
    prLink: MY_PRS('robinhood'),
    links: [{ label: 'Chain integration PR', url: 'https://github.com/shapeshift/web/pull/12497' }],
  },
  {
    id: 'aptos',
    name: 'Aptos',
    icon: 'https://assets.coingecko.com/coins/images/26455/large/aptos_round.png',
    tagline: 'Non-EVM chain integration and the Panora swapper',
    description:
      'I led the Aptos integration in ShapeShift: native wallet support, balances, sends and transaction status. I then added Panora as the swapper for swaps on Aptos.',
    highlights: ['Integrated the Aptos chain', 'Integrated the Panora swapper on Aptos'],
    protocols: ['Panora'],
    category: 'non-evm',
    prLink: MY_PRS('aptos'),
    links: [
      { label: 'Chain integration PR', url: 'https://github.com/shapeshift/web/pull/12349' },
      { label: 'Panora swapper PR', url: 'https://github.com/shapeshift/web/pull/12492' },
    ],
  },
  {
    id: 'katana',
    name: 'Katana',
    icon: 'https://assets.coingecko.com/asset_platforms/images/32239/small/katana.jpg',
    tagline: 'Ecosystem listing and launch co-marketing',
    description:
      'I got ShapeShift listed on the Katana ecosystem page and ran the launch co-marketing with the Katana team: a joint announcement and a ShapeShift blog post.',
    highlights: [
      'Listed ShapeShift on the Katana ecosystem page',
      'Ran the joint launch announcement with Katana',
      'Coordinated the Katana on ShapeShift blog post',
    ],
    protocols: [],
    category: 'evm-l2',
    links: [
      { label: 'ShapeShift announcement', url: 'https://x.com/ShapeShift/status/2039704767715217903' },
      { label: 'Katana announcement', url: 'https://x.com/katana/status/2039707135693533620' },
      { label: 'Blog post', url: 'https://shapeshift.com/blog/Katana' },
    ],
  },
  {
    id: 'megaeth',
    name: 'MegaETH',
    icon: 'https://assets.relay.link/icons/4326/light.png',
    tagline: 'Ecosystem listing, launch co-marketing and the KyberSwap swapper',
    description:
      "I got ShapeShift listed on MegaETH's Rabbithole and ran the ShapeShift x MegaETH launch. I later integrated the KyberSwap swapper on MegaETH.",
    highlights: [
      "Listed ShapeShift on MegaETH's Rabbithole",
      'Ran the ShapeShift x MegaETH launch announcement',
      'Integrated the KyberSwap swapper on MegaETH',
    ],
    protocols: ['KyberSwap'],
    category: 'evm-l2',
    links: [
      { label: 'Launch announcement', url: 'https://x.com/ShapeShift/status/2056784579675975752' },
      KYBER_PR,
    ],
  },
  {
    id: 'bob',
    name: 'BOB',
    icon: 'https://assets.coingecko.com/asset_platforms/images/255/small/bob.jpeg',
    tagline: 'BOB Gateway launch co-marketing',
    description:
      'I coordinated the BOB Gateway launch on ShapeShift with the BOB team, from the go-live date and affiliate fee tracking to the joint announcement.',
    highlights: ['Ran the BOB Gateway launch co-marketing', 'Coordinated affiliate fee tracking with BOB'],
    protocols: ['BOB Gateway'],
    category: 'evm-l2',
    links: [
      { label: 'BOB announcement', url: 'https://x.com/build_on_bob/status/2074161635590369698' },
      { label: 'ShapeShift announcement', url: 'https://x.com/ShapeShift/status/2074193672393142617' },
    ],
  },
  {
    id: 'starknet',
    name: 'Starknet',
    icon: 'https://assets.coingecko.com/coins/images/26433/large/starknet.png',
    tagline: 'Ecosystem listing',
    description: 'I listed ShapeShift on the Starknet ecosystem directory.',
    highlights: ['Listed ShapeShift on starknet-ecosystem.com'],
    protocols: [],
    category: 'non-evm',
    links: [{ label: 'Listing PR', url: 'https://github.com/419Labs/starknet-ecosystem.com/pull/1155' }],
  },
  {
    id: 'monad',
    name: 'Monad',
    icon: 'https://assets.coingecko.com/coins/images/38927/standard/monad.png?1764042736',
    tagline: 'KyberSwap swapper',
    description: 'I integrated the KyberSwap swapper on Monad, tested with real swaps and the 60 bps fee verified on-chain.',
    highlights: ['Integrated the KyberSwap swapper on Monad'],
    protocols: ['KyberSwap'],
    category: 'l1',
    links: [KYBER_PR],
  },
  {
    id: 'hyperevm',
    name: 'HyperEVM',
    icon: 'https://assets.coingecko.com/coins/images/50882/standard/hyperliquid.jpg?1729431300',
    tagline: 'KyberSwap swapper',
    description: 'I integrated the KyberSwap swapper on HyperEVM, tested with real swaps and the 60 bps fee verified on-chain.',
    highlights: ['Integrated the KyberSwap swapper on HyperEVM'],
    protocols: ['KyberSwap'],
    category: 'l1',
    links: [KYBER_PR],
  },
  {
    id: 'plasma',
    name: 'Plasma',
    icon: 'https://assets.coingecko.com/coins/images/66489/standard/Plasma-symbol-green-1.png?1755142558',
    tagline: 'KyberSwap swapper',
    description: 'I integrated the KyberSwap swapper on Plasma, tested with real swaps and the 60 bps fee verified on-chain.',
    highlights: ['Integrated the KyberSwap swapper on Plasma'],
    protocols: ['KyberSwap'],
    category: 'l1',
    links: [KYBER_PR],
  },
];

export interface ChainDecoration {
  chainId: string;
  top: string;
  left?: string;
  right?: string;
  size: number;
  opacity: number;
  rotation: number;
  duration: number;
}

export const CHAIN_DECORATIONS: ChainDecoration[] = [
  // Chain integrations: larger, slightly more visible
  { chainId: 'elysium',   top: '6%',  left: '8%',   size: 64,  opacity: 0.18, rotation: 12,  duration: 30 },
  { chainId: 'robinhood', top: '12%', right: '10%', size: 56,  opacity: 0.16, rotation: -8,  duration: 35 },
  { chainId: 'aptos',     top: '75%', left: '6%',   size: 58,  opacity: 0.15, rotation: 25,  duration: 28 },

  // Listings, co-marketing and swappers
  { chainId: 'katana',    top: '68%', right: '7%',  size: 52,  opacity: 0.14, rotation: -15, duration: 32 },
  { chainId: 'megaeth',   top: '30%', left: '4%',   size: 50,  opacity: 0.15, rotation: 45,  duration: 26 },
  { chainId: 'starknet',  top: '85%', left: '20%',  size: 48,  opacity: 0.14, rotation: -30, duration: 38 },
  { chainId: 'bob',       top: '20%', left: '15%',  size: 44,  opacity: 0.13, rotation: 60,  duration: 24 },
  { chainId: 'monad',     top: '42%', right: '5%',  size: 46,  opacity: 0.13, rotation: -45, duration: 34 },
  { chainId: 'hyperevm',  top: '8%',  left: '30%',  size: 40,  opacity: 0.11, rotation: 20,  duration: 29 },
  { chainId: 'plasma',    top: '88%', right: '12%', size: 40,  opacity: 0.11, rotation: -22, duration: 36 },
];

/** Look up a chain by id */
export const getChainById = (id: string): ChainExperience | undefined =>
  CHAINS.find(c => c.id === id);
