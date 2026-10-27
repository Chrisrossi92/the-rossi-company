import { useState } from 'react'
import { ArrowRight, Mail, RotateCw } from 'lucide-react'
import rossiLogo from './assets/brand/rossi-logo.png'

export default function HeroCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="card-dock" aria-label="Christopher Rossi business card">
      <div className="hero-card-scene" id="hero-business-card">
        <div className={`hero-card-rotor${flipped ? ' is-flipped' : ''}`}>
          <div className="docked-card hero-card-front" aria-hidden={flipped} inert={flipped}>
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
              <span>Website</span><span>AI</span><span>Automation</span>
            </div>
          </div>
          <div className="docked-card hero-card-back" aria-hidden={!flipped} inert={!flipped}>
            <div className="docked-card-top">
              <img src={rossiLogo} alt="" />
              <span>Let’s connect</span>
            </div>
            <div className="docked-card-copy">
              <strong>Start with an idea.</strong>
              <span>Websites, web apps, and simpler everyday workflows.</span>
            </div>
            <div className="hero-card-links">
              <a href="mailto:chris@therossicompany.com"><Mail size={16} aria-hidden="true" />Email Chris</a>
              <a href="/card">Open digital card<ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
      <button className="hero-card-toggle" type="button" aria-controls="hero-business-card"
        aria-pressed={flipped} onClick={() => setFlipped(value => !value)}>
        <RotateCw size={16} aria-hidden="true" />
        {flipped ? 'Show card front' : 'Flip card'}
      </button>
    </div>
  )
}
