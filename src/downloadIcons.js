import * as https from 'https'
import * as fs from 'fs'
import iconsList from './getIconsList.js'

const baseUrl =
  'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined'

async function downloadIcon(icon, fill, weight, url) {
  const path = `src/assets/${icon}_FILL${fill}_wght${weight}_GRAD0_opsz48.svg`
  const file = path.replace(/.*\/assets\//, '')

  if (!fs.existsSync(path)) {
    https.get(url, (res) => {
      const writeStream = fs.createWriteStream(path)

      res.pipe(writeStream)

      writeStream.on('finish', () => {
        writeStream.close()
        console.log(`${file} downloaded`)
      })

      writeStream.on('error', (err) => {
        console.log(err)
      })
    })
  }
}

iconsList.map((icon) => {
  let fill
  let weight
  let url

  for (let i = 0; i <= 1; i++) {
    fill = i
    for (let j = 1; j <= 7; j++) {
      weight = `${j}00`
      if (weight === '400') {
        if (fill === 0) {
          url = `${baseUrl}/${icon}/default/48px.svg`
        } else {
          url = `${baseUrl}/${icon}/fill1/48px.svg`
        }
      } else {
        url = `${baseUrl}/${icon}/wght${weight}`
        if (fill === 0) {
          url += '/48px.svg'
        } else {
          url += 'fill1/48px.svg'
        }
      }
      downloadIcon(icon, fill, weight, url)
    }
  }
})
