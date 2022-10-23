import IconFlipFill0Wght100Grad0Opsz48 from '../components/FlipFill0Wght100Grad0Opsz48'
import IconFlipFill0Wght200Grad0Opsz48 from '../components/FlipFill0Wght200Grad0Opsz48'
import IconFlipFill0Wght300Grad0Opsz48 from '../components/FlipFill0Wght300Grad0Opsz48'
import IconFlipFill0Wght400Grad0Opsz48 from '../components/FlipFill0Wght400Grad0Opsz48'
import IconFlipFill0Wght500Grad0Opsz48 from '../components/FlipFill0Wght500Grad0Opsz48'
import IconFlipFill0Wght600Grad0Opsz48 from '../components/FlipFill0Wght600Grad0Opsz48'
import IconFlipFill0Wght700Grad0Opsz48 from '../components/FlipFill0Wght700Grad0Opsz48'
import IconFlipFill1Wght100Grad0Opsz48 from '../components/FlipFill1Wght100Grad0Opsz48'
import IconFlipFill1Wght200Grad0Opsz48 from '../components/FlipFill1Wght200Grad0Opsz48'
import IconFlipFill1Wght300Grad0Opsz48 from '../components/FlipFill1Wght300Grad0Opsz48'
import IconFlipFill1Wght400Grad0Opsz48 from '../components/FlipFill1Wght400Grad0Opsz48'
import IconFlipFill1Wght500Grad0Opsz48 from '../components/FlipFill1Wght500Grad0Opsz48'
import IconFlipFill1Wght600Grad0Opsz48 from '../components/FlipFill1Wght600Grad0Opsz48'
import IconFlipFill1Wght700Grad0Opsz48 from '../components/FlipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
