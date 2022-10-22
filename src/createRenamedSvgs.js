import * as fs from 'fs'
import chokidar from 'chokidar'
import { iconsMap } from './iconsMap.js'
import util from 'node:util'

const watcher = chokidar
  .watch('./src/assets', { persistent: false })
  .on('add', (path) => {
    const temp = path.replace(/.*\/assets\//, '')
    const temp2 = temp.replace(/.svg.*/, '')
    const name = temp2

    let fileName
    let mapTo

    if (name.includes('_FILL0')) {
      fileName = name.replace(/_FILL0.*/, '')
      mapTo = fileName
      fileName += '-outlined'
      if (name.includes('wght100')) {
        fileName += '-100'
      } else if (name.includes('wght200')) {
        fileName += '-200'
      } else if (name.includes('wght300')) {
        fileName += '-300'
      } else if (name.includes('wght400')) {
        fileName += '-400'
      } else if (name.includes('wght500')) {
        fileName += '-500'
      } else if (name.includes('wght600')) {
        fileName += '-600'
      } else if (name.includes('wght700')) {
        fileName += '-700'
      }
    } else if (name.includes('_FILL1')) {
      fileName = name.replace(/_FILL1.*/, '')
      mapTo = fileName
      fileName += '-filled'
      if (name.includes('wght100')) {
        fileName += '-100'
      } else if (name.includes('wght200')) {
        fileName += '-200'
      } else if (name.includes('wght300')) {
        fileName += '-300'
      } else if (name.includes('wght400')) {
        fileName += '-400'
      } else if (name.includes('wght500')) {
        fileName += '-500'
      } else if (name.includes('wght600')) {
        fileName += '-600'
      } else if (name.includes('wght700')) {
        fileName += '-700'
      }
    }

    let key = toPascalCase(fileName) + '.svg'

    fileName += '.svg'
    const filePath = `./src/assets_renamed/${fileName}`

    if (!fileExists(filePath)) {
      fs.copyFile(path, filePath, (err) => {
        if (err) throw err
        console.log(`File ${path} copied to ${filePath}`)
      })

      iconsMap[`${key}`] = toPascalCase(mapTo)
      fs.writeFileSync('./src/iconsMap.js', 'export const iconsMap = ')
      fs.appendFileSync('./src/iconsMap.js', util.inspect(iconsMap))
    }
  })

const fileExists = (path) => fs.existsSync(path)

function toPascalCase(string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase())
}
