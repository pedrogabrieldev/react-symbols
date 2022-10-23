import IconCallMissedFill0Wght100Grad0Opsz48 from '../components/CallMissedFill0Wght100Grad0Opsz48'
import IconCallMissedFill0Wght200Grad0Opsz48 from '../components/CallMissedFill0Wght200Grad0Opsz48'
import IconCallMissedFill0Wght300Grad0Opsz48 from '../components/CallMissedFill0Wght300Grad0Opsz48'
import IconCallMissedFill0Wght400Grad0Opsz48 from '../components/CallMissedFill0Wght400Grad0Opsz48'
import IconCallMissedFill0Wght500Grad0Opsz48 from '../components/CallMissedFill0Wght500Grad0Opsz48'
import IconCallMissedFill0Wght600Grad0Opsz48 from '../components/CallMissedFill0Wght600Grad0Opsz48'
import IconCallMissedFill0Wght700Grad0Opsz48 from '../components/CallMissedFill0Wght700Grad0Opsz48'
import IconCallMissedFill1Wght100Grad0Opsz48 from '../components/CallMissedFill1Wght100Grad0Opsz48'
import IconCallMissedFill1Wght200Grad0Opsz48 from '../components/CallMissedFill1Wght200Grad0Opsz48'
import IconCallMissedFill1Wght300Grad0Opsz48 from '../components/CallMissedFill1Wght300Grad0Opsz48'
import IconCallMissedFill1Wght400Grad0Opsz48 from '../components/CallMissedFill1Wght400Grad0Opsz48'
import IconCallMissedFill1Wght500Grad0Opsz48 from '../components/CallMissedFill1Wght500Grad0Opsz48'
import IconCallMissedFill1Wght600Grad0Opsz48 from '../components/CallMissedFill1Wght600Grad0Opsz48'
import IconCallMissedFill1Wght700Grad0Opsz48 from '../components/CallMissedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCallMissed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallMissedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallMissedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallMissedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallMissedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallMissedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallMissedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallMissedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallMissedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallMissedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallMissedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallMissedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallMissedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallMissedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallMissedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
