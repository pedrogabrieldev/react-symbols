import IconFlipToFrontFill0Wght100Grad0Opsz48 from '../components/FlipToFrontFill0Wght100Grad0Opsz48'
import IconFlipToFrontFill0Wght200Grad0Opsz48 from '../components/FlipToFrontFill0Wght200Grad0Opsz48'
import IconFlipToFrontFill0Wght300Grad0Opsz48 from '../components/FlipToFrontFill0Wght300Grad0Opsz48'
import IconFlipToFrontFill0Wght400Grad0Opsz48 from '../components/FlipToFrontFill0Wght400Grad0Opsz48'
import IconFlipToFrontFill0Wght500Grad0Opsz48 from '../components/FlipToFrontFill0Wght500Grad0Opsz48'
import IconFlipToFrontFill0Wght600Grad0Opsz48 from '../components/FlipToFrontFill0Wght600Grad0Opsz48'
import IconFlipToFrontFill0Wght700Grad0Opsz48 from '../components/FlipToFrontFill0Wght700Grad0Opsz48'
import IconFlipToFrontFill1Wght100Grad0Opsz48 from '../components/FlipToFrontFill1Wght100Grad0Opsz48'
import IconFlipToFrontFill1Wght200Grad0Opsz48 from '../components/FlipToFrontFill1Wght200Grad0Opsz48'
import IconFlipToFrontFill1Wght300Grad0Opsz48 from '../components/FlipToFrontFill1Wght300Grad0Opsz48'
import IconFlipToFrontFill1Wght400Grad0Opsz48 from '../components/FlipToFrontFill1Wght400Grad0Opsz48'
import IconFlipToFrontFill1Wght500Grad0Opsz48 from '../components/FlipToFrontFill1Wght500Grad0Opsz48'
import IconFlipToFrontFill1Wght600Grad0Opsz48 from '../components/FlipToFrontFill1Wght600Grad0Opsz48'
import IconFlipToFrontFill1Wght700Grad0Opsz48 from '../components/FlipToFrontFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlipToFront = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlipToFrontFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlipToFrontFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlipToFrontFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlipToFrontFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlipToFrontFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlipToFrontFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlipToFrontFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlipToFrontFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlipToFrontFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlipToFrontFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlipToFrontFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlipToFrontFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlipToFrontFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlipToFrontFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
