import IconSpatialTrackingFill0Wght100Grad0Opsz48 from '../components/SpatialTrackingFill0Wght100Grad0Opsz48'
import IconSpatialTrackingFill0Wght200Grad0Opsz48 from '../components/SpatialTrackingFill0Wght200Grad0Opsz48'
import IconSpatialTrackingFill0Wght300Grad0Opsz48 from '../components/SpatialTrackingFill0Wght300Grad0Opsz48'
import IconSpatialTrackingFill0Wght400Grad0Opsz48 from '../components/SpatialTrackingFill0Wght400Grad0Opsz48'
import IconSpatialTrackingFill0Wght500Grad0Opsz48 from '../components/SpatialTrackingFill0Wght500Grad0Opsz48'
import IconSpatialTrackingFill0Wght600Grad0Opsz48 from '../components/SpatialTrackingFill0Wght600Grad0Opsz48'
import IconSpatialTrackingFill0Wght700Grad0Opsz48 from '../components/SpatialTrackingFill0Wght700Grad0Opsz48'
import IconSpatialTrackingFill1Wght100Grad0Opsz48 from '../components/SpatialTrackingFill1Wght100Grad0Opsz48'
import IconSpatialTrackingFill1Wght200Grad0Opsz48 from '../components/SpatialTrackingFill1Wght200Grad0Opsz48'
import IconSpatialTrackingFill1Wght300Grad0Opsz48 from '../components/SpatialTrackingFill1Wght300Grad0Opsz48'
import IconSpatialTrackingFill1Wght400Grad0Opsz48 from '../components/SpatialTrackingFill1Wght400Grad0Opsz48'
import IconSpatialTrackingFill1Wght500Grad0Opsz48 from '../components/SpatialTrackingFill1Wght500Grad0Opsz48'
import IconSpatialTrackingFill1Wght600Grad0Opsz48 from '../components/SpatialTrackingFill1Wght600Grad0Opsz48'
import IconSpatialTrackingFill1Wght700Grad0Opsz48 from '../components/SpatialTrackingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpatialTracking = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpatialTrackingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpatialTrackingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpatialTrackingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpatialTrackingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpatialTrackingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpatialTrackingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpatialTrackingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpatialTrackingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpatialTrackingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpatialTrackingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpatialTrackingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpatialTrackingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpatialTrackingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpatialTrackingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
