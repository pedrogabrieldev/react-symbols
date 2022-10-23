import IconPinchZoomOutFill0Wght100Grad0Opsz48 from '../components/PinchZoomOutFill0Wght100Grad0Opsz48'
import IconPinchZoomOutFill0Wght200Grad0Opsz48 from '../components/PinchZoomOutFill0Wght200Grad0Opsz48'
import IconPinchZoomOutFill0Wght300Grad0Opsz48 from '../components/PinchZoomOutFill0Wght300Grad0Opsz48'
import IconPinchZoomOutFill0Wght400Grad0Opsz48 from '../components/PinchZoomOutFill0Wght400Grad0Opsz48'
import IconPinchZoomOutFill0Wght500Grad0Opsz48 from '../components/PinchZoomOutFill0Wght500Grad0Opsz48'
import IconPinchZoomOutFill0Wght600Grad0Opsz48 from '../components/PinchZoomOutFill0Wght600Grad0Opsz48'
import IconPinchZoomOutFill0Wght700Grad0Opsz48 from '../components/PinchZoomOutFill0Wght700Grad0Opsz48'
import IconPinchZoomOutFill1Wght100Grad0Opsz48 from '../components/PinchZoomOutFill1Wght100Grad0Opsz48'
import IconPinchZoomOutFill1Wght200Grad0Opsz48 from '../components/PinchZoomOutFill1Wght200Grad0Opsz48'
import IconPinchZoomOutFill1Wght300Grad0Opsz48 from '../components/PinchZoomOutFill1Wght300Grad0Opsz48'
import IconPinchZoomOutFill1Wght400Grad0Opsz48 from '../components/PinchZoomOutFill1Wght400Grad0Opsz48'
import IconPinchZoomOutFill1Wght500Grad0Opsz48 from '../components/PinchZoomOutFill1Wght500Grad0Opsz48'
import IconPinchZoomOutFill1Wght600Grad0Opsz48 from '../components/PinchZoomOutFill1Wght600Grad0Opsz48'
import IconPinchZoomOutFill1Wght700Grad0Opsz48 from '../components/PinchZoomOutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPinchZoomOut = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPinchZoomOutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPinchZoomOutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPinchZoomOutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPinchZoomOutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPinchZoomOutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPinchZoomOutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPinchZoomOutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPinchZoomOutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPinchZoomOutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPinchZoomOutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPinchZoomOutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPinchZoomOutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPinchZoomOutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPinchZoomOutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
