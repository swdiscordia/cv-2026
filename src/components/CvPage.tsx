import { useEffect } from 'react';
import { BLOCKS } from '../data/chain';
import type { Block } from '../types/blockchain';
import './CvPage.css';

const SKILL_CATEGORIES = [
  {
    label: 'Business development',
    skills: ['Partnerships', 'Outbound', 'Pipeline Management', 'Partner Follow-up'],
  },
  {
    label: 'Web3 & DeFi',
    skills: ['Chain Integrations', 'DEX Integrations', 'Cross-chain', 'API / Widget', 'DeFi'],
  },
  {
    label: 'Product ops',
    skills: ['Product Feedback', 'Partner Validation', 'Competitive Analysis', 'Prioritization'],
  },
  {
    label: 'Automation',
    skills: ['AI Workflows', 'Salesforce', 'Telegram', 'CRM Automation', 'GitHub PRs'],
  },
  {
    label: 'Marketing',
    skills: ['Partner Comms', 'Designer Collaboration', 'Co-marketing', 'English / French'],
  },
];

const formatDate = (block: Block) => {
  const end = block.timestamp.end ?? 'Present';
  return `${block.timestamp.start} — ${end}`;
};

export const CvPage = () => {
  const workBlocks = BLOCKS
    .filter(b => b.type === 'work' || b.type === 'current')
    .sort((a, b) => b.index - a.index);

  const projectBlocks = BLOCKS
    .filter(b => b.type === 'project')
    .sort((a, b) => b.index - a.index);

  const educationBlocks = BLOCKS.filter(b => b.type === 'education');

  useEffect(() => {
    document.title = '0xDiscostu — CV';
    return () => { document.title = '0xDiscostu - Web3 Business Developer'; };
  }, []);

  return (
    <div className="cv-page">
      <div className="cv-actions">
        <a href="/" className="cv-back">&larr; Back to timeline</a>
        <button className="cv-download" onClick={() => window.print()}>
          Download PDF
        </button>
      </div>

      <div className="cv-sheet">
        <header className="cv-header">
          <div className="cv-identity">
            <h1 className="cv-name">0xDiscostu</h1>
            <p className="cv-title">Web3 BD &middot; Product &middot; Marketing &middot; Technical operator</p>
          </div>
          <div className="cv-contact">
            <span>github.com/swdiscordia</span>
            <span>x.com/Discostuu92</span>
            <span>contact@0xdiscostu.com</span>
          </div>
        </header>

        <div className="cv-body">
          <aside className="cv-sidebar">
            <section className="cv-section">
              <h2 className="cv-section-title">Skills</h2>
              {SKILL_CATEGORIES.map(cat => (
                <div key={cat.label} className="cv-skill-group">
                  <h3 className="cv-skill-label">{cat.label}</h3>
                  <p className="cv-skill-list">{cat.skills.join(' \u00B7 ')}</p>
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">Education</h2>
              {educationBlocks.map(block => (
                <div key={block.id} className="cv-edu-item">
                  <p className="cv-edu-degree">{block.title}</p>
                  <p className="cv-edu-school">{block.company}</p>
                  <p className="cv-edu-date">{formatDate(block)}</p>
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">Side Projects</h2>
              {projectBlocks.map(block => (
                <div key={block.id} className="cv-project-item">
                  <div className="cv-project-header">
                    <span className="cv-project-name">{block.company}</span>
                    <span className="cv-project-role">{block.title}</span>
                  </div>
                  <p className="cv-project-date">{formatDate(block)}</p>
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">Languages</h2>
              <p className="cv-lang">French &mdash; Native</p>
              <p className="cv-lang">English &mdash; Fluent</p>
            </section>
          </aside>

          <main className="cv-main">
            <h2 className="cv-section-title">Experience</h2>
            {workBlocks.map(block => (
              <div
                key={block.id}
                className={`cv-exp-item${!block.confirmed ? ' cv-exp-current' : ''}`}
              >
                <div className="cv-exp-header">
                  <div>
                    <h3 className="cv-exp-title">{block.title}</h3>
                    <p className="cv-exp-company">
                      {block.company} &middot; {block.location}
                    </p>
                  </div>
                  <span className="cv-exp-date">{formatDate(block)}</span>
                </div>
                <p className="cv-exp-desc">{block.description}</p>
                <div className="cv-exp-tech">
                  {block.transactions.map(tx => (
                    <span key={tx.id} className="cv-tech-tag">{tx.value}</span>
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>

        <footer className="cv-footer">
          <span className="cv-hash">
            {BLOCKS.length} blocks &middot; Web3 BD &middot; product, marketing, and technical execution
          </span>
        </footer>
      </div>
    </div>
  );
};
