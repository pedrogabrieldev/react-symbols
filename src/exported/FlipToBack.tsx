import IconFlipToBackFill0Wght100Grad0Opsz48 from '../components/FlipToBackFill0Wght100Grad0Opsz48'
import IconFlipToBackFill0Wght200Grad0Opsz48 from '../components/FlipToBackFill0Wght200Grad0Opsz48'
import IconFlipToBackFill0Wght300Grad0Opsz48 from '../components/FlipToBackFill0Wght300Grad0Opsz48'
import IconFlipToBackFill0Wght400Grad0Opsz48 from '../components/FlipToBackFill0Wght400Grad0Opsz48'
import IconFlipToBackFill0Wght500Grad0Opsz48 from '../components/FlipToBackFill0Wght500Grad0Opsz48'
import IconFlipToBackFill0Wght600Grad0Opsz48 from '../components/FlipToBackFill0Wght600Grad0Opsz48'
import IconFlipToBackFill0Wght700Grad0Opsz48 from '../components/FlipToBackFill0Wght700Grad0Opsz48'
import IconFlipToBackFill1Wght100Grad0Opsz48 from '../components/FlipToBackFill1Wght100Grad0Opsz48'
import IconFlipToBackFill1Wght200Grad0Opsz48 from '../components/FlipToBackFill1Wght200Grad0Opsz48'
import IconFlipToBackFill1Wght300Grad0Opsz48 from '../components/FlipToBackFill1Wght300Grad0Opsz48'
import IconFlipToBackFill1Wght400Grad0Opsz48 from '../components/FlipToBackFill1Wght400Grad0Opsz48'
import IconFlipToBackFill1Wght500Grad0Opsz48 from '../components/FlipToBackFill1Wght500Grad0Opsz48'
import IconFlipToBackFill1Wght600Grad0Opsz48 from '../components/FlipToBackFill1Wght600Grad0Opsz48'
import IconFlipToBackFill1Wght700Grad0Opsz48 from '../components/FlipToBackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlipToBack = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlipToBackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlipToBackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlipToBackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlipToBackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlipToBackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlipToBackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlipToBackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlipToBackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlipToBackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlipToBackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlipToBackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlipToBackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlipToBackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlipToBackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
