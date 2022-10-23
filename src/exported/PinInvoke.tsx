import IconPinInvokeFill0Wght100Grad0Opsz48 from '../components/PinInvokeFill0Wght100Grad0Opsz48'
import IconPinInvokeFill0Wght200Grad0Opsz48 from '../components/PinInvokeFill0Wght200Grad0Opsz48'
import IconPinInvokeFill0Wght300Grad0Opsz48 from '../components/PinInvokeFill0Wght300Grad0Opsz48'
import IconPinInvokeFill0Wght400Grad0Opsz48 from '../components/PinInvokeFill0Wght400Grad0Opsz48'
import IconPinInvokeFill0Wght500Grad0Opsz48 from '../components/PinInvokeFill0Wght500Grad0Opsz48'
import IconPinInvokeFill0Wght600Grad0Opsz48 from '../components/PinInvokeFill0Wght600Grad0Opsz48'
import IconPinInvokeFill0Wght700Grad0Opsz48 from '../components/PinInvokeFill0Wght700Grad0Opsz48'
import IconPinInvokeFill1Wght100Grad0Opsz48 from '../components/PinInvokeFill1Wght100Grad0Opsz48'
import IconPinInvokeFill1Wght200Grad0Opsz48 from '../components/PinInvokeFill1Wght200Grad0Opsz48'
import IconPinInvokeFill1Wght300Grad0Opsz48 from '../components/PinInvokeFill1Wght300Grad0Opsz48'
import IconPinInvokeFill1Wght400Grad0Opsz48 from '../components/PinInvokeFill1Wght400Grad0Opsz48'
import IconPinInvokeFill1Wght500Grad0Opsz48 from '../components/PinInvokeFill1Wght500Grad0Opsz48'
import IconPinInvokeFill1Wght600Grad0Opsz48 from '../components/PinInvokeFill1Wght600Grad0Opsz48'
import IconPinInvokeFill1Wght700Grad0Opsz48 from '../components/PinInvokeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPinInvoke = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPinInvokeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPinInvokeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPinInvokeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPinInvokeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPinInvokeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPinInvokeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPinInvokeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPinInvokeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPinInvokeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPinInvokeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPinInvokeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPinInvokeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPinInvokeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPinInvokeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
