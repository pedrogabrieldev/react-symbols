import * as fs from 'fs'
import chokidar from 'chokidar'
import { iconsMap } from './iconsMap.js'

const template = (name) => `
  import ${name}Filled100 from '../components/${name}Filled100'
  import ${name}Filled200 from '../components/${name}Filled200'
  import ${name}Filled300 from '../components/${name}Filled300'
  import ${name}Filled400 from '../components/${name}Filled400'
  import ${name}Filled500 from '../components/${name}Filled500'
  import ${name}Filled600 from '../components/${name}Filled600'
  import ${name}Filled700 from '../components/${name}Filled700'
  import ${name}Outlined100 from '../components/${name}Outlined100'
  import ${name}Outlined200 from '../components/${name}Outlined200'
  import ${name}Outlined300 from '../components/${name}Outlined300'
  import ${name}Outlined400 from '../components/${name}Outlined400'
  import ${name}Outlined500 from '../components/${name}Outlined500'
  import ${name}Outlined600 from '../components/${name}Outlined600'
  import ${name}Outlined700 from '../components/${name}Outlined700'

  import { IconTemplateProps } from '../IconTemplate.types'

  export const ${name} = ({ variant, size = 48, weight = '400', color }: IconTemplateProps) => {
    switch (true) {
      case variant === 'filled' && weight === '100':
        return <${name}Filled100 size={size} color={color} />
      case variant === 'filled' && weight === '200':
        return <${name}Filled200 size={size} color={color} />
      case variant === 'filled' && weight === '300':
        return <${name}Filled300 size={size} color={color} />
      case variant === 'filled' && weight === '400':
        return <${name}Filled400 size={size} color={color} />
      case variant === 'filled' && weight === '500':
        return <${name}Filled500 size={size} color={color} />
      case variant === 'filled' && weight === '600':
        return <${name}Filled600 size={size} color={color} />
      case variant === 'filled' && weight === '700':
        return <${name}Filled700 size={size} color={color} />
      case variant === 'outlined' && weight === '100':
        return <${name}Outlined100 size={size} color={color} />
      case variant === 'outlined' && weight === '200':
        return <${name}Outlined200 size={size} color={color} />
      case variant === 'outlined' && weight === '300':
        return <${name}Outlined300 size={size} color={color} />
      case variant === 'outlined' && weight === '400':
        return <${name}Outlined400 size={size} color={color} />
      case variant === 'outlined' && weight === '500':
        return <${name}Outlined500 size={size} color={color} />
      case variant === 'outlined' && weight === '600':
        return <${name}Outlined600 size={size} color={color} />
      case variant === 'outlined' && weight === '700':
        return <${name}Outlined700 size={size} color={color} />
      default:
        return null
    }
  }
`

const watcher = chokidar
  .watch('./src/components', { persistent: false })
  .on('add', (path) => {
    const temp = path.replace(/.*\/components\//, '')
    const temp2 = temp.replace(/tsx.*/, 'svg')
    const name = iconsMap[`${temp2}`]

    if (!fileExists(`./src/exported/${name}.tsx`)) {
      createFile(name)
      updateIndex(name)
    }
  })

function createFile(name) {
  const fileName = `${name}.tsx`
  const filePath = `./src/exported/${fileName}`

  fs.writeFile(filePath, template(name), (err) => {
    if (err) throw err
    console.log('Created file: ', filePath)
    return true
  })
}

function updateIndex(name) {
  fs.appendFile(
    './src/exported/index.ts',
    `export { ${name} } from './${name}'\n`,
    (err) => {
      if (err) throw err
    }
  )
}

const fileExists = (path) => fs.existsSync(path)
