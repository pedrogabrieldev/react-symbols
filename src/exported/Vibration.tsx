import IconVibrationFill0Wght100Grad0Opsz48 from '../components/VibrationFill0Wght100Grad0Opsz48'
import IconVibrationFill0Wght200Grad0Opsz48 from '../components/VibrationFill0Wght200Grad0Opsz48'
import IconVibrationFill0Wght300Grad0Opsz48 from '../components/VibrationFill0Wght300Grad0Opsz48'
import IconVibrationFill0Wght400Grad0Opsz48 from '../components/VibrationFill0Wght400Grad0Opsz48'
import IconVibrationFill0Wght500Grad0Opsz48 from '../components/VibrationFill0Wght500Grad0Opsz48'
import IconVibrationFill0Wght600Grad0Opsz48 from '../components/VibrationFill0Wght600Grad0Opsz48'
import IconVibrationFill0Wght700Grad0Opsz48 from '../components/VibrationFill0Wght700Grad0Opsz48'
import IconVibrationFill1Wght100Grad0Opsz48 from '../components/VibrationFill1Wght100Grad0Opsz48'
import IconVibrationFill1Wght200Grad0Opsz48 from '../components/VibrationFill1Wght200Grad0Opsz48'
import IconVibrationFill1Wght300Grad0Opsz48 from '../components/VibrationFill1Wght300Grad0Opsz48'
import IconVibrationFill1Wght400Grad0Opsz48 from '../components/VibrationFill1Wght400Grad0Opsz48'
import IconVibrationFill1Wght500Grad0Opsz48 from '../components/VibrationFill1Wght500Grad0Opsz48'
import IconVibrationFill1Wght600Grad0Opsz48 from '../components/VibrationFill1Wght600Grad0Opsz48'
import IconVibrationFill1Wght700Grad0Opsz48 from '../components/VibrationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVibration = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVibrationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVibrationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVibrationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVibrationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVibrationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVibrationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVibrationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVibrationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVibrationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVibrationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVibrationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVibrationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVibrationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVibrationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
