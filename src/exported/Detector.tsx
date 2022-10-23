import IconDetectorFill0Wght100Grad0Opsz48 from '../components/DetectorFill0Wght100Grad0Opsz48'
import IconDetectorFill0Wght200Grad0Opsz48 from '../components/DetectorFill0Wght200Grad0Opsz48'
import IconDetectorFill0Wght300Grad0Opsz48 from '../components/DetectorFill0Wght300Grad0Opsz48'
import IconDetectorFill0Wght400Grad0Opsz48 from '../components/DetectorFill0Wght400Grad0Opsz48'
import IconDetectorFill0Wght500Grad0Opsz48 from '../components/DetectorFill0Wght500Grad0Opsz48'
import IconDetectorFill0Wght600Grad0Opsz48 from '../components/DetectorFill0Wght600Grad0Opsz48'
import IconDetectorFill0Wght700Grad0Opsz48 from '../components/DetectorFill0Wght700Grad0Opsz48'
import IconDetectorFill1Wght100Grad0Opsz48 from '../components/DetectorFill1Wght100Grad0Opsz48'
import IconDetectorFill1Wght200Grad0Opsz48 from '../components/DetectorFill1Wght200Grad0Opsz48'
import IconDetectorFill1Wght300Grad0Opsz48 from '../components/DetectorFill1Wght300Grad0Opsz48'
import IconDetectorFill1Wght400Grad0Opsz48 from '../components/DetectorFill1Wght400Grad0Opsz48'
import IconDetectorFill1Wght500Grad0Opsz48 from '../components/DetectorFill1Wght500Grad0Opsz48'
import IconDetectorFill1Wght600Grad0Opsz48 from '../components/DetectorFill1Wght600Grad0Opsz48'
import IconDetectorFill1Wght700Grad0Opsz48 from '../components/DetectorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetector = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetectorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetectorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetectorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetectorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetectorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetectorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetectorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetectorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetectorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetectorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetectorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetectorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetectorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetectorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
