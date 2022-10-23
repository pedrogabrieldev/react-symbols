import IconCallFill0Wght100Grad0Opsz48 from '../components/CallFill0Wght100Grad0Opsz48'
import IconCallFill0Wght200Grad0Opsz48 from '../components/CallFill0Wght200Grad0Opsz48'
import IconCallFill0Wght300Grad0Opsz48 from '../components/CallFill0Wght300Grad0Opsz48'
import IconCallFill0Wght400Grad0Opsz48 from '../components/CallFill0Wght400Grad0Opsz48'
import IconCallFill0Wght500Grad0Opsz48 from '../components/CallFill0Wght500Grad0Opsz48'
import IconCallFill0Wght600Grad0Opsz48 from '../components/CallFill0Wght600Grad0Opsz48'
import IconCallFill0Wght700Grad0Opsz48 from '../components/CallFill0Wght700Grad0Opsz48'
import IconCallFill1Wght100Grad0Opsz48 from '../components/CallFill1Wght100Grad0Opsz48'
import IconCallFill1Wght200Grad0Opsz48 from '../components/CallFill1Wght200Grad0Opsz48'
import IconCallFill1Wght300Grad0Opsz48 from '../components/CallFill1Wght300Grad0Opsz48'
import IconCallFill1Wght400Grad0Opsz48 from '../components/CallFill1Wght400Grad0Opsz48'
import IconCallFill1Wght500Grad0Opsz48 from '../components/CallFill1Wght500Grad0Opsz48'
import IconCallFill1Wght600Grad0Opsz48 from '../components/CallFill1Wght600Grad0Opsz48'
import IconCallFill1Wght700Grad0Opsz48 from '../components/CallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
