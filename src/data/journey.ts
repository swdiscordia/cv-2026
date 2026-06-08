/**
 * @fileoverview Journey data - 0xm4king's career path
 */

import type { JourneyMilestone, StorySection } from '../types';
import { COLORS } from '../constants/config';

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'work-intel',
    title: 'Sales & Communications Representative',
    location: 'Retail stores, France',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    startDate: '2011',
    endDate: '2011',
    description: 'Sales and communication role for Intel in large retail stores. Promoted new processor launches, explained product benefits to customers, and supported sales teams on the floor.',
    type: 'work',
    technologies: ['Intel', 'Retail Sales', 'Communication', 'Product Promotion', 'Customer Advice', 'Hardware'],
    color: COLORS.MARKERS.work,
  },
  {
    id: 'education-afec',
    title: 'Sales Training Graduation',
    location: 'AFEC, France',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    startDate: '2012',
    endDate: '2012',
    description: 'Completed sales training at AFEC, focused on sales techniques, customer communication, discovery, negotiation, and turning product knowledge into clear customer value.',
    type: 'education',
    technologies: ['Sales Techniques', 'Negotiation', 'Customer Discovery', 'Communication', 'Product Pitch', 'Retail Sales'],
    color: COLORS.MARKERS.education,
  },
  {
    id: 'work-ldlc',
    title: 'Commercial Agent / Client Relations',
    location: 'LDLC, France',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    startDate: '2013',
    endDate: '2014',
    description: 'Commercial agent and client relations role at LDLC. Organized tech product showrooms with clients, presented new hardware launches, managed sales follow-up, and advised customers through purchase decisions.',
    type: 'work',
    technologies: ['Client Relations', 'Showrooms', 'Tech Products', 'Sales Follow-up', 'Customer Advice', 'Hardware'],
    color: COLORS.MARKERS.work,
  },
  {
    id: 'project-webradio',
    title: 'Founder',
    location: 'Remote / Esports',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    startDate: '2011',
    endDate: '2015',
    description: 'Founded an esports web radio and built the operating team behind a 24/7 broadcast. Recruited and managed a 50-person French- and English-speaking team, supervised esports events, coordinated programming, and grew the audience to 2,000+ concurrent listeners.',
    type: 'project',
    technologies: ['Founder', 'Web Radio', 'Esports', 'Team Management', 'Recruitment', 'Event Supervision', '24/7 Operations', '2,000+ Listeners'],
    color: COLORS.MARKERS.project,
  },
  {
    id: 'project-sharkwave',
    title: 'Founder',
    location: 'Esports',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    startDate: '2014',
    endDate: '2017',
    description: 'Founded and managed SharkWave, an esports team competing on Counter-Strike and League of Legends. Recruited new talent, organized team registrations, managed players and staff, and led marketing and communication while the teams competed at top level for the era.',
    type: 'project',
    technologies: ['Founder', 'Esports Team', 'Recruitment', 'Team Management', 'Counter-Strike', 'League of Legends', 'Marketing', 'Competition Ops'],
    color: COLORS.MARKERS.project,
  },
  {
    id: 'work-darty',
    title: 'IT Products Sales Advisor',
    location: 'Darty, France',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    startDate: '2017',
    endDate: '2018',
    description: 'Sales advisor for IT and consumer electronics products at Darty. Guided customers through technical purchase decisions, promoted the right products for their needs, managed stock availability, and supported the store floor with clear product knowledge.',
    type: 'work',
    technologies: ['Retail Sales', 'IT Products', 'Customer Advice', 'Stock Management', 'Product Knowledge', 'Consumer Electronics'],
    color: COLORS.MARKERS.work,
  },
  {
    id: 'education-oclock',
    title: 'Full Stack Web Developer Training',
    location: "O'clock, Remote / France",
    coordinates: { lat: 49.4178, lng: 2.8261 },
    startDate: '2019',
    endDate: '2020',
    description: "Completed full-stack web developer training at O'clock, focused on JavaScript, React, React Native, and modern web application development.",
    type: 'education',
    technologies: ['JavaScript', 'React', 'React Native', 'Full-stack Web', 'Web Apps', 'Front-end'],
    color: COLORS.MARKERS.education,
  },
  {
    id: 'project-solturtle',
    title: 'Founder',
    location: 'Solana NFT',
    coordinates: { lat: 49.4178, lng: 2.8261 },
    startDate: '2021',
    endDate: '2021',
    description: 'Founded SolTurtle during the Solana NFT wave. Created and maintained the roadmap, learned NFT tokenomics, managed the team, ran marketing campaigns and project relations, reached 40K sales volume across 2,000 sales, created a comic collaboration with top Solana NFT projects, and donated to a turtle welfare association.',
    type: 'project',
    technologies: ['Founder', 'Solana NFTs', 'Roadmap', 'Tokenomics', 'Marketing', 'Project Relations', '40K Volume', '2,000 Sales'],
    color: COLORS.MARKERS.project,
  },
  {
    id: 'work-cedelabs',
    title: 'Lead Fullstack',
    location: 'Remote',
    coordinates: { lat: 49.4178, lng: 2.8261 },
    startDate: '2023',
    endDate: '2024',
    description: 'Led fullstack development at Cede Labs. First lead role — owning architecture decisions, mentoring developers, shipping features. Crypto/DeFi space.',
    type: 'work',
    technologies: ['React', 'TypeScript', 'Node.js', 'Web3'],
    url: 'https://cede.store',
    color: COLORS.MARKERS.work,
  },
  {
    id: 'current',
    title: 'BD / Product / Marketing',
    location: 'Remote — ShapeShift',
    coordinates: { lat: 49.4178, lng: 2.8261 },
    startDate: '2026',
    endDate: null,
    description: 'Cross-functional work at ShapeShift across BD, product, marketing, partner communications, chain and DEX integrations, competitive analysis, and AI automation.',
    type: 'current',
    technologies: ['BD', 'Product', 'Marketing', 'Chain Integrations', 'DEX Integrations', 'AI Automation'],
    url: 'https://shapeshift.com',
    color: COLORS.MARKERS.current,
  },
];

export const STORY_SECTIONS: StorySection[] = [
  {
    id: 'intro',
    title: 'The Journey',
    subtitle: '10+ years of building for the web',
    milestoneIds: [],
  },
  {
    id: 'beginnings',
    title: 'First Steps',
    subtitle: 'Learning the craft',
    milestoneIds: ['work-intel', 'work-ldlc', 'work-darty'],
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Theory meets practice',
    milestoneIds: ['education-afec', 'education-oclock'],
  },
  {
    id: 'opensource',
    title: 'Community Projects',
    subtitle: 'Esports and team building',
    milestoneIds: ['project-webradio', 'project-sharkwave'],
  },
  {
    id: 'startups',
    title: 'Startups',
    subtitle: 'Building from scratch',
    milestoneIds: [],
  },
  {
    id: 'growth',
    title: 'Growth',
    subtitle: 'Scaling up',
    milestoneIds: ['project-solturtle', 'work-cedelabs'],
  },
  {
    id: 'present',
    title: 'Present',
    subtitle: 'DeFi & Web3',
    milestoneIds: ['current'],
  },
];

export const getMilestoneById = (id: string): JourneyMilestone | undefined => {
  return JOURNEY_MILESTONES.find((m) => m.id === id);
};

export const getMilestonesForSection = (sectionId: string): JourneyMilestone[] => {
  const section = STORY_SECTIONS.find((s) => s.id === sectionId);
  if (!section) return [];
  
  return section.milestoneIds
    .map(getMilestoneById)
    .filter((m): m is JourneyMilestone => m !== undefined);
};
