/**
 * The Blockchain - 0xDiscostu's Career Chain
 */

import type { Block, Chain, Transaction } from '../types/blockchain';

// Simple hash generator for visual effect
const generateHash = (input: string): string => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `0x${hex}${'abcdef0123456789'.split('').sort(() => Math.random() - 0.5).join('').slice(0, 56)}`;
};

const createTransactions = (skills: string[]): Transaction[] => {
  return skills.map((skill, i) => ({
    id: `tx-${i}`,
    type: 'tech' as const,
    value: skill,
    signature: `0x${Math.random().toString(16).slice(2, 10)}`,
  }));
};

export const GENESIS_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';

export const BLOCKS: Block[] = [
  {
    id: 'genesis',
    index: 0,
    timestamp: { start: '1992', end: null },
    title: 'Genesis Block',
    company: 'Canada',
    location: 'Canada',
    type: 'origin',
    description: 'Chain initialized. First lines of code written. First comms launched. The journey begins.',
    transactions: createTransactions(['Curiosity', 'HTML', 'CSS', 'First Comms']),
    hash: generateHash('genesis-canada-1992'),
    previousHash: GENESIS_HASH,
    nonce: 0,
    confirmed: true,
  },
  {
    id: 'block-1',
    index: 1,
    timestamp: { start: '2011', end: '2011' },
    title: 'Sales & Communications Representative',
    company: 'Intel',
    location: 'Retail stores',
    type: 'work',
    description: 'In-store communication and sales role for Intel, promoting new processor launches in large retail stores, explaining product benefits to customers, and supporting sales teams on the floor.',
    transactions: createTransactions(['Intel', 'Retail Sales', 'Communication', 'Product Promotion', 'Customer Advice', 'Hardware']),
    hash: generateHash('intel-sales-communication-2011'),
    previousHash: generateHash('genesis-canada-1992'),
    nonce: 42,
    confirmed: true,
  },
  {
    id: 'block-2',
    index: 2,
    timestamp: { start: '2012', end: '2012' },
    title: 'Sales Training Graduation',
    company: 'AFEC',
    location: 'France',
    type: 'education',
    description: 'Completed sales training at AFEC, focused on sales techniques, customer communication, discovery, negotiation, and turning product knowledge into clear customer value.',
    transactions: createTransactions(['Sales Techniques', 'Negotiation', 'Customer Discovery', 'Communication', 'Product Pitch', 'Retail Sales']),
    hash: generateHash('afec-sales-training-graduation-2012'),
    previousHash: generateHash('intel-sales-communication-2011'),
    nonce: 1337,
    confirmed: true,
  },
  {
    id: 'block-3',
    index: 3,
    timestamp: { start: '2013', end: '2014' },
    title: 'Commercial Agent / Client Relations',
    company: 'LDLC',
    location: 'France',
    type: 'work',
    description: 'Commercial agent and client relations role at LDLC. I organized tech product showrooms with clients, presented new hardware launches, managed sales follow-up, and advised customers through purchase decisions.',
    transactions: createTransactions(['Client Relations', 'Showrooms', 'Tech Products', 'Sales Follow-up', 'Customer Advice', 'Hardware']),
    hash: generateHash('ldlc-commercial-agent-2013-2014'),
    previousHash: generateHash('afec-sales-training-graduation-2012'),
    nonce: 2048,
    confirmed: true,
  },
  {
    id: 'block-4',
    index: 4,
    timestamp: { start: '2011', end: '2015' },
    title: 'Founder',
    company: 'Web Radio',
    location: 'Remote / Esports',
    type: 'project',
    description: 'Founded an esports web radio and built the operating team behind a 24/7 broadcast. Recruited and managed a 50-person French- and English-speaking team, supervised esports events, coordinated programming, and grew the audience to 2,000+ concurrent listeners.',
    transactions: createTransactions(['Founder', 'Web Radio', 'Esports', 'Team Management', 'Recruitment', 'Event Supervision', '24/7 Operations', '2,000+ Listeners']),
    hash: generateHash('web-radio-esports-founder-2011-2015'),
    previousHash: generateHash('ldlc-commercial-agent-2013-2014'),
    nonce: 404,
    confirmed: true,
  },
  {
    id: 'block-5',
    index: 5,
    timestamp: { start: '2014', end: '2017' },
    title: 'Founder',
    company: 'SharkWave',
    location: 'Esports',
    type: 'project',
    description: 'Founded and managed SharkWave, an esports team competing on Counter-Strike and League of Legends. Recruited new talent, organized team registrations, managed players and staff, and led marketing and communication while the teams competed at top level for the era.',
    transactions: createTransactions(['Founder', 'Esports Team', 'Recruitment', 'Team Management', 'Counter-Strike', 'League of Legends', 'Marketing', 'Competition Ops']),
    hash: generateHash('sharkwave-founder-2014-2017'),
    previousHash: generateHash('web-radio-esports-founder-2011-2015'),
    nonce: 8080,
    confirmed: true,
  },
  {
    id: 'block-6',
    index: 6,
    timestamp: { start: '2017', end: '2018' },
    title: 'IT Products Sales Advisor',
    company: 'Darty',
    location: 'France',
    type: 'work',
    description: 'Sales advisor for IT and consumer electronics products at Darty. Guided customers through technical purchase decisions, promoted the right products for their needs, managed stock availability, and supported the store floor with clear product knowledge.',
    transactions: createTransactions(['Retail Sales', 'IT Products', 'Customer Advice', 'Stock Management', 'Product Knowledge', 'Consumer Electronics']),
    hash: generateHash('darty-it-sales-advisor-2017-2018'),
    previousHash: generateHash('sharkwave-founder-2014-2017'),
    nonce: 9999,
    confirmed: true,
  },
  {
    id: 'block-7',
    index: 7,
    timestamp: { start: 'May 2020', end: 'Nov 2021' },
    title: 'Co-founder',
    company: 'Nutripet',
    location: 'Remote',
    type: 'project',
    description: 'Startup block. Different domain, same passion for solving real problems.',
    transactions: createTransactions(['React', 'Node.js', 'Product', 'Entrepreneurship']),
    hash: generateHash('nutripet-2020-2021'),
    previousHash: generateHash('darty-it-sales-advisor-2017-2018'),
    nonce: 256,
    confirmed: true,
  },
  {
    id: 'block-8',
    index: 8,
    timestamp: { start: 'Feb 2023', end: 'Sep 2023' },
    title: 'Frontend Developer',
    company: 'Lydia',
    location: 'Remote',
    type: 'work',
    description: '300+ tests added. Architecture refactored. UIKit on Chakra. Monolith → Monorepo. Node 10 → 18+.',
    transactions: createTransactions(['React', 'TypeScript', 'Chakra UI', 'Storybook', 'Jest', 'Monorepo', 'Testing']),
    hash: generateHash('lydia-2023'),
    previousHash: generateHash('nutripet-2020-2021'),
    nonce: 512,
    confirmed: true,
  },
  {
    id: 'block-9',
    index: 9,
    timestamp: { start: 'Sep 2023', end: 'May 2024' },
    title: 'Lead Fullstack',
    company: 'Cede Labs',
    location: 'Remote',
    type: 'work',
    description: 'First lead block. Architecture ownership, team mentoring. Crypto/DeFi space entered.',
    transactions: createTransactions(['React', 'TypeScript', 'Node.js', 'Web3', 'DeFi', 'Leadership', 'Architecture']),
    hash: generateHash('cedelabs-2023-2024'),
    previousHash: generateHash('lydia-2023'),
    nonce: 1024,
    confirmed: true,
  },
  {
    id: 'block-10',
    index: 10,
    timestamp: { start: 'Jan 2024', end: 'Dec 2024' },
    title: 'Co-founder',
    company: 'Daily Meme Corp',
    location: 'Remote',
    type: 'project',
    description: 'Memecoin launchpad on Abstract. Tech, design, and marketing. Building at the intersection of crypto culture and product.',
    transactions: createTransactions(['React', 'TypeScript', 'Web3', 'Abstract', 'Design', 'Marketing', 'Memecoin']),
    hash: generateHash('dailymemecorp-2024'),
    previousHash: generateHash('cedelabs-2023-2024'),
    nonce: 4269,
    confirmed: true,
    link: 'https://x.com/dailymemecorp',
  },
  {
    id: 'block-current',
    index: 11,
    timestamp: { start: 'Feb 2026', end: null },
    title: 'Business Developer / Product / Marketing',
    company: 'ShapeShift',
    location: 'Remote',
    type: 'current',
    description: 'Cross-functional contributor at ShapeShift: BD, product, marketing, and technical integration work. I open PRs for chain and DEX integrations, coordinate partner relationships across engineering, design, and marketing, run competitive analysis, and built an AI-automated outreach and follow-up tool across Salesforce, Telegram, and ShapeShift workflows.',
    transactions: createTransactions(['BD', 'Product', 'Marketing', 'Chain Integrations', 'DEX Integrations', 'Partner Comms', 'AI Automation', 'Salesforce', 'Telegram', 'Competitive Analysis']),
    hash: '0x????????????????????????????????????????????????????????????????',
    previousHash: generateHash('dailymemecorp-2024'),
    nonce: 0, // Still mining
    confirmed: false,
  },
];

export const CAREER_CHAIN: Chain = {
  blocks: BLOCKS,
  difficulty: 4,
  totalBlocks: BLOCKS.length,
};

export const getBlockByIndex = (index: number): Block | undefined => {
  return BLOCKS.find(b => b.index === index);
};

export const getConfirmedBlocks = (): Block[] => {
  return BLOCKS.filter(b => b.confirmed);
};

export const getCurrentBlock = (): Block | undefined => {
  return BLOCKS.find(b => !b.confirmed);
};
