import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  QrCode,
  Radio,
  Share2,
  Sparkles,
} from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import rossiLogo from './assets/brand/rossi-logo.png'
import './CardPage.css'

const contactEmail = 'chris@therossicompany.com'
const facebookUrl = 'https://www.facebook.com/profile.php?id=61590228683996'
const cardUrl = 'https://www.therossicompany.com/'

const cardActions = [
  { label: 'View Work', href: '/#work', icon: ArrowRight },
  { label: 'Contact', href: `mailto:${contactEmail}`, icon: Mail },
  { label: 'Facebook', href: facebookUrl, icon: ExternalLink, external: true },
]

const vCardBaseFields = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Rossi;Christopher;;;',
  'FN:Christopher Rossi',
  'ORG:The Rossi Company',
  'TITLE:Founder',
  `EMAIL:${contactEmail}`,
  'URL:https://www.therossicompany.com/',
  'ADR;TYPE=WORK:;; ;Bowling Green;OH;;United States',
  'NOTE:Digital Systems / AI / Automation',
]

const foldVCardLine = (line) => {
  const limit = 73
  const chunks = []

  for (let index = 0; index < line.length; index += limit) {
    chunks.push(`${index === 0 ? '' : ' '}${line.slice(index, index + limit)}`)
  }

  return chunks.join('\r\n')
}

const arrayBufferToBase64 = (buffer) => {
  const bytes = new Uint8Array(buffer)
  const chunkSize = 0x8000
  let binary = ''

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize))
  }

  return window.btoa(binary)
}

function CardPage() {
  const [shareStatus, setShareStatus] = useState('')
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24 })
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24 })
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7])
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6])

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const enterCommandCenter = () => {
    window.location.assign('/')
  }

  const buildVCard = async () => {
    const fields = [...vCardBaseFields]

    try {
      const response = await fetch(rossiLogo)
      const logoBuffer = await response.arrayBuffer()
      const logoBase64 = arrayBufferToBase64(logoBuffer)
      fields.push(foldVCardLine(`PHOTO;ENCODING=b;TYPE=PNG:${logoBase64}`))
    } catch {
      // Contact import still works if an older browser blocks local asset encoding.
    }

    fields.push('END:VCARD')
    return `${fields.join('\r\n')}\r\n`
  }

  const saveContact = async () => {
    const contactCard = await buildVCard()
    const blob = new Blob([contactCard], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'christopher-rossi.vcf'
    document.body.append(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  const copyCardUrl = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(cardUrl)
      return
    }

    const textArea = document.createElement('textarea')
    textArea.value = cardUrl
    textArea.setAttribute('readonly', '')
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.append(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
  }

  const shareCard = async () => {
    const shareData = {
      title: 'Christopher Rossi — The Rossi Company',
      text: 'Modern websites, AI-assisted workflows, automation, dashboards, and digital systems for local businesses.',
      url: cardUrl,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        setShareStatus('Shared')
      } else {
        await copyCardUrl()
        setShareStatus('Card link copied')
      }
    } catch (error) {
      if (error?.name === 'AbortError') {
        return
      }

      try {
        await copyCardUrl()
        setShareStatus('Card link copied')
      } catch {
        setShareStatus('Copy unavailable')
      }
    }

    window.setTimeout(() => setShareStatus(''), 2400)
  }

  return (
    <main className="card-experience">
      <div className="card-ambient" aria-hidden="true">
        <span></span>
        <span></span>
      </div>

      <motion.section
        className="card-stage"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="access-card-wrap"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.article
            className="access-card"
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, rotateX: 10, y: 24 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 95, damping: 18, delay: 0.12 }}
          >
            <div className="access-card-sheen" aria-hidden="true"></div>
            <div className="access-card-top">
              <div className="access-logo">
                <img src={rossiLogo} alt="" />
              </div>
              <div className="access-status">
                <span></span>
                Digital Card Active
              </div>
            </div>

            <div className="access-identity">
              <p>Christopher Rossi</p>
              <h1>Founder — The Rossi Company</h1>
              <span>Bowling Green, OH</span>
            </div>

            <div className="access-system-row">
              <div>
                <small>Focus</small>
                <strong>Digital Systems / AI / Automation</strong>
              </div>
              <div className="access-scan" aria-label={`QR code for ${cardUrl}`}>
                <QRCodeSVG
                  value={cardUrl}
                  size={64}
                  bgColor="transparent"
                  fgColor="#f6f8fb"
                  level="M"
                  marginSize={1}
                />
                <QrCode className="access-scan-icon" size={15} aria-hidden="true" />
              </div>
            </div>

            <div className="access-signal">
              <Radio size={15} aria-hidden="true" />
              NFC / QR / link-ready identity
            </div>
          </motion.article>
        </motion.div>

        <motion.div
          className="card-copy-panel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="card-kicker">
            <Sparkles size={15} aria-hidden="true" />
            Living business card
          </div>
          <h2>Modern digital systems for local businesses.</h2>
          <p>
            Connect with Christopher Rossi, view real work, or enter the
            command center behind the card: websites, AI-assisted workflows,
            automation, dashboards, and branded digital tools.
          </p>

          <div className="card-actions" aria-label="Digital card actions">
            {cardActions.map(({ label, href, icon: Icon, external }) => (
              <a
                className="card-action"
                href={href}
                key={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <Icon size={17} aria-hidden="true" />
                {label}
              </a>
            ))}
            <button className="card-action" type="button" onClick={saveContact}>
              <Download size={17} aria-hidden="true" />
              Save Contact
            </button>
            <button className="card-action" type="button" onClick={shareCard}>
              <Share2 size={17} aria-hidden="true" />
              Share Card
            </button>
          </div>
          <div className="share-status" aria-live="polite">
            {shareStatus}
          </div>

          <motion.button
            className="enter-command-button"
            type="button"
            onClick={enterCommandCenter}
            whileTap={{ scale: 0.985 }}
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
          >
            Enter Command Center
            <ArrowRight size={18} aria-hidden="true" />
          </motion.button>
        </motion.div>
      </motion.section>
    </main>
  )
}

export default CardPage
