import IconPinFill0Wght100Grad0Opsz48 from '../components/PinFill0Wght100Grad0Opsz48'
import IconPinFill0Wght200Grad0Opsz48 from '../components/PinFill0Wght200Grad0Opsz48'
import IconPinFill0Wght300Grad0Opsz48 from '../components/PinFill0Wght300Grad0Opsz48'
import IconPinFill0Wght400Grad0Opsz48 from '../components/PinFill0Wght400Grad0Opsz48'
import IconPinFill0Wght500Grad0Opsz48 from '../components/PinFill0Wght500Grad0Opsz48'
import IconPinFill0Wght600Grad0Opsz48 from '../components/PinFill0Wght600Grad0Opsz48'
import IconPinFill0Wght700Grad0Opsz48 from '../components/PinFill0Wght700Grad0Opsz48'
import IconPinFill1Wght100Grad0Opsz48 from '../components/PinFill1Wght100Grad0Opsz48'
import IconPinFill1Wght200Grad0Opsz48 from '../components/PinFill1Wght200Grad0Opsz48'
import IconPinFill1Wght300Grad0Opsz48 from '../components/PinFill1Wght300Grad0Opsz48'
import IconPinFill1Wght400Grad0Opsz48 from '../components/PinFill1Wght400Grad0Opsz48'
import IconPinFill1Wght500Grad0Opsz48 from '../components/PinFill1Wght500Grad0Opsz48'
import IconPinFill1Wght600Grad0Opsz48 from '../components/PinFill1Wght600Grad0Opsz48'
import IconPinFill1Wght700Grad0Opsz48 from '../components/PinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
