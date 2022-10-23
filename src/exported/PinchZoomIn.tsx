import IconPinchZoomInFill0Wght100Grad0Opsz48 from '../components/PinchZoomInFill0Wght100Grad0Opsz48'
import IconPinchZoomInFill0Wght200Grad0Opsz48 from '../components/PinchZoomInFill0Wght200Grad0Opsz48'
import IconPinchZoomInFill0Wght300Grad0Opsz48 from '../components/PinchZoomInFill0Wght300Grad0Opsz48'
import IconPinchZoomInFill0Wght400Grad0Opsz48 from '../components/PinchZoomInFill0Wght400Grad0Opsz48'
import IconPinchZoomInFill0Wght500Grad0Opsz48 from '../components/PinchZoomInFill0Wght500Grad0Opsz48'
import IconPinchZoomInFill0Wght600Grad0Opsz48 from '../components/PinchZoomInFill0Wght600Grad0Opsz48'
import IconPinchZoomInFill0Wght700Grad0Opsz48 from '../components/PinchZoomInFill0Wght700Grad0Opsz48'
import IconPinchZoomInFill1Wght100Grad0Opsz48 from '../components/PinchZoomInFill1Wght100Grad0Opsz48'
import IconPinchZoomInFill1Wght200Grad0Opsz48 from '../components/PinchZoomInFill1Wght200Grad0Opsz48'
import IconPinchZoomInFill1Wght300Grad0Opsz48 from '../components/PinchZoomInFill1Wght300Grad0Opsz48'
import IconPinchZoomInFill1Wght400Grad0Opsz48 from '../components/PinchZoomInFill1Wght400Grad0Opsz48'
import IconPinchZoomInFill1Wght500Grad0Opsz48 from '../components/PinchZoomInFill1Wght500Grad0Opsz48'
import IconPinchZoomInFill1Wght600Grad0Opsz48 from '../components/PinchZoomInFill1Wght600Grad0Opsz48'
import IconPinchZoomInFill1Wght700Grad0Opsz48 from '../components/PinchZoomInFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPinchZoomIn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPinchZoomInFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPinchZoomInFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPinchZoomInFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPinchZoomInFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPinchZoomInFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPinchZoomInFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPinchZoomInFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPinchZoomInFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPinchZoomInFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPinchZoomInFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPinchZoomInFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPinchZoomInFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPinchZoomInFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPinchZoomInFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
