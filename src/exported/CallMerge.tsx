import IconCallMergeFill0Wght100Grad0Opsz48 from '../components/CallMergeFill0Wght100Grad0Opsz48'
import IconCallMergeFill0Wght200Grad0Opsz48 from '../components/CallMergeFill0Wght200Grad0Opsz48'
import IconCallMergeFill0Wght300Grad0Opsz48 from '../components/CallMergeFill0Wght300Grad0Opsz48'
import IconCallMergeFill0Wght400Grad0Opsz48 from '../components/CallMergeFill0Wght400Grad0Opsz48'
import IconCallMergeFill0Wght500Grad0Opsz48 from '../components/CallMergeFill0Wght500Grad0Opsz48'
import IconCallMergeFill0Wght600Grad0Opsz48 from '../components/CallMergeFill0Wght600Grad0Opsz48'
import IconCallMergeFill0Wght700Grad0Opsz48 from '../components/CallMergeFill0Wght700Grad0Opsz48'
import IconCallMergeFill1Wght100Grad0Opsz48 from '../components/CallMergeFill1Wght100Grad0Opsz48'
import IconCallMergeFill1Wght200Grad0Opsz48 from '../components/CallMergeFill1Wght200Grad0Opsz48'
import IconCallMergeFill1Wght300Grad0Opsz48 from '../components/CallMergeFill1Wght300Grad0Opsz48'
import IconCallMergeFill1Wght400Grad0Opsz48 from '../components/CallMergeFill1Wght400Grad0Opsz48'
import IconCallMergeFill1Wght500Grad0Opsz48 from '../components/CallMergeFill1Wght500Grad0Opsz48'
import IconCallMergeFill1Wght600Grad0Opsz48 from '../components/CallMergeFill1Wght600Grad0Opsz48'
import IconCallMergeFill1Wght700Grad0Opsz48 from '../components/CallMergeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCallMerge = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallMergeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallMergeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallMergeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallMergeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallMergeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallMergeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallMergeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallMergeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallMergeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallMergeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallMergeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallMergeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallMergeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallMergeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
