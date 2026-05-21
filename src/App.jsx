import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  ChartNoAxesCombined,
  ExternalLink,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  MessageSquareText,
  Palette,
  Wrench,
  Workflow,
} from 'lucide-react'
import falconHomepagePreview from './assets/work/falcon-appraiser-homepage.png'
import falconOrdersPreview from './assets/work/falcon-orders-list.png'
import kirkhamHomepagePreview from './assets/work/kirkham-homepage-preview.png'
import kirkhamSmsPreview from './assets/work/kirkham-sms-preview.png'
import primeLawnCarePreview from './assets/work/prime-lawn-care-preview.png'
import rossiLogo from './assets/brand/rossi-logo.png'
import velocityDashboard from './assets/work/velocity-auto-spa/dashboard.png'
import velocityHero from './assets/work/velocity-auto-spa/hero.png'
import velocityMobile from './assets/work/velocity-auto-spa/mobile.png'
import CardPage from './CardPage.jsx'
import './App.css'

const contactEmail = 'chris@therossicompany.com'
const facebookUrl = 'https://www.facebook.com/profile.php?id=61590228683996'

const capabilities = [
  {
    title: 'Modern Websites',
    description:
      'Fast, credible sites that make a business feel established before the first call.',
    icon: Globe2,
    stat: 'First impression',
  },
  {
    title: 'AI Business Tools',
    description:
      'Practical AI helpers for intake, content, research, summaries, and repeat decisions.',
    icon: BrainCircuit,
    stat: 'Smarter work',
  },
  {
    title: 'Automation',
    description:
      'Follow-up, reminders, forms, handoffs, and repetitive admin work handled cleanly.',
    icon: Workflow,
    stat: 'Less busywork',
  },
  {
    title: 'Dashboards & Portals',
    description:
      'Private views for orders, customers, team tasks, documents, and daily operations.',
    icon: ChartNoAxesCombined,
    stat: 'Clear control',
  },
  {
    title: 'Branding Concepts',
    description:
      'Visual direction, offer positioning, page structure, and digital experience ideas.',
    icon: Palette,
    stat: 'Sharper presence',
  },
  {
    title: 'Local Business Systems',
    description:
      'Quote, booking, customer communication, and service workflows built around how you work.',
    icon: Building2,
    stat: 'Local growth',
  },
]

const valueItems = [
  {
    title: 'Better first impressions',
    description:
      'A cleaner web presence helps customers understand who you are, what you do, and why you are credible.',
    icon: BadgeCheck,
  },
  {
    title: 'Cleaner intake',
    description:
      'Forms and quote flows can collect the right details upfront instead of starting every job with back-and-forth.',
    icon: MessageSquareText,
  },
  {
    title: 'Automated follow-up',
    description:
      'Simple reminders, confirmations, and status updates keep leads warm and customers informed.',
    icon: CalendarCheck,
  },
  {
    title: 'Modern credibility',
    description:
      'Portals, dashboards, and branded touchpoints make a local business feel organized and serious.',
    icon: Gauge,
  },
]

const showcaseFeatures = [
  'Brand identity direction',
  'Website and mobile UX',
  'Membership app concept',
  'Owner dashboard thinking',
  'AI-assisted creative direction',
]

const projects = [
  {
    title: 'Contractor SMS-Ready Website',
    type: 'Real project',
    description:
      'A credibility-focused contractor site built around clear services, trust signals, and SMS/texting platform approval requirements.',
    icon: MessageSquareText,
    tags: ['Contractor Website', 'SMS Compliance', 'Trust Signals'],
    cta: 'Case study preview',
    image: kirkhamHomepagePreview,
    secondaryImage: kirkhamSmsPreview,
    imageAlt: 'Kirkham Contracting website homepage preview',
    secondaryAlt: 'Kirkham Contracting SMS compliance page preview',
  },
  {
    title: 'Prime Lawn Care',
    type: 'Live website',
    description:
      'A local service website designed to present lawn care services clearly, build trust quickly, and make quote requests simple.',
    icon: Wrench,
    tags: ['Local Business', 'Website', 'Lead Capture'],
    cta: 'View live site',
    href: 'https://prime-lawn-care.vercel.app/',
    image: primeLawnCarePreview,
    imageAlt: 'Prime Lawn Care website preview',
  },
  {
    title: 'Falcon Platform',
    type: 'Private product',
    description:
      'A workflow and order management product for appraisal operations, tracking orders, deadlines, reviews, and team handoffs.',
    icon: BriefcaseBusiness,
    tags: ['Operations Platform', 'Workflow', 'Appraisal Tech'],
    cta: 'Private platform concept',
    image: falconHomepagePreview,
    secondaryImage: falconOrdersPreview,
    imageAlt: 'Falcon Platform appraiser dashboard preview',
    secondaryAlt: 'Falcon Platform orders list preview',
    private: true,
  },
]

