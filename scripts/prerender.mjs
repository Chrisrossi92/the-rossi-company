import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/prerender.js'

// Keep the interactive card client-rendered; prerender the public service page.
const template = await readFile('dist/index.html', 'utf8')
const card = template
  .replaceAll('Website Design &amp; Web Apps | The Rossi Company', 'Christopher Rossi — The Rossi Company')
  .replaceAll('https://www.therossicompany.com/"', 'https://www.therossicompany.com/card"')
await writeFile('dist/card.html', card)
await mkdir('dist/card', { recursive: true })
await writeFile('dist/card/index.html', card)
await writeFile('dist/index.html', template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
