import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  LockKeyhole,
  Mail,
  MessageSquareText,
  Network,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import falconHomepagePreview from './assets/work/falcon-appraiser-homepage.png'
import falconOrdersPreview from './assets/work/falcon-orders-list.png'
import rossiLogo from './assets/brand/rossi-logo.png'
import kirkhamHomepagePreview from './assets/work/kirkham-homepage-preview.png'
import kirkhamSmsPreview from './assets/work/kirkham-sms-preview.png'
import primeLawnCarePreview from './assets/work/prime-lawn-care-preview.png'
import './App.css'

const services = [
  {
    title: 'Business Websites',
    description:
      'Clear, credible websites that help customers understand what you do and how to take the next step.',
    icon: Building2,
  },
  {
    title: 'Compliance & Trust Systems',
    description:
      'Practical digital foundations for credibility, platform approvals, customer communication, and reputation.',
    icon: ShieldCheck,
  },
  {
    title: 'Workflow Tools',
    description:
      'Focused tools that organize requests, tasks, documents, orders, and handoffs inside the business.',
    icon: ClipboardList,
  },
  {
    title: 'Automation Support',
    description:
      'Simple automation that reduces repeated admin work without making the business harder to manage.',
    icon: Network,
  },
]

const work = [
  {
    title: 'Contractor SMS-Ready Website',
    description:
      'A contractor website built to strengthen credibility, present commercial services clearly, and support SMS/texting platform approval requirements.',
    icon: MessageSquareText,
    tags: ['Contractor Website', 'SMS Compliance', 'Trust Signals'],
    cta: 'View case study',
    image: kirkhamHomepagePreview,
    secondaryImage: kirkhamSmsPreview,
    imageAlt: 'Kirkham Contracting website homepage preview',
    secondaryAlt: 'Kirkham Contracting SMS compliance page preview',
    previewClass: 'kirkham-preview',
  },
  {
    title: 'Prime Lawn Care',
    description:
      'A local service business website designed to present services clearly, build trust quickly, and make quote requests simple.',
    icon: Wrench,
    tags: ['Local Business', 'Website', 'Lead Capture'],
    cta: 'View live site',
    href: 'https://prime-lawn-care.vercel.app/',
    image: primeLawnCarePreview,
    imageAlt: 'Prime Lawn Care website preview',
    previewClass: 'prime-preview',
  },
  {
    title: 'Falcon Platform',
    description:
      'A workflow and order management platform built for appraisal operations, tracking orders, deadlines, reviews, and team handoffs.',
    icon: BriefcaseBusiness,
    tags: ['Operations Platform', 'Workflow', 'Appraisal Tech'],
    cta: 'Private concept',
    image: falconHomepagePreview,
    secondaryImage: falconOrdersPreview,
    imageAlt: 'Falcon Platform appraiser dashboard preview',
    secondaryAlt: 'Falcon Platform orders list preview',
    previewClass: 'falcon-preview',
    private: true,
  },
]

const systemItems = [
  'Websites',
  'Workflow Tools',
  'Automation',
  'Business Systems',
]

const benefits = [
  {
    title: 'Look more credible',
    description:
      'Give prospects, partners, and platforms a clear reason to trust your business before they ever call.',
    icon: BadgeCheck,
  },
  {
    title: 'Capture better leads',
    description:
      'Make it easier for the right customers to understand your offer and take the next step.',
    icon: MessageSquareText,
  },
  {
    title: 'Reduce manual follow-up',
    description:
      'Use simple systems to organize requests, handoffs, and recurring admin work.',
    icon: Network,
  },
  {
    title: 'Support approvals and growth',
    description:
      'Build the digital foundation needed for texting, trust, operations, and future expansion.',
    icon: CheckCircle2,
  },
]

