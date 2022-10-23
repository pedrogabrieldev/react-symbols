import IconDetectorStatusFill0Wght100Grad0Opsz48 from '../components/DetectorStatusFill0Wght100Grad0Opsz48'
import IconDetectorStatusFill0Wght200Grad0Opsz48 from '../components/DetectorStatusFill0Wght200Grad0Opsz48'
import IconDetectorStatusFill0Wght300Grad0Opsz48 from '../components/DetectorStatusFill0Wght300Grad0Opsz48'
import IconDetectorStatusFill0Wght400Grad0Opsz48 from '../components/DetectorStatusFill0Wght400Grad0Opsz48'
import IconDetectorStatusFill0Wght500Grad0Opsz48 from '../components/DetectorStatusFill0Wght500Grad0Opsz48'
import IconDetectorStatusFill0Wght600Grad0Opsz48 from '../components/DetectorStatusFill0Wght600Grad0Opsz48'
import IconDetectorStatusFill0Wght700Grad0Opsz48 from '../components/DetectorStatusFill0Wght700Grad0Opsz48'
import IconDetectorStatusFill1Wght100Grad0Opsz48 from '../components/DetectorStatusFill1Wght100Grad0Opsz48'
import IconDetectorStatusFill1Wght200Grad0Opsz48 from '../components/DetectorStatusFill1Wght200Grad0Opsz48'
import IconDetectorStatusFill1Wght300Grad0Opsz48 from '../components/DetectorStatusFill1Wght300Grad0Opsz48'
import IconDetectorStatusFill1Wght400Grad0Opsz48 from '../components/DetectorStatusFill1Wght400Grad0Opsz48'
import IconDetectorStatusFill1Wght500Grad0Opsz48 from '../components/DetectorStatusFill1Wght500Grad0Opsz48'
import IconDetectorStatusFill1Wght600Grad0Opsz48 from '../components/DetectorStatusFill1Wght600Grad0Opsz48'
import IconDetectorStatusFill1Wght700Grad0Opsz48 from '../components/DetectorStatusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetectorStatus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetectorStatusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetectorStatusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetectorStatusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetectorStatusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetectorStatusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetectorStatusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetectorStatusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetectorStatusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetectorStatusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetectorStatusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetectorStatusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetectorStatusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetectorStatusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetectorStatusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
