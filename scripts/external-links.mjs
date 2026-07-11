import { readdir, readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const roots = ['content', 'docs', 'principles']
const links = new Set()

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...await markdownFiles(path))
    } else if (extname(entry.name) === '.md') {
      files.push(path)
    }
  }

  return files
}

for (const root of roots) {
  for (const file of await markdownFiles(root)) {
    const markdown = await readFile(file, 'utf8')
    for (const match of markdown.matchAll(/https?:\/\/[^\s<>"')\]]+/g)) {
      links.add(match[0].replace(/[.,;:]$/, ''))
    }
  }
}

process.stdout.write(`${[...links].sort().join('\n')}\n`)
