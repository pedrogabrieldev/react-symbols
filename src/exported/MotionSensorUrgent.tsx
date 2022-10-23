import IconMotionSensorUrgentFill0Wght100Grad0Opsz48 from '../components/MotionSensorUrgentFill0Wght100Grad0Opsz48'
import IconMotionSensorUrgentFill0Wght200Grad0Opsz48 from '../components/MotionSensorUrgentFill0Wght200Grad0Opsz48'
import IconMotionSensorUrgentFill0Wght300Grad0Opsz48 from '../components/MotionSensorUrgentFill0Wght300Grad0Opsz48'
import IconMotionSensorUrgentFill0Wght400Grad0Opsz48 from '../components/MotionSensorUrgentFill0Wght400Grad0Opsz48'
import IconMotionSensorUrgentFill0Wght500Grad0Opsz48 from '../components/MotionSensorUrgentFill0Wght500Grad0Opsz48'
import IconMotionSensorUrgentFill0Wght600Grad0Opsz48 from '../components/MotionSensorUrgentFill0Wght600Grad0Opsz48'
import IconMotionSensorUrgentFill0Wght700Grad0Opsz48 from '../components/MotionSensorUrgentFill0Wght700Grad0Opsz48'
import IconMotionSensorUrgentFill1Wght100Grad0Opsz48 from '../components/MotionSensorUrgentFill1Wght100Grad0Opsz48'
import IconMotionSensorUrgentFill1Wght200Grad0Opsz48 from '../components/MotionSensorUrgentFill1Wght200Grad0Opsz48'
import IconMotionSensorUrgentFill1Wght300Grad0Opsz48 from '../components/MotionSensorUrgentFill1Wght300Grad0Opsz48'
import IconMotionSensorUrgentFill1Wght400Grad0Opsz48 from '../components/MotionSensorUrgentFill1Wght400Grad0Opsz48'
import IconMotionSensorUrgentFill1Wght500Grad0Opsz48 from '../components/MotionSensorUrgentFill1Wght500Grad0Opsz48'
import IconMotionSensorUrgentFill1Wght600Grad0Opsz48 from '../components/MotionSensorUrgentFill1Wght600Grad0Opsz48'
import IconMotionSensorUrgentFill1Wght700Grad0Opsz48 from '../components/MotionSensorUrgentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionSensorUrgent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionSensorUrgentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionSensorUrgentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionSensorUrgentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionSensorUrgentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionSensorUrgentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionSensorUrgentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionSensorUrgentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionSensorUrgentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionSensorUrgentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionSensorUrgentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionSensorUrgentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionSensorUrgentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionSensorUrgentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionSensorUrgentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
