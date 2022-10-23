import IconDetectionAndZoneFill0Wght100Grad0Opsz48 from '../components/DetectionAndZoneFill0Wght100Grad0Opsz48'
import IconDetectionAndZoneFill0Wght200Grad0Opsz48 from '../components/DetectionAndZoneFill0Wght200Grad0Opsz48'
import IconDetectionAndZoneFill0Wght300Grad0Opsz48 from '../components/DetectionAndZoneFill0Wght300Grad0Opsz48'
import IconDetectionAndZoneFill0Wght400Grad0Opsz48 from '../components/DetectionAndZoneFill0Wght400Grad0Opsz48'
import IconDetectionAndZoneFill0Wght500Grad0Opsz48 from '../components/DetectionAndZoneFill0Wght500Grad0Opsz48'
import IconDetectionAndZoneFill0Wght600Grad0Opsz48 from '../components/DetectionAndZoneFill0Wght600Grad0Opsz48'
import IconDetectionAndZoneFill0Wght700Grad0Opsz48 from '../components/DetectionAndZoneFill0Wght700Grad0Opsz48'
import IconDetectionAndZoneFill1Wght100Grad0Opsz48 from '../components/DetectionAndZoneFill1Wght100Grad0Opsz48'
import IconDetectionAndZoneFill1Wght200Grad0Opsz48 from '../components/DetectionAndZoneFill1Wght200Grad0Opsz48'
import IconDetectionAndZoneFill1Wght300Grad0Opsz48 from '../components/DetectionAndZoneFill1Wght300Grad0Opsz48'
import IconDetectionAndZoneFill1Wght400Grad0Opsz48 from '../components/DetectionAndZoneFill1Wght400Grad0Opsz48'
import IconDetectionAndZoneFill1Wght500Grad0Opsz48 from '../components/DetectionAndZoneFill1Wght500Grad0Opsz48'
import IconDetectionAndZoneFill1Wght600Grad0Opsz48 from '../components/DetectionAndZoneFill1Wght600Grad0Opsz48'
import IconDetectionAndZoneFill1Wght700Grad0Opsz48 from '../components/DetectionAndZoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetectionAndZone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetectionAndZoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetectionAndZoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetectionAndZoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetectionAndZoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetectionAndZoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetectionAndZoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetectionAndZoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetectionAndZoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetectionAndZoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetectionAndZoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetectionAndZoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetectionAndZoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetectionAndZoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetectionAndZoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
