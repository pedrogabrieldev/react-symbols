import IconMotionSensorAlertFill0Wght100Grad0Opsz48 from '../components/MotionSensorAlertFill0Wght100Grad0Opsz48'
import IconMotionSensorAlertFill0Wght200Grad0Opsz48 from '../components/MotionSensorAlertFill0Wght200Grad0Opsz48'
import IconMotionSensorAlertFill0Wght300Grad0Opsz48 from '../components/MotionSensorAlertFill0Wght300Grad0Opsz48'
import IconMotionSensorAlertFill0Wght400Grad0Opsz48 from '../components/MotionSensorAlertFill0Wght400Grad0Opsz48'
import IconMotionSensorAlertFill0Wght500Grad0Opsz48 from '../components/MotionSensorAlertFill0Wght500Grad0Opsz48'
import IconMotionSensorAlertFill0Wght600Grad0Opsz48 from '../components/MotionSensorAlertFill0Wght600Grad0Opsz48'
import IconMotionSensorAlertFill0Wght700Grad0Opsz48 from '../components/MotionSensorAlertFill0Wght700Grad0Opsz48'
import IconMotionSensorAlertFill1Wght100Grad0Opsz48 from '../components/MotionSensorAlertFill1Wght100Grad0Opsz48'
import IconMotionSensorAlertFill1Wght200Grad0Opsz48 from '../components/MotionSensorAlertFill1Wght200Grad0Opsz48'
import IconMotionSensorAlertFill1Wght300Grad0Opsz48 from '../components/MotionSensorAlertFill1Wght300Grad0Opsz48'
import IconMotionSensorAlertFill1Wght400Grad0Opsz48 from '../components/MotionSensorAlertFill1Wght400Grad0Opsz48'
import IconMotionSensorAlertFill1Wght500Grad0Opsz48 from '../components/MotionSensorAlertFill1Wght500Grad0Opsz48'
import IconMotionSensorAlertFill1Wght600Grad0Opsz48 from '../components/MotionSensorAlertFill1Wght600Grad0Opsz48'
import IconMotionSensorAlertFill1Wght700Grad0Opsz48 from '../components/MotionSensorAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionSensorAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionSensorAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionSensorAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionSensorAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionSensorAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionSensorAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionSensorAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionSensorAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionSensorAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionSensorAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionSensorAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionSensorAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionSensorAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionSensorAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionSensorAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
