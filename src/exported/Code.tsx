import IconCodeFill0Wght100Grad0Opsz48 from '../components/CodeFill0Wght100Grad0Opsz48'
import IconCodeFill0Wght200Grad0Opsz48 from '../components/CodeFill0Wght200Grad0Opsz48'
import IconCodeFill0Wght300Grad0Opsz48 from '../components/CodeFill0Wght300Grad0Opsz48'
import IconCodeFill0Wght400Grad0Opsz48 from '../components/CodeFill0Wght400Grad0Opsz48'
import IconCodeFill0Wght500Grad0Opsz48 from '../components/CodeFill0Wght500Grad0Opsz48'
import IconCodeFill0Wght600Grad0Opsz48 from '../components/CodeFill0Wght600Grad0Opsz48'
import IconCodeFill0Wght700Grad0Opsz48 from '../components/CodeFill0Wght700Grad0Opsz48'
import IconCodeFill1Wght100Grad0Opsz48 from '../components/CodeFill1Wght100Grad0Opsz48'
import IconCodeFill1Wght200Grad0Opsz48 from '../components/CodeFill1Wght200Grad0Opsz48'
import IconCodeFill1Wght300Grad0Opsz48 from '../components/CodeFill1Wght300Grad0Opsz48'
import IconCodeFill1Wght400Grad0Opsz48 from '../components/CodeFill1Wght400Grad0Opsz48'
import IconCodeFill1Wght500Grad0Opsz48 from '../components/CodeFill1Wght500Grad0Opsz48'
import IconCodeFill1Wght600Grad0Opsz48 from '../components/CodeFill1Wght600Grad0Opsz48'
import IconCodeFill1Wght700Grad0Opsz48 from '../components/CodeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCodeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCodeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCodeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCodeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCodeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCodeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCodeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCodeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCodeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCodeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCodeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCodeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCodeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCodeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
