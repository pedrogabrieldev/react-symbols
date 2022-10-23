import IconBlindFill0Wght100Grad0Opsz48 from '../components/BlindFill0Wght100Grad0Opsz48'
import IconBlindFill0Wght200Grad0Opsz48 from '../components/BlindFill0Wght200Grad0Opsz48'
import IconBlindFill0Wght300Grad0Opsz48 from '../components/BlindFill0Wght300Grad0Opsz48'
import IconBlindFill0Wght400Grad0Opsz48 from '../components/BlindFill0Wght400Grad0Opsz48'
import IconBlindFill0Wght500Grad0Opsz48 from '../components/BlindFill0Wght500Grad0Opsz48'
import IconBlindFill0Wght600Grad0Opsz48 from '../components/BlindFill0Wght600Grad0Opsz48'
import IconBlindFill0Wght700Grad0Opsz48 from '../components/BlindFill0Wght700Grad0Opsz48'
import IconBlindFill1Wght100Grad0Opsz48 from '../components/BlindFill1Wght100Grad0Opsz48'
import IconBlindFill1Wght200Grad0Opsz48 from '../components/BlindFill1Wght200Grad0Opsz48'
import IconBlindFill1Wght300Grad0Opsz48 from '../components/BlindFill1Wght300Grad0Opsz48'
import IconBlindFill1Wght400Grad0Opsz48 from '../components/BlindFill1Wght400Grad0Opsz48'
import IconBlindFill1Wght500Grad0Opsz48 from '../components/BlindFill1Wght500Grad0Opsz48'
import IconBlindFill1Wght600Grad0Opsz48 from '../components/BlindFill1Wght600Grad0Opsz48'
import IconBlindFill1Wght700Grad0Opsz48 from '../components/BlindFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlind = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlindFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlindFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlindFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlindFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlindFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlindFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlindFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlindFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlindFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlindFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlindFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlindFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlindFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlindFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
