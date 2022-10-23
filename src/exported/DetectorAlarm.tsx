import IconDetectorAlarmFill0Wght100Grad0Opsz48 from '../components/DetectorAlarmFill0Wght100Grad0Opsz48'
import IconDetectorAlarmFill0Wght200Grad0Opsz48 from '../components/DetectorAlarmFill0Wght200Grad0Opsz48'
import IconDetectorAlarmFill0Wght300Grad0Opsz48 from '../components/DetectorAlarmFill0Wght300Grad0Opsz48'
import IconDetectorAlarmFill0Wght400Grad0Opsz48 from '../components/DetectorAlarmFill0Wght400Grad0Opsz48'
import IconDetectorAlarmFill0Wght500Grad0Opsz48 from '../components/DetectorAlarmFill0Wght500Grad0Opsz48'
import IconDetectorAlarmFill0Wght600Grad0Opsz48 from '../components/DetectorAlarmFill0Wght600Grad0Opsz48'
import IconDetectorAlarmFill0Wght700Grad0Opsz48 from '../components/DetectorAlarmFill0Wght700Grad0Opsz48'
import IconDetectorAlarmFill1Wght100Grad0Opsz48 from '../components/DetectorAlarmFill1Wght100Grad0Opsz48'
import IconDetectorAlarmFill1Wght200Grad0Opsz48 from '../components/DetectorAlarmFill1Wght200Grad0Opsz48'
import IconDetectorAlarmFill1Wght300Grad0Opsz48 from '../components/DetectorAlarmFill1Wght300Grad0Opsz48'
import IconDetectorAlarmFill1Wght400Grad0Opsz48 from '../components/DetectorAlarmFill1Wght400Grad0Opsz48'
import IconDetectorAlarmFill1Wght500Grad0Opsz48 from '../components/DetectorAlarmFill1Wght500Grad0Opsz48'
import IconDetectorAlarmFill1Wght600Grad0Opsz48 from '../components/DetectorAlarmFill1Wght600Grad0Opsz48'
import IconDetectorAlarmFill1Wght700Grad0Opsz48 from '../components/DetectorAlarmFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetectorAlarm = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetectorAlarmFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetectorAlarmFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetectorAlarmFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetectorAlarmFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetectorAlarmFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetectorAlarmFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetectorAlarmFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetectorAlarmFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetectorAlarmFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetectorAlarmFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetectorAlarmFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetectorAlarmFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetectorAlarmFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetectorAlarmFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
