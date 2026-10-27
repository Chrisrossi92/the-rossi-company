import assert from 'node:assert/strict'
const base = 'http://127.0.0.1:4173'
for (const [path, mime] of [['/', 'text/html'], ['/card', 'text/html'], ['/card/', 'text/html'], ['/robots.txt', 'text/plain'], ['/sitemap.xml', 'xml']]) {
  const response = await fetch(base + path)
  assert.equal(response.status, 200)
  assert.ok(response.headers.get('content-type').includes(mime))
  const body = await response.text()
  if (path === '/robots.txt') assert.ok(body.startsWith('User-agent:') && !body.includes('<html'))
  if (path === '/sitemap.xml') assert.ok(body.includes('<urlset') && !body.includes('<html'))
  if (path === '/') {
    assert.ok(body.includes('<h1>') && body.includes('Optional ongoing help'))
    for (const [, asset] of body.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)) {
      const result = await fetch(base + asset)
      assert.equal(result.status, 200)
      assert.ok(!result.headers.get('content-type').includes('text/html'))
    }
  }
  console.log(`${path}: 200 ${response.headers.get('content-type')} PASS`)
}
