import { useRef } from 'react'
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
  PenTool,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
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
      'A contractor website built to strengthen online credibility and support SMS/texting platform approval requirements.',
    icon: MessageSquareText,
    tags: ['Website', 'Compliance', 'Contractors'],
    cta: 'View case study',
    preview: 'contractor',
  },
  {
    title: 'Prime Lawn Care',
    description:
      'A local business website designed to present services clearly and make quote requests simple.',
    icon: Wrench,
    tags: ['Website', 'Local Business', 'Lead Capture'],
    cta: 'View live site',
    href: 'https://prime-lawn-care.vercel.app/',
    preview: 'lawn',
  },
  {
    title: 'Falcon Platform',
    description:
      'A workflow and order management platform concept for appraisal operations.',
    icon: BriefcaseBusiness,
    tags: ['Workflow', 'Appraisal', 'Operations'],
    cta: 'Private concept',
    preview: 'falcon',
    private: true,
  },
  {
    title: 'CreatorFuelAI Lab',
    description:
      'A creative testing ground for AI-assisted content, websites, and digital media experiments.',
    icon: PenTool,
    tags: ['AI', 'Content', 'Experiments'],
    cta: 'View experiments',
    preview: 'lab',
  },
]

const systemItems = [
  'Websites',
  'Workflow Tools',
  'Automation',
  'Business Systems',
]

function ProjectPreview({ type, title }) {
  return (
    <div className={`preview-screen ${type}`} aria-label={`${title} preview`}>
      <div className="preview-browser-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="preview-body">
        {type === 'contractor' && (
          <>
            <div className="contractor-layout">
              <div className="preview-nav-line">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="preview-hero-block">
                <span className="preview-pill">Licensed & insured</span>
                <strong>Reliable contractor services</strong>
                <small>Trust signals, service areas, and quick contact paths.</small>
              </div>
            </div>
            <div className="contractor-proof-row">
              <span>SMS-ready</span>
              <span>Reviews</span>
              <span>Service areas</span>
            </div>
            <div className="contractor-card-row">
              <span>
                <strong>Estimate</strong>
                <small>Clear request flow</small>
              </span>
              <span>
                <strong>Compliance</strong>
                <small>Credibility details</small>
              </span>
            </div>
          </>
        )}
        {type === 'lawn' && (
          <>
            <div className="preview-banner">
              <div>
                <strong>Prime Lawn Care</strong>
                <small>Weekly mowing, cleanups, and seasonal care.</small>
              </div>
              <span>Get a fast quote</span>
            </div>
            <div className="preview-service-row">
              <span>Mowing</span>
              <span>Cleanup</span>
              <span>Edging</span>
            </div>
            <div className="preview-form-card">
              <strong>Request a quote</strong>
              <span>Name and address</span>
              <span>Service needed</span>
              <button type="button" tabIndex={-1}>Request quote</button>
            </div>
          </>
        )}
        {type === 'falcon' && (
          <>
            <div className="preview-dashboard-top">
              <strong>Order queue</strong>
              <span>24 active</span>
            </div>
            <div className="preview-dashboard-grid">
              <span>
                <strong>12</strong>
                <small>Inspections</small>
              </span>
              <span>
                <strong>7</strong>
                <small>Reports</small>
              </span>
              <span>
                <strong>5</strong>
                <small>Reviews</small>
              </span>
            </div>
            <div className="preview-table">
              <span>
                <b>Client</b>
                <b>Status</b>
                <b>Due</b>
              </span>
              <span>
                <b>Order 1048</b>
                <b>Scheduled</b>
                <b>Today</b>
              </span>
              <span>
                <b>Order 1049</b>
                <b>Review</b>
                <b>Fri</b>
              </span>
            </div>
          </>
        )}
        {type === 'lab' && (
          <>
            <div className="preview-lab-hero">
              <strong>CreatorFuelAI</strong>
              <small>Content systems, landing pages, and media experiments.</small>
            </div>
            <div className="preview-media-grid">
              <span>Prompt</span>
              <span>Script</span>
              <span>Page</span>
              <span>Asset</span>
            </div>
            <div className="lab-output-strip">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function App() {
  const workTrackRef = useRef(null)

  const scrollWork = (direction) => {
    const track = workTrackRef.current

    if (!track) {
      return
    }

    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.86, 680),
      behavior: 'smooth',
    })
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Rossi Company home">
          <span className="brand-mark">R</span>
          <span>The Rossi Company</span>
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
            Practical digital systems for growing businesses
          </p>
          <h1>Systems, websites, and automation for growing businesses.</h1>
          <p className="hero-subtitle">
            The Rossi Company helps small businesses build practical digital
            systems that improve trust, streamline operations, and support
            growth.
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
        </div>

        <aside className="systems-panel" aria-label="System capabilities">
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
          <h2>Digital systems that solve real business problems.</h2>
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

      <section className="section muted-section" id="work">
        <div className="work-heading-row">
          <div className="section-heading">
            <p className="section-kicker">Featured work</p>
            <h2>Built work, real use cases, practical outcomes.</h2>
          </div>
          <div className="work-controls" aria-label="Featured work carousel controls">
            <button
              type="button"
              onClick={() => scrollWork(-1)}
              aria-label="Scroll featured work left"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollWork(1)}
              aria-label="Scroll featured work right"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="work-showcase" ref={workTrackRef} tabIndex={0}>
          {work.map(({ title, description, icon: Icon, tags, cta, href, preview, private: isPrivate }) => (
            <article className="project-card" key={title}>
              <ProjectPreview type={preview} title={title} />
              <div className="project-content">
                <div className="project-title-row">
                  <div className="work-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <div className="project-tags" aria-label={`${title} categories`}>
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {href ? (
                  <a
                    className="project-link"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cta}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="project-link project-link-muted">
                    {isPrivate && <LockKeyhole size={16} aria-hidden="true" />}
                    {cta}
                  </span>
                )}
              </div>
            </article>
          ))}
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
          <h2>Have a business problem worth systemizing?</h2>
          <p>
            Let's talk through what you're trying to improve and whether a
            website, workflow tool, or automation system can help.
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
