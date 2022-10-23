import IconZoomInFill0Wght100Grad0Opsz48 from '../components/ZoomInFill0Wght100Grad0Opsz48'
import IconZoomInFill0Wght200Grad0Opsz48 from '../components/ZoomInFill0Wght200Grad0Opsz48'
import IconZoomInFill0Wght300Grad0Opsz48 from '../components/ZoomInFill0Wght300Grad0Opsz48'
import IconZoomInFill0Wght400Grad0Opsz48 from '../components/ZoomInFill0Wght400Grad0Opsz48'
import IconZoomInFill0Wght500Grad0Opsz48 from '../components/ZoomInFill0Wght500Grad0Opsz48'
import IconZoomInFill0Wght600Grad0Opsz48 from '../components/ZoomInFill0Wght600Grad0Opsz48'
import IconZoomInFill0Wght700Grad0Opsz48 from '../components/ZoomInFill0Wght700Grad0Opsz48'
import IconZoomInFill1Wght100Grad0Opsz48 from '../components/ZoomInFill1Wght100Grad0Opsz48'
import IconZoomInFill1Wght200Grad0Opsz48 from '../components/ZoomInFill1Wght200Grad0Opsz48'
import IconZoomInFill1Wght300Grad0Opsz48 from '../components/ZoomInFill1Wght300Grad0Opsz48'
import IconZoomInFill1Wght400Grad0Opsz48 from '../components/ZoomInFill1Wght400Grad0Opsz48'
import IconZoomInFill1Wght500Grad0Opsz48 from '../components/ZoomInFill1Wght500Grad0Opsz48'
import IconZoomInFill1Wght600Grad0Opsz48 from '../components/ZoomInFill1Wght600Grad0Opsz48'
import IconZoomInFill1Wght700Grad0Opsz48 from '../components/ZoomInFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconZoomIn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconZoomInFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconZoomInFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconZoomInFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconZoomInFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconZoomInFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconZoomInFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconZoomInFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconZoomInFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconZoomInFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconZoomInFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconZoomInFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconZoomInFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconZoomInFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconZoomInFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
