import * as fs from 'fs'
import chokidar from 'chokidar'

const template = (exportedComponentName) => `
  import ${exportedComponentName}Fill1Wght100Grad0Opsz48 from '../components/${exportedComponentName}Fill1Wght100Grad0Opsz48'
  import ${exportedComponentName}Fill1Wght200Grad0Opsz48 from '../components/${exportedComponentName}Fill1Wght200Grad0Opsz48'
  import ${exportedComponentName}Fill1Wght300Grad0Opsz48 from '../components/${exportedComponentName}Fill1Wght300Grad0Opsz48'
  import ${exportedComponentName}Fill1Wght400Grad0Opsz48 from '../components/${exportedComponentName}Fill1Wght400Grad0Opsz48'
  import ${exportedComponentName}Fill1Wght500Grad0Opsz48 from '../components/${exportedComponentName}Fill1Wght500Grad0Opsz48'
  import ${exportedComponentName}Fill1Wght600Grad0Opsz48 from '../components/${exportedComponentName}Fill1Wght600Grad0Opsz48'
  import ${exportedComponentName}Fill1Wght700Grad0Opsz48 from '../components/${exportedComponentName}Fill1Wght700Grad0Opsz48'
  import ${exportedComponentName}Fill0Wght100Grad0Opsz48 from '../components/${exportedComponentName}Fill0Wght100Grad0Opsz48'
  import ${exportedComponentName}Fill0Wght200Grad0Opsz48 from '../components/${exportedComponentName}Fill0Wght200Grad0Opsz48'
  import ${exportedComponentName}Fill0Wght300Grad0Opsz48 from '../components/${exportedComponentName}Fill0Wght300Grad0Opsz48'
  import ${exportedComponentName}Fill0Wght400Grad0Opsz48 from '../components/${exportedComponentName}Fill0Wght400Grad0Opsz48'
  import ${exportedComponentName}Fill0Wght500Grad0Opsz48 from '../components/${exportedComponentName}Fill0Wght500Grad0Opsz48'
  import ${exportedComponentName}Fill0Wght600Grad0Opsz48 from '../components/${exportedComponentName}Fill0Wght600Grad0Opsz48'
  import ${exportedComponentName}Fill0Wght700Grad0Opsz48 from '../components/${exportedComponentName}Fill0Wght700Grad0Opsz48'

  import { IconTemplateProps } from '../IconTemplate.types'

  export const ${exportedComponentName} = ({ variant, size = 48, weight = '400', color }: IconTemplateProps) => {
    switch (true) {
      case variant === 'filled' && weight === '100':
        return <${exportedComponentName}Fill1Wght100Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '200':
        return <${exportedComponentName}Fill1Wght200Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '300':
        return <${exportedComponentName}Fill1Wght300Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '400':
        return <${exportedComponentName}Fill1Wght400Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '500':
        return <${exportedComponentName}Fill1Wght500Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '600':
        return <${exportedComponentName}Fill1Wght600Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '700':
        return <${exportedComponentName}Fill1Wght700Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '100':
        return <${exportedComponentName}Fill0Wght100Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '200':
        return <${exportedComponentName}Fill0Wght200Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '300':
        return <${exportedComponentName}Fill0Wght300Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '400':
        return <${exportedComponentName}Fill0Wght400Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '500':
        return <${exportedComponentName}Fill0Wght500Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '600':
        return <${exportedComponentName}Fill0Wght600Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '700':
        return <${exportedComponentName}Fill0Wght700Grad0Opsz48 size={size} color={color} />
      default:
        return null
    }
  }
`

const watcher = chokidar
  .watch('./src/components', { persistent: false })
  .on('add', (path) => {
    const fileName = path.replace(/.*\/components\//, '')
    const componentName = fileName.replace(/.tsx.*/, '')
    const exportedComponentName = componentName.replace(/Fill[0-1]Wght.*/, '')

    if (!fs.existsSync(`src/exported/${exportedComponentName}.tsx`)) {
      createFile(exportedComponentName)
      updateIndex(exportedComponentName)
    }
  })

function createFile(exportedComponentName) {
  if (!fs.existsSync('./src/exported')) {
    fs.mkdirSync('./src/exported')
  }

  fs.writeFileSync(
    `./src/exported/${exportedComponentName}.tsx`,
    template(exportedComponentName),
    (err) => {
      if (err) throw err
      console.log('Created file: ', filePath)
      return true
    }
  )
}

function updateIndex(exportedComponentName) {
  fs.appendFile(
    './src/exported/index.ts',
    `export { ${exportedComponentName} } from './${exportedComponentName}'\n`,
    (err) => {
      if (err) throw err
    }
  )
}
