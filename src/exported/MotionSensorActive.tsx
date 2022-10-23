import IconMotionSensorActiveFill0Wght100Grad0Opsz48 from '../components/MotionSensorActiveFill0Wght100Grad0Opsz48'
import IconMotionSensorActiveFill0Wght200Grad0Opsz48 from '../components/MotionSensorActiveFill0Wght200Grad0Opsz48'
import IconMotionSensorActiveFill0Wght300Grad0Opsz48 from '../components/MotionSensorActiveFill0Wght300Grad0Opsz48'
import IconMotionSensorActiveFill0Wght400Grad0Opsz48 from '../components/MotionSensorActiveFill0Wght400Grad0Opsz48'
import IconMotionSensorActiveFill0Wght500Grad0Opsz48 from '../components/MotionSensorActiveFill0Wght500Grad0Opsz48'
import IconMotionSensorActiveFill0Wght600Grad0Opsz48 from '../components/MotionSensorActiveFill0Wght600Grad0Opsz48'
import IconMotionSensorActiveFill0Wght700Grad0Opsz48 from '../components/MotionSensorActiveFill0Wght700Grad0Opsz48'
import IconMotionSensorActiveFill1Wght100Grad0Opsz48 from '../components/MotionSensorActiveFill1Wght100Grad0Opsz48'
import IconMotionSensorActiveFill1Wght200Grad0Opsz48 from '../components/MotionSensorActiveFill1Wght200Grad0Opsz48'
import IconMotionSensorActiveFill1Wght300Grad0Opsz48 from '../components/MotionSensorActiveFill1Wght300Grad0Opsz48'
import IconMotionSensorActiveFill1Wght400Grad0Opsz48 from '../components/MotionSensorActiveFill1Wght400Grad0Opsz48'
import IconMotionSensorActiveFill1Wght500Grad0Opsz48 from '../components/MotionSensorActiveFill1Wght500Grad0Opsz48'
import IconMotionSensorActiveFill1Wght600Grad0Opsz48 from '../components/MotionSensorActiveFill1Wght600Grad0Opsz48'
import IconMotionSensorActiveFill1Wght700Grad0Opsz48 from '../components/MotionSensorActiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionSensorActive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionSensorActiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionSensorActiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionSensorActiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionSensorActiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionSensorActiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionSensorActiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionSensorActiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionSensorActiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionSensorActiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionSensorActiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionSensorActiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionSensorActiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionSensorActiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionSensorActiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
