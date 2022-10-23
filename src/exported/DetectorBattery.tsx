import IconDetectorBatteryFill0Wght100Grad0Opsz48 from '../components/DetectorBatteryFill0Wght100Grad0Opsz48'
import IconDetectorBatteryFill0Wght200Grad0Opsz48 from '../components/DetectorBatteryFill0Wght200Grad0Opsz48'
import IconDetectorBatteryFill0Wght300Grad0Opsz48 from '../components/DetectorBatteryFill0Wght300Grad0Opsz48'
import IconDetectorBatteryFill0Wght400Grad0Opsz48 from '../components/DetectorBatteryFill0Wght400Grad0Opsz48'
import IconDetectorBatteryFill0Wght500Grad0Opsz48 from '../components/DetectorBatteryFill0Wght500Grad0Opsz48'
import IconDetectorBatteryFill0Wght600Grad0Opsz48 from '../components/DetectorBatteryFill0Wght600Grad0Opsz48'
import IconDetectorBatteryFill0Wght700Grad0Opsz48 from '../components/DetectorBatteryFill0Wght700Grad0Opsz48'
import IconDetectorBatteryFill1Wght100Grad0Opsz48 from '../components/DetectorBatteryFill1Wght100Grad0Opsz48'
import IconDetectorBatteryFill1Wght200Grad0Opsz48 from '../components/DetectorBatteryFill1Wght200Grad0Opsz48'
import IconDetectorBatteryFill1Wght300Grad0Opsz48 from '../components/DetectorBatteryFill1Wght300Grad0Opsz48'
import IconDetectorBatteryFill1Wght400Grad0Opsz48 from '../components/DetectorBatteryFill1Wght400Grad0Opsz48'
import IconDetectorBatteryFill1Wght500Grad0Opsz48 from '../components/DetectorBatteryFill1Wght500Grad0Opsz48'
import IconDetectorBatteryFill1Wght600Grad0Opsz48 from '../components/DetectorBatteryFill1Wght600Grad0Opsz48'
import IconDetectorBatteryFill1Wght700Grad0Opsz48 from '../components/DetectorBatteryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetectorBattery = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetectorBatteryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetectorBatteryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetectorBatteryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetectorBatteryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetectorBatteryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetectorBatteryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetectorBatteryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetectorBatteryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetectorBatteryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetectorBatteryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetectorBatteryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetectorBatteryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetectorBatteryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetectorBatteryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
