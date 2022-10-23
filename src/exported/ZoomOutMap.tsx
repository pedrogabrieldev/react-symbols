import IconZoomOutMapFill0Wght100Grad0Opsz48 from '../components/ZoomOutMapFill0Wght100Grad0Opsz48'
import IconZoomOutMapFill0Wght200Grad0Opsz48 from '../components/ZoomOutMapFill0Wght200Grad0Opsz48'
import IconZoomOutMapFill0Wght300Grad0Opsz48 from '../components/ZoomOutMapFill0Wght300Grad0Opsz48'
import IconZoomOutMapFill0Wght400Grad0Opsz48 from '../components/ZoomOutMapFill0Wght400Grad0Opsz48'
import IconZoomOutMapFill0Wght500Grad0Opsz48 from '../components/ZoomOutMapFill0Wght500Grad0Opsz48'
import IconZoomOutMapFill0Wght600Grad0Opsz48 from '../components/ZoomOutMapFill0Wght600Grad0Opsz48'
import IconZoomOutMapFill0Wght700Grad0Opsz48 from '../components/ZoomOutMapFill0Wght700Grad0Opsz48'
import IconZoomOutMapFill1Wght100Grad0Opsz48 from '../components/ZoomOutMapFill1Wght100Grad0Opsz48'
import IconZoomOutMapFill1Wght200Grad0Opsz48 from '../components/ZoomOutMapFill1Wght200Grad0Opsz48'
import IconZoomOutMapFill1Wght300Grad0Opsz48 from '../components/ZoomOutMapFill1Wght300Grad0Opsz48'
import IconZoomOutMapFill1Wght400Grad0Opsz48 from '../components/ZoomOutMapFill1Wght400Grad0Opsz48'
import IconZoomOutMapFill1Wght500Grad0Opsz48 from '../components/ZoomOutMapFill1Wght500Grad0Opsz48'
import IconZoomOutMapFill1Wght600Grad0Opsz48 from '../components/ZoomOutMapFill1Wght600Grad0Opsz48'
import IconZoomOutMapFill1Wght700Grad0Opsz48 from '../components/ZoomOutMapFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconZoomOutMap = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconZoomOutMapFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconZoomOutMapFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconZoomOutMapFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconZoomOutMapFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconZoomOutMapFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconZoomOutMapFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconZoomOutMapFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconZoomOutMapFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconZoomOutMapFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconZoomOutMapFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconZoomOutMapFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconZoomOutMapFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconZoomOutMapFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconZoomOutMapFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
