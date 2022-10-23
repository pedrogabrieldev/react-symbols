import IconCallMadeFill0Wght100Grad0Opsz48 from '../components/CallMadeFill0Wght100Grad0Opsz48'
import IconCallMadeFill0Wght200Grad0Opsz48 from '../components/CallMadeFill0Wght200Grad0Opsz48'
import IconCallMadeFill0Wght300Grad0Opsz48 from '../components/CallMadeFill0Wght300Grad0Opsz48'
import IconCallMadeFill0Wght400Grad0Opsz48 from '../components/CallMadeFill0Wght400Grad0Opsz48'
import IconCallMadeFill0Wght500Grad0Opsz48 from '../components/CallMadeFill0Wght500Grad0Opsz48'
import IconCallMadeFill0Wght600Grad0Opsz48 from '../components/CallMadeFill0Wght600Grad0Opsz48'
import IconCallMadeFill0Wght700Grad0Opsz48 from '../components/CallMadeFill0Wght700Grad0Opsz48'
import IconCallMadeFill1Wght100Grad0Opsz48 from '../components/CallMadeFill1Wght100Grad0Opsz48'
import IconCallMadeFill1Wght200Grad0Opsz48 from '../components/CallMadeFill1Wght200Grad0Opsz48'
import IconCallMadeFill1Wght300Grad0Opsz48 from '../components/CallMadeFill1Wght300Grad0Opsz48'
import IconCallMadeFill1Wght400Grad0Opsz48 from '../components/CallMadeFill1Wght400Grad0Opsz48'
import IconCallMadeFill1Wght500Grad0Opsz48 from '../components/CallMadeFill1Wght500Grad0Opsz48'
import IconCallMadeFill1Wght600Grad0Opsz48 from '../components/CallMadeFill1Wght600Grad0Opsz48'
import IconCallMadeFill1Wght700Grad0Opsz48 from '../components/CallMadeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCallMade = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallMadeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallMadeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallMadeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallMadeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallMadeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallMadeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallMadeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallMadeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallMadeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallMadeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallMadeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallMadeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallMadeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallMadeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
