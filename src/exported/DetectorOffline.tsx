import IconDetectorOfflineFill0Wght100Grad0Opsz48 from '../components/DetectorOfflineFill0Wght100Grad0Opsz48'
import IconDetectorOfflineFill0Wght200Grad0Opsz48 from '../components/DetectorOfflineFill0Wght200Grad0Opsz48'
import IconDetectorOfflineFill0Wght300Grad0Opsz48 from '../components/DetectorOfflineFill0Wght300Grad0Opsz48'
import IconDetectorOfflineFill0Wght400Grad0Opsz48 from '../components/DetectorOfflineFill0Wght400Grad0Opsz48'
import IconDetectorOfflineFill0Wght500Grad0Opsz48 from '../components/DetectorOfflineFill0Wght500Grad0Opsz48'
import IconDetectorOfflineFill0Wght600Grad0Opsz48 from '../components/DetectorOfflineFill0Wght600Grad0Opsz48'
import IconDetectorOfflineFill0Wght700Grad0Opsz48 from '../components/DetectorOfflineFill0Wght700Grad0Opsz48'
import IconDetectorOfflineFill1Wght100Grad0Opsz48 from '../components/DetectorOfflineFill1Wght100Grad0Opsz48'
import IconDetectorOfflineFill1Wght200Grad0Opsz48 from '../components/DetectorOfflineFill1Wght200Grad0Opsz48'
import IconDetectorOfflineFill1Wght300Grad0Opsz48 from '../components/DetectorOfflineFill1Wght300Grad0Opsz48'
import IconDetectorOfflineFill1Wght400Grad0Opsz48 from '../components/DetectorOfflineFill1Wght400Grad0Opsz48'
import IconDetectorOfflineFill1Wght500Grad0Opsz48 from '../components/DetectorOfflineFill1Wght500Grad0Opsz48'
import IconDetectorOfflineFill1Wght600Grad0Opsz48 from '../components/DetectorOfflineFill1Wght600Grad0Opsz48'
import IconDetectorOfflineFill1Wght700Grad0Opsz48 from '../components/DetectorOfflineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetectorOffline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetectorOfflineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetectorOfflineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetectorOfflineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetectorOfflineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetectorOfflineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetectorOfflineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetectorOfflineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetectorOfflineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetectorOfflineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetectorOfflineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetectorOfflineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetectorOfflineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetectorOfflineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetectorOfflineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
