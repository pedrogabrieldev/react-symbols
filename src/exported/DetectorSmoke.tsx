import IconDetectorSmokeFill0Wght100Grad0Opsz48 from '../components/DetectorSmokeFill0Wght100Grad0Opsz48'
import IconDetectorSmokeFill0Wght200Grad0Opsz48 from '../components/DetectorSmokeFill0Wght200Grad0Opsz48'
import IconDetectorSmokeFill0Wght300Grad0Opsz48 from '../components/DetectorSmokeFill0Wght300Grad0Opsz48'
import IconDetectorSmokeFill0Wght400Grad0Opsz48 from '../components/DetectorSmokeFill0Wght400Grad0Opsz48'
import IconDetectorSmokeFill0Wght500Grad0Opsz48 from '../components/DetectorSmokeFill0Wght500Grad0Opsz48'
import IconDetectorSmokeFill0Wght600Grad0Opsz48 from '../components/DetectorSmokeFill0Wght600Grad0Opsz48'
import IconDetectorSmokeFill0Wght700Grad0Opsz48 from '../components/DetectorSmokeFill0Wght700Grad0Opsz48'
import IconDetectorSmokeFill1Wght100Grad0Opsz48 from '../components/DetectorSmokeFill1Wght100Grad0Opsz48'
import IconDetectorSmokeFill1Wght200Grad0Opsz48 from '../components/DetectorSmokeFill1Wght200Grad0Opsz48'
import IconDetectorSmokeFill1Wght300Grad0Opsz48 from '../components/DetectorSmokeFill1Wght300Grad0Opsz48'
import IconDetectorSmokeFill1Wght400Grad0Opsz48 from '../components/DetectorSmokeFill1Wght400Grad0Opsz48'
import IconDetectorSmokeFill1Wght500Grad0Opsz48 from '../components/DetectorSmokeFill1Wght500Grad0Opsz48'
import IconDetectorSmokeFill1Wght600Grad0Opsz48 from '../components/DetectorSmokeFill1Wght600Grad0Opsz48'
import IconDetectorSmokeFill1Wght700Grad0Opsz48 from '../components/DetectorSmokeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetectorSmoke = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetectorSmokeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetectorSmokeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetectorSmokeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetectorSmokeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetectorSmokeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetectorSmokeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetectorSmokeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetectorSmokeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetectorSmokeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetectorSmokeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetectorSmokeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetectorSmokeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetectorSmokeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetectorSmokeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
