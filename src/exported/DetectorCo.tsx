import IconDetectorCoFill0Wght100Grad0Opsz48 from '../components/DetectorCoFill0Wght100Grad0Opsz48'
import IconDetectorCoFill0Wght200Grad0Opsz48 from '../components/DetectorCoFill0Wght200Grad0Opsz48'
import IconDetectorCoFill0Wght300Grad0Opsz48 from '../components/DetectorCoFill0Wght300Grad0Opsz48'
import IconDetectorCoFill0Wght400Grad0Opsz48 from '../components/DetectorCoFill0Wght400Grad0Opsz48'
import IconDetectorCoFill0Wght500Grad0Opsz48 from '../components/DetectorCoFill0Wght500Grad0Opsz48'
import IconDetectorCoFill0Wght600Grad0Opsz48 from '../components/DetectorCoFill0Wght600Grad0Opsz48'
import IconDetectorCoFill0Wght700Grad0Opsz48 from '../components/DetectorCoFill0Wght700Grad0Opsz48'
import IconDetectorCoFill1Wght100Grad0Opsz48 from '../components/DetectorCoFill1Wght100Grad0Opsz48'
import IconDetectorCoFill1Wght200Grad0Opsz48 from '../components/DetectorCoFill1Wght200Grad0Opsz48'
import IconDetectorCoFill1Wght300Grad0Opsz48 from '../components/DetectorCoFill1Wght300Grad0Opsz48'
import IconDetectorCoFill1Wght400Grad0Opsz48 from '../components/DetectorCoFill1Wght400Grad0Opsz48'
import IconDetectorCoFill1Wght500Grad0Opsz48 from '../components/DetectorCoFill1Wght500Grad0Opsz48'
import IconDetectorCoFill1Wght600Grad0Opsz48 from '../components/DetectorCoFill1Wght600Grad0Opsz48'
import IconDetectorCoFill1Wght700Grad0Opsz48 from '../components/DetectorCoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetectorCo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetectorCoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetectorCoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetectorCoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetectorCoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetectorCoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetectorCoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetectorCoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetectorCoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetectorCoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetectorCoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetectorCoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetectorCoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetectorCoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetectorCoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
