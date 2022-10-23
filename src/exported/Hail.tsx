import IconHailFill0Wght100Grad0Opsz48 from '../components/HailFill0Wght100Grad0Opsz48'
import IconHailFill0Wght200Grad0Opsz48 from '../components/HailFill0Wght200Grad0Opsz48'
import IconHailFill0Wght300Grad0Opsz48 from '../components/HailFill0Wght300Grad0Opsz48'
import IconHailFill0Wght400Grad0Opsz48 from '../components/HailFill0Wght400Grad0Opsz48'
import IconHailFill0Wght500Grad0Opsz48 from '../components/HailFill0Wght500Grad0Opsz48'
import IconHailFill0Wght600Grad0Opsz48 from '../components/HailFill0Wght600Grad0Opsz48'
import IconHailFill0Wght700Grad0Opsz48 from '../components/HailFill0Wght700Grad0Opsz48'
import IconHailFill1Wght100Grad0Opsz48 from '../components/HailFill1Wght100Grad0Opsz48'
import IconHailFill1Wght200Grad0Opsz48 from '../components/HailFill1Wght200Grad0Opsz48'
import IconHailFill1Wght300Grad0Opsz48 from '../components/HailFill1Wght300Grad0Opsz48'
import IconHailFill1Wght400Grad0Opsz48 from '../components/HailFill1Wght400Grad0Opsz48'
import IconHailFill1Wght500Grad0Opsz48 from '../components/HailFill1Wght500Grad0Opsz48'
import IconHailFill1Wght600Grad0Opsz48 from '../components/HailFill1Wght600Grad0Opsz48'
import IconHailFill1Wght700Grad0Opsz48 from '../components/HailFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHail = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHailFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHailFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHailFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHailFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHailFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHailFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHailFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHailFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHailFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHailFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHailFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHailFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHailFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHailFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
