import IconPinEndFill0Wght100Grad0Opsz48 from '../components/PinEndFill0Wght100Grad0Opsz48'
import IconPinEndFill0Wght200Grad0Opsz48 from '../components/PinEndFill0Wght200Grad0Opsz48'
import IconPinEndFill0Wght300Grad0Opsz48 from '../components/PinEndFill0Wght300Grad0Opsz48'
import IconPinEndFill0Wght400Grad0Opsz48 from '../components/PinEndFill0Wght400Grad0Opsz48'
import IconPinEndFill0Wght500Grad0Opsz48 from '../components/PinEndFill0Wght500Grad0Opsz48'
import IconPinEndFill0Wght600Grad0Opsz48 from '../components/PinEndFill0Wght600Grad0Opsz48'
import IconPinEndFill0Wght700Grad0Opsz48 from '../components/PinEndFill0Wght700Grad0Opsz48'
import IconPinEndFill1Wght100Grad0Opsz48 from '../components/PinEndFill1Wght100Grad0Opsz48'
import IconPinEndFill1Wght200Grad0Opsz48 from '../components/PinEndFill1Wght200Grad0Opsz48'
import IconPinEndFill1Wght300Grad0Opsz48 from '../components/PinEndFill1Wght300Grad0Opsz48'
import IconPinEndFill1Wght400Grad0Opsz48 from '../components/PinEndFill1Wght400Grad0Opsz48'
import IconPinEndFill1Wght500Grad0Opsz48 from '../components/PinEndFill1Wght500Grad0Opsz48'
import IconPinEndFill1Wght600Grad0Opsz48 from '../components/PinEndFill1Wght600Grad0Opsz48'
import IconPinEndFill1Wght700Grad0Opsz48 from '../components/PinEndFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPinEnd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPinEndFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPinEndFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPinEndFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPinEndFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPinEndFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPinEndFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPinEndFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPinEndFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPinEndFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPinEndFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPinEndFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPinEndFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPinEndFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPinEndFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
