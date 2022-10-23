import IconCodeBlocksFill0Wght100Grad0Opsz48 from '../components/CodeBlocksFill0Wght100Grad0Opsz48'
import IconCodeBlocksFill0Wght200Grad0Opsz48 from '../components/CodeBlocksFill0Wght200Grad0Opsz48'
import IconCodeBlocksFill0Wght300Grad0Opsz48 from '../components/CodeBlocksFill0Wght300Grad0Opsz48'
import IconCodeBlocksFill0Wght400Grad0Opsz48 from '../components/CodeBlocksFill0Wght400Grad0Opsz48'
import IconCodeBlocksFill0Wght500Grad0Opsz48 from '../components/CodeBlocksFill0Wght500Grad0Opsz48'
import IconCodeBlocksFill0Wght600Grad0Opsz48 from '../components/CodeBlocksFill0Wght600Grad0Opsz48'
import IconCodeBlocksFill0Wght700Grad0Opsz48 from '../components/CodeBlocksFill0Wght700Grad0Opsz48'
import IconCodeBlocksFill1Wght100Grad0Opsz48 from '../components/CodeBlocksFill1Wght100Grad0Opsz48'
import IconCodeBlocksFill1Wght200Grad0Opsz48 from '../components/CodeBlocksFill1Wght200Grad0Opsz48'
import IconCodeBlocksFill1Wght300Grad0Opsz48 from '../components/CodeBlocksFill1Wght300Grad0Opsz48'
import IconCodeBlocksFill1Wght400Grad0Opsz48 from '../components/CodeBlocksFill1Wght400Grad0Opsz48'
import IconCodeBlocksFill1Wght500Grad0Opsz48 from '../components/CodeBlocksFill1Wght500Grad0Opsz48'
import IconCodeBlocksFill1Wght600Grad0Opsz48 from '../components/CodeBlocksFill1Wght600Grad0Opsz48'
import IconCodeBlocksFill1Wght700Grad0Opsz48 from '../components/CodeBlocksFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCodeBlocks = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCodeBlocksFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCodeBlocksFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCodeBlocksFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCodeBlocksFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCodeBlocksFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCodeBlocksFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCodeBlocksFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCodeBlocksFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCodeBlocksFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCodeBlocksFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCodeBlocksFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCodeBlocksFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCodeBlocksFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCodeBlocksFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
