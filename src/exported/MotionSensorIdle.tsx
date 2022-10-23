import IconMotionSensorIdleFill0Wght100Grad0Opsz48 from '../components/MotionSensorIdleFill0Wght100Grad0Opsz48'
import IconMotionSensorIdleFill0Wght200Grad0Opsz48 from '../components/MotionSensorIdleFill0Wght200Grad0Opsz48'
import IconMotionSensorIdleFill0Wght300Grad0Opsz48 from '../components/MotionSensorIdleFill0Wght300Grad0Opsz48'
import IconMotionSensorIdleFill0Wght400Grad0Opsz48 from '../components/MotionSensorIdleFill0Wght400Grad0Opsz48'
import IconMotionSensorIdleFill0Wght500Grad0Opsz48 from '../components/MotionSensorIdleFill0Wght500Grad0Opsz48'
import IconMotionSensorIdleFill0Wght600Grad0Opsz48 from '../components/MotionSensorIdleFill0Wght600Grad0Opsz48'
import IconMotionSensorIdleFill0Wght700Grad0Opsz48 from '../components/MotionSensorIdleFill0Wght700Grad0Opsz48'
import IconMotionSensorIdleFill1Wght100Grad0Opsz48 from '../components/MotionSensorIdleFill1Wght100Grad0Opsz48'
import IconMotionSensorIdleFill1Wght200Grad0Opsz48 from '../components/MotionSensorIdleFill1Wght200Grad0Opsz48'
import IconMotionSensorIdleFill1Wght300Grad0Opsz48 from '../components/MotionSensorIdleFill1Wght300Grad0Opsz48'
import IconMotionSensorIdleFill1Wght400Grad0Opsz48 from '../components/MotionSensorIdleFill1Wght400Grad0Opsz48'
import IconMotionSensorIdleFill1Wght500Grad0Opsz48 from '../components/MotionSensorIdleFill1Wght500Grad0Opsz48'
import IconMotionSensorIdleFill1Wght600Grad0Opsz48 from '../components/MotionSensorIdleFill1Wght600Grad0Opsz48'
import IconMotionSensorIdleFill1Wght700Grad0Opsz48 from '../components/MotionSensorIdleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionSensorIdle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionSensorIdleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionSensorIdleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionSensorIdleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionSensorIdleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionSensorIdleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionSensorIdleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionSensorIdleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionSensorIdleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionSensorIdleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionSensorIdleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionSensorIdleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionSensorIdleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionSensorIdleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionSensorIdleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