function ProjectPreview({ image, imageAlt, secondaryImage, secondaryAlt, previewClass }) {
  return (
    <div className={`preview-screen screenshot-preview ${previewClass}`}>
      <div className="preview-browser-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="screenshot-stage">
        <img className="project-screenshot" src={image} alt={imageAlt} />
        {secondaryImage && (
          <div className="secondary-screenshot-frame">
            <div className="secondary-browser-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img
              className="project-screenshot-secondary"
              src={secondaryImage}
              alt={secondaryAlt}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0)
  const activeWork = work[activeWorkIndex]
  const ActiveWorkIcon = activeWork.icon

  const showPreviousWork = () => {
    setActiveWorkIndex((current) => (current - 1 + work.length) % work.length)
  }

  const showNextWork = () => {
    setActiveWorkIndex((current) => (current + 1) % work.length)
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Rossi Company home">
          <img className="brand-logo" src={rossiLogo} alt="" />
          <span className="brand-text">The Rossi Company</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="mailto:chris@therossicompany.com">
          Let's Talk
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <BadgeCheck size={18} aria-hidden="true" />
            Practical outcomes for growing businesses
          </p>
          <h1>Build better business systems.</h1>
          <p className="hero-subtitle">
            The Rossi Company helps small businesses look more professional,
            capture more leads, and run more efficiently through websites,
            workflow tools, and practical automation.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:chris@therossicompany.com">
              Start a conversation
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#work">
              View work
            </a>
          </div>
          <p className="credibility-strip">
            Ohio-based <span>•</span> Built for small businesses <span>•</span>{' '}
            Websites, workflows, automation
          </p>
        </div>

        <aside className="systems-panel" aria-label="System capabilities">
          <div className="panel-status">
            <span className="status-light"></span>
            Systems audit ready
          </div>
          <div className="panel-topline">
            <span>Company systems</span>
            <CheckCircle2 size={18} aria-hidden="true" />
          </div>
          <div className="panel-stack">
            {systemItems.map((item) => (
              <div className="system-row" key={item}>
                <span className="system-dot"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="panel-note">
            Built to make the business easier to trust, run, and grow.
          </div>
        </aside>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="section-kicker">What we build</p>
          <h2>Websites and systems built around business outcomes.</h2>
        </div>
        <div className="card-grid">
          {services.map(({ title, description, icon: Icon }) => (
            <article className="info-card" key={title}>
              <div className="icon-box">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section outcomes-section" id="outcomes">
        <div className="section-heading">
          <p className="section-kicker">Why it matters</p>
          <h2>What this actually does for your business</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article className="benefit-block" key={title}>
              <div className="benefit-icon">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted-section" id="work">
        <div className="work-heading-row">
          <div className="section-heading">
            <p className="section-kicker">Featured work</p>
            <h2>Real use cases built to improve trust, leads, and efficiency.</h2>
          </div>
          <div className="work-controls" aria-label="Featured work carousel controls">
            <button
              type="button"
              onClick={showPreviousWork}
              aria-label="Show previous featured project"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNextWork}
              aria-label="Show next featured project"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="work-showcase">
          <article className="project-feature-card" key={activeWork.title}>
            <ProjectPreview
              image={activeWork.image}
              imageAlt={activeWork.imageAlt}
              secondaryImage={activeWork.secondaryImage}
              secondaryAlt={activeWork.secondaryAlt}
              previewClass={activeWork.previewClass}
            />
            <div className="project-content">
              <div className="project-title-row">
                <div className="work-icon">
                  <ActiveWorkIcon size={22} aria-hidden="true" />
                </div>
                <h3>{activeWork.title}</h3>
              </div>
              <p>{activeWork.description}</p>
              <div className="project-tags" aria-label={`${activeWork.title} categories`}>
                {activeWork.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {activeWork.href ? (
                <a
                  className="project-link"
                  href={activeWork.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {activeWork.cta}
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ) : (
                <span className="project-link project-link-muted">
                  {activeWork.private && <LockKeyhole size={16} aria-hidden="true" />}
                  {activeWork.cta}
                </span>
              )}
            </div>
          </article>

          <div className="project-selectors" aria-label="Select featured project">
            {work.map((project, index) => (
              <button
                type="button"
                key={project.title}
                className={index === activeWorkIndex ? 'active' : ''}
                onClick={() => setActiveWorkIndex(index)}
                aria-label={`Show ${project.title}`}
                aria-pressed={index === activeWorkIndex}
              >
                <span>{project.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">
          <span>Founder/operator</span>
        </div>
        <div className="about-copy">
          <h2>Built by someone who understands practical business operations.</h2>
          <p>
            The Rossi Company is led by Chris Rossi, a real estate appraiser
            and builder of practical digital tools for small businesses. The
            focus is simple: create useful systems that make businesses look
            more professional, operate more efficiently, and grow with less
            friction.
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>What part of your business feels harder than it should?</h2>
          <p>
            Tell me what you are trying to improve. We can talk through whether
            the right next step is a better website, a cleaner workflow, or a
            simple automation that removes repeated work.
          </p>
        </div>
        <a className="button primary contact-button" href="mailto:chris@therossicompany.com">
          <Mail size={18} aria-hidden="true" />
          chris@therossicompany.com
        </a>
      </section>
    </main>
  )
}

export default App
