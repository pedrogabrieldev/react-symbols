import IconPinchFill0Wght100Grad0Opsz48 from '../components/PinchFill0Wght100Grad0Opsz48'
import IconPinchFill0Wght200Grad0Opsz48 from '../components/PinchFill0Wght200Grad0Opsz48'
import IconPinchFill0Wght300Grad0Opsz48 from '../components/PinchFill0Wght300Grad0Opsz48'
import IconPinchFill0Wght400Grad0Opsz48 from '../components/PinchFill0Wght400Grad0Opsz48'
import IconPinchFill0Wght500Grad0Opsz48 from '../components/PinchFill0Wght500Grad0Opsz48'
import IconPinchFill0Wght600Grad0Opsz48 from '../components/PinchFill0Wght600Grad0Opsz48'
import IconPinchFill0Wght700Grad0Opsz48 from '../components/PinchFill0Wght700Grad0Opsz48'
import IconPinchFill1Wght100Grad0Opsz48 from '../components/PinchFill1Wght100Grad0Opsz48'
import IconPinchFill1Wght200Grad0Opsz48 from '../components/PinchFill1Wght200Grad0Opsz48'
import IconPinchFill1Wght300Grad0Opsz48 from '../components/PinchFill1Wght300Grad0Opsz48'
import IconPinchFill1Wght400Grad0Opsz48 from '../components/PinchFill1Wght400Grad0Opsz48'
import IconPinchFill1Wght500Grad0Opsz48 from '../components/PinchFill1Wght500Grad0Opsz48'
import IconPinchFill1Wght600Grad0Opsz48 from '../components/PinchFill1Wght600Grad0Opsz48'
import IconPinchFill1Wght700Grad0Opsz48 from '../components/PinchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPinch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPinchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPinchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPinchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPinchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPinchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPinchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPinchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPinchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPinchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPinchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPinchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPinchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPinchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPinchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
