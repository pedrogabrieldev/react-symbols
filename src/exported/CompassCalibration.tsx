import IconCompassCalibrationFill0Wght100Grad0Opsz48 from '../components/CompassCalibrationFill0Wght100Grad0Opsz48'
import IconCompassCalibrationFill0Wght200Grad0Opsz48 from '../components/CompassCalibrationFill0Wght200Grad0Opsz48'
import IconCompassCalibrationFill0Wght300Grad0Opsz48 from '../components/CompassCalibrationFill0Wght300Grad0Opsz48'
import IconCompassCalibrationFill0Wght400Grad0Opsz48 from '../components/CompassCalibrationFill0Wght400Grad0Opsz48'
import IconCompassCalibrationFill0Wght500Grad0Opsz48 from '../components/CompassCalibrationFill0Wght500Grad0Opsz48'
import IconCompassCalibrationFill0Wght600Grad0Opsz48 from '../components/CompassCalibrationFill0Wght600Grad0Opsz48'
import IconCompassCalibrationFill0Wght700Grad0Opsz48 from '../components/CompassCalibrationFill0Wght700Grad0Opsz48'
import IconCompassCalibrationFill1Wght100Grad0Opsz48 from '../components/CompassCalibrationFill1Wght100Grad0Opsz48'
import IconCompassCalibrationFill1Wght200Grad0Opsz48 from '../components/CompassCalibrationFill1Wght200Grad0Opsz48'
import IconCompassCalibrationFill1Wght300Grad0Opsz48 from '../components/CompassCalibrationFill1Wght300Grad0Opsz48'
import IconCompassCalibrationFill1Wght400Grad0Opsz48 from '../components/CompassCalibrationFill1Wght400Grad0Opsz48'
import IconCompassCalibrationFill1Wght500Grad0Opsz48 from '../components/CompassCalibrationFill1Wght500Grad0Opsz48'
import IconCompassCalibrationFill1Wght600Grad0Opsz48 from '../components/CompassCalibrationFill1Wght600Grad0Opsz48'
import IconCompassCalibrationFill1Wght700Grad0Opsz48 from '../components/CompassCalibrationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCompassCalibration = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCompassCalibrationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCompassCalibrationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCompassCalibrationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCompassCalibrationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCompassCalibrationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCompassCalibrationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCompassCalibrationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCompassCalibrationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCompassCalibrationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCompassCalibrationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCompassCalibrationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCompassCalibrationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCompassCalibrationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCompassCalibrationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
