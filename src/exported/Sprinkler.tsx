import IconSprinklerFill0Wght100Grad0Opsz48 from '../components/SprinklerFill0Wght100Grad0Opsz48'
import IconSprinklerFill0Wght200Grad0Opsz48 from '../components/SprinklerFill0Wght200Grad0Opsz48'
import IconSprinklerFill0Wght300Grad0Opsz48 from '../components/SprinklerFill0Wght300Grad0Opsz48'
import IconSprinklerFill0Wght400Grad0Opsz48 from '../components/SprinklerFill0Wght400Grad0Opsz48'
import IconSprinklerFill0Wght500Grad0Opsz48 from '../components/SprinklerFill0Wght500Grad0Opsz48'
import IconSprinklerFill0Wght600Grad0Opsz48 from '../components/SprinklerFill0Wght600Grad0Opsz48'
import IconSprinklerFill0Wght700Grad0Opsz48 from '../components/SprinklerFill0Wght700Grad0Opsz48'
import IconSprinklerFill1Wght100Grad0Opsz48 from '../components/SprinklerFill1Wght100Grad0Opsz48'
import IconSprinklerFill1Wght200Grad0Opsz48 from '../components/SprinklerFill1Wght200Grad0Opsz48'
import IconSprinklerFill1Wght300Grad0Opsz48 from '../components/SprinklerFill1Wght300Grad0Opsz48'
import IconSprinklerFill1Wght400Grad0Opsz48 from '../components/SprinklerFill1Wght400Grad0Opsz48'
import IconSprinklerFill1Wght500Grad0Opsz48 from '../components/SprinklerFill1Wght500Grad0Opsz48'
import IconSprinklerFill1Wght600Grad0Opsz48 from '../components/SprinklerFill1Wght600Grad0Opsz48'
import IconSprinklerFill1Wght700Grad0Opsz48 from '../components/SprinklerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSprinkler = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSprinklerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSprinklerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSprinklerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSprinklerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSprinklerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSprinklerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSprinklerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSprinklerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSprinklerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSprinklerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSprinklerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSprinklerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSprinklerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSprinklerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