function App() {
  if (window.location.pathname === '/card') {
    return <CardPage />
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Rossi Company home">
          <img className="brand-logo" src={rossiLogo} alt="" />
          <span className="brand-text">The Rossi Company</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#build">What I Build</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={`mailto:${contactEmail}`}>
          <Mail size={16} aria-hidden="true" />
          Contact Me
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-environment" aria-hidden="true"></div>
        <img className="hero-watermark" src={rossiLogo} alt="" aria-hidden="true" />

        <div className="card-dock" aria-label="Docked digital card preview">
          <div className="dock-rail" aria-hidden="true">
            <span></span>
          </div>
          <a className="docked-card" href="/card" aria-label="Open Christopher Rossi digital card">
            <span className="docked-card-glow" aria-hidden="true"></span>
            <div className="docked-card-top">
              <img src={rossiLogo} alt="" />
              <span>Digital card</span>
            </div>
            <div className="docked-card-copy">
              <strong>Christopher Rossi</strong>
              <span>Founder / The Rossi Company</span>
              <small>Bowling Green, OH</small>
            </div>
            <div className="docked-card-footer">
              <span>Website</span>
              <span>AI</span>
              <span>Automation</span>
            </div>
          </a>
        </div>

        <div className="hero-copy">
          <p className="hero-brand-label">The Rossi Company</p>
          <h1>Modern digital systems for local businesses.</h1>
          <p className="hero-subtitle">
            Premium websites, practical automation, AI-assisted workflows,
            dashboards, and portals built for sharper first impressions and
            cleaner operations.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View Work
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#build">
              What I Build
            </a>
            <a className="button ghost" href={`mailto:${contactEmail}`}>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="build">
        <div className="section-heading">
          <p className="section-kicker">What I Build</p>
          <h2>Digital tools that look sharp and actually help the business run.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ title, description, icon: Icon, stat }) => (
            <article className="capability-card" key={title}>
              <div className="capability-top">
                <div className="icon-box">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <span>{stat}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Real Work</p>
          <h2>Projects and products built around credibility, leads, and operations.</h2>
          <p className="section-copy">
            Actual websites and internal tools, shown separately from concept
            demonstrations so the portfolio proof stays clear.
          </p>
        </div>
        <div className="project-grid">
          {projects.map(({ title, type, description, icon: Icon, tags, cta, href, image, imageAlt, secondaryImage, secondaryAlt, private: isPrivate }) => (
            <article className="project-card" key={title}>
              <div className="project-image-frame">
                <img className="project-image" src={image} alt={imageAlt} />
                {secondaryImage && (
                  <div className="project-secondary-frame">
                    <img src={secondaryImage} alt={secondaryAlt} />
                  </div>
                )}
              </div>
              <div className="project-card-copy">
                <span className="project-type">{type}</span>
                <div className="project-title-row">
                  <div className="icon-box">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <div className="feature-pills project-tags" aria-label={`${title} categories`}>
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {href ? (
                  <a className="project-link" href={href} target="_blank" rel="noreferrer">
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

      <section className="showcase-section" id="concepts">
        <div className="section-heading showcase-heading">
          <p className="section-kicker">Concept Demonstration</p>
          <h2>Velocity Auto Spa shows how a local brand can become a full digital experience.</h2>
        </div>

        <article className="concept-showcase">
          <div className="concept-visual" aria-label="Velocity Auto Spa concept interface preview">
            <div className="concept-hero-image">
              <img src={velocityHero} alt="Velocity Auto Spa concept website hero screen" />
            </div>
            <div className="concept-supporting-images">
              <div className="concept-mobile-image">
                <img src={velocityMobile} alt="Velocity Auto Spa mobile app concept screen" />
              </div>
              <div className="concept-dashboard-image">
                <img src={velocityDashboard} alt="Velocity Auto Spa dashboard concept screen" />
              </div>
            </div>
          </div>

          <div className="concept-copy">
            <div className="concept-badge">
              <Layers3 size={16} aria-hidden="true" />
              Concept demonstration, not a real client
            </div>
            <h3>A car wash brand imagined as a website, app, and owner dashboard.</h3>
            <p>
              Velocity Auto Spa demonstrates branding, landing-page design,
              app-style booking, membership UX, dashboard thinking, and
              AI-assisted creative direction in one polished concept system.
            </p>
            <div className="feature-pills" aria-label="Velocity Auto Spa concept features">
              {showcaseFeatures.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="section value-section">
        <div className="section-heading">
          <p className="section-kicker">Business Value</p>
          <h2>Practical improvements a local business can feel.</h2>
        </div>
        <div className="value-grid">
          {valueItems.map(({ title, description, icon: Icon }) => (
            <article className="value-card" key={title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Have a business that should look sharper and run cleaner online?</h2>
          <p>
            Reach out to The Rossi Company. I build serious digital work for
            real local businesses: websites, customer workflows, portals,
            automation, and the systems behind them.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${contactEmail}`}>
            <Mail size={18} aria-hidden="true" />
            Contact Me
          </a>
          <a className="button secondary" href={facebookUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={18} aria-hidden="true" />
            Follow on Facebook
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
