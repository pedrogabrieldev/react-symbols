import IconNoBackpackFill0Wght100Grad0Opsz48 from '../components/NoBackpackFill0Wght100Grad0Opsz48'
import IconNoBackpackFill0Wght200Grad0Opsz48 from '../components/NoBackpackFill0Wght200Grad0Opsz48'
import IconNoBackpackFill0Wght300Grad0Opsz48 from '../components/NoBackpackFill0Wght300Grad0Opsz48'
import IconNoBackpackFill0Wght400Grad0Opsz48 from '../components/NoBackpackFill0Wght400Grad0Opsz48'
import IconNoBackpackFill0Wght500Grad0Opsz48 from '../components/NoBackpackFill0Wght500Grad0Opsz48'
import IconNoBackpackFill0Wght600Grad0Opsz48 from '../components/NoBackpackFill0Wght600Grad0Opsz48'
import IconNoBackpackFill0Wght700Grad0Opsz48 from '../components/NoBackpackFill0Wght700Grad0Opsz48'
import IconNoBackpackFill1Wght100Grad0Opsz48 from '../components/NoBackpackFill1Wght100Grad0Opsz48'
import IconNoBackpackFill1Wght200Grad0Opsz48 from '../components/NoBackpackFill1Wght200Grad0Opsz48'
import IconNoBackpackFill1Wght300Grad0Opsz48 from '../components/NoBackpackFill1Wght300Grad0Opsz48'
import IconNoBackpackFill1Wght400Grad0Opsz48 from '../components/NoBackpackFill1Wght400Grad0Opsz48'
import IconNoBackpackFill1Wght500Grad0Opsz48 from '../components/NoBackpackFill1Wght500Grad0Opsz48'
import IconNoBackpackFill1Wght600Grad0Opsz48 from '../components/NoBackpackFill1Wght600Grad0Opsz48'
import IconNoBackpackFill1Wght700Grad0Opsz48 from '../components/NoBackpackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoBackpack = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoBackpackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoBackpackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoBackpackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoBackpackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoBackpackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoBackpackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoBackpackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoBackpackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoBackpackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoBackpackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoBackpackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoBackpackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoBackpackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoBackpackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
