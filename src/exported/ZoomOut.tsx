import IconZoomOutFill0Wght100Grad0Opsz48 from '../components/ZoomOutFill0Wght100Grad0Opsz48'
import IconZoomOutFill0Wght200Grad0Opsz48 from '../components/ZoomOutFill0Wght200Grad0Opsz48'
import IconZoomOutFill0Wght300Grad0Opsz48 from '../components/ZoomOutFill0Wght300Grad0Opsz48'
import IconZoomOutFill0Wght400Grad0Opsz48 from '../components/ZoomOutFill0Wght400Grad0Opsz48'
import IconZoomOutFill0Wght500Grad0Opsz48 from '../components/ZoomOutFill0Wght500Grad0Opsz48'
import IconZoomOutFill0Wght600Grad0Opsz48 from '../components/ZoomOutFill0Wght600Grad0Opsz48'
import IconZoomOutFill0Wght700Grad0Opsz48 from '../components/ZoomOutFill0Wght700Grad0Opsz48'
import IconZoomOutFill1Wght100Grad0Opsz48 from '../components/ZoomOutFill1Wght100Grad0Opsz48'
import IconZoomOutFill1Wght200Grad0Opsz48 from '../components/ZoomOutFill1Wght200Grad0Opsz48'
import IconZoomOutFill1Wght300Grad0Opsz48 from '../components/ZoomOutFill1Wght300Grad0Opsz48'
import IconZoomOutFill1Wght400Grad0Opsz48 from '../components/ZoomOutFill1Wght400Grad0Opsz48'
import IconZoomOutFill1Wght500Grad0Opsz48 from '../components/ZoomOutFill1Wght500Grad0Opsz48'
import IconZoomOutFill1Wght600Grad0Opsz48 from '../components/ZoomOutFill1Wght600Grad0Opsz48'
import IconZoomOutFill1Wght700Grad0Opsz48 from '../components/ZoomOutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconZoomOut = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconZoomOutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconZoomOutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconZoomOutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconZoomOutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconZoomOutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconZoomOutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconZoomOutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconZoomOutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconZoomOutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconZoomOutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconZoomOutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconZoomOutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconZoomOutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconZoomOutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
