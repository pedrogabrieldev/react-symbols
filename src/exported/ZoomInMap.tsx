import IconZoomInMapFill0Wght100Grad0Opsz48 from '../components/ZoomInMapFill0Wght100Grad0Opsz48'
import IconZoomInMapFill0Wght200Grad0Opsz48 from '../components/ZoomInMapFill0Wght200Grad0Opsz48'
import IconZoomInMapFill0Wght300Grad0Opsz48 from '../components/ZoomInMapFill0Wght300Grad0Opsz48'
import IconZoomInMapFill0Wght400Grad0Opsz48 from '../components/ZoomInMapFill0Wght400Grad0Opsz48'
import IconZoomInMapFill0Wght500Grad0Opsz48 from '../components/ZoomInMapFill0Wght500Grad0Opsz48'
import IconZoomInMapFill0Wght600Grad0Opsz48 from '../components/ZoomInMapFill0Wght600Grad0Opsz48'
import IconZoomInMapFill0Wght700Grad0Opsz48 from '../components/ZoomInMapFill0Wght700Grad0Opsz48'
import IconZoomInMapFill1Wght100Grad0Opsz48 from '../components/ZoomInMapFill1Wght100Grad0Opsz48'
import IconZoomInMapFill1Wght200Grad0Opsz48 from '../components/ZoomInMapFill1Wght200Grad0Opsz48'
import IconZoomInMapFill1Wght300Grad0Opsz48 from '../components/ZoomInMapFill1Wght300Grad0Opsz48'
import IconZoomInMapFill1Wght400Grad0Opsz48 from '../components/ZoomInMapFill1Wght400Grad0Opsz48'
import IconZoomInMapFill1Wght500Grad0Opsz48 from '../components/ZoomInMapFill1Wght500Grad0Opsz48'
import IconZoomInMapFill1Wght600Grad0Opsz48 from '../components/ZoomInMapFill1Wght600Grad0Opsz48'
import IconZoomInMapFill1Wght700Grad0Opsz48 from '../components/ZoomInMapFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconZoomInMap = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconZoomInMapFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconZoomInMapFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconZoomInMapFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconZoomInMapFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconZoomInMapFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconZoomInMapFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconZoomInMapFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconZoomInMapFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconZoomInMapFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconZoomInMapFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconZoomInMapFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconZoomInMapFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconZoomInMapFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconZoomInMapFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
