import IconSensorsOffFill0Wght100Grad0Opsz48 from '../components/SensorsOffFill0Wght100Grad0Opsz48'
import IconSensorsOffFill0Wght200Grad0Opsz48 from '../components/SensorsOffFill0Wght200Grad0Opsz48'
import IconSensorsOffFill0Wght300Grad0Opsz48 from '../components/SensorsOffFill0Wght300Grad0Opsz48'
import IconSensorsOffFill0Wght400Grad0Opsz48 from '../components/SensorsOffFill0Wght400Grad0Opsz48'
import IconSensorsOffFill0Wght500Grad0Opsz48 from '../components/SensorsOffFill0Wght500Grad0Opsz48'
import IconSensorsOffFill0Wght600Grad0Opsz48 from '../components/SensorsOffFill0Wght600Grad0Opsz48'
import IconSensorsOffFill0Wght700Grad0Opsz48 from '../components/SensorsOffFill0Wght700Grad0Opsz48'
import IconSensorsOffFill1Wght100Grad0Opsz48 from '../components/SensorsOffFill1Wght100Grad0Opsz48'
import IconSensorsOffFill1Wght200Grad0Opsz48 from '../components/SensorsOffFill1Wght200Grad0Opsz48'
import IconSensorsOffFill1Wght300Grad0Opsz48 from '../components/SensorsOffFill1Wght300Grad0Opsz48'
import IconSensorsOffFill1Wght400Grad0Opsz48 from '../components/SensorsOffFill1Wght400Grad0Opsz48'
import IconSensorsOffFill1Wght500Grad0Opsz48 from '../components/SensorsOffFill1Wght500Grad0Opsz48'
import IconSensorsOffFill1Wght600Grad0Opsz48 from '../components/SensorsOffFill1Wght600Grad0Opsz48'
import IconSensorsOffFill1Wght700Grad0Opsz48 from '../components/SensorsOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSensorsOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSensorsOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSensorsOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSensorsOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSensorsOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSensorsOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSensorsOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSensorsOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSensorsOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSensorsOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSensorsOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSensorsOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSensorsOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSensorsOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSensorsOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
