import IconSolarPowerFill0Wght100Grad0Opsz48 from '../components/SolarPowerFill0Wght100Grad0Opsz48'
import IconSolarPowerFill0Wght200Grad0Opsz48 from '../components/SolarPowerFill0Wght200Grad0Opsz48'
import IconSolarPowerFill0Wght300Grad0Opsz48 from '../components/SolarPowerFill0Wght300Grad0Opsz48'
import IconSolarPowerFill0Wght400Grad0Opsz48 from '../components/SolarPowerFill0Wght400Grad0Opsz48'
import IconSolarPowerFill0Wght500Grad0Opsz48 from '../components/SolarPowerFill0Wght500Grad0Opsz48'
import IconSolarPowerFill0Wght600Grad0Opsz48 from '../components/SolarPowerFill0Wght600Grad0Opsz48'
import IconSolarPowerFill0Wght700Grad0Opsz48 from '../components/SolarPowerFill0Wght700Grad0Opsz48'
import IconSolarPowerFill1Wght100Grad0Opsz48 from '../components/SolarPowerFill1Wght100Grad0Opsz48'
import IconSolarPowerFill1Wght200Grad0Opsz48 from '../components/SolarPowerFill1Wght200Grad0Opsz48'
import IconSolarPowerFill1Wght300Grad0Opsz48 from '../components/SolarPowerFill1Wght300Grad0Opsz48'
import IconSolarPowerFill1Wght400Grad0Opsz48 from '../components/SolarPowerFill1Wght400Grad0Opsz48'
import IconSolarPowerFill1Wght500Grad0Opsz48 from '../components/SolarPowerFill1Wght500Grad0Opsz48'
import IconSolarPowerFill1Wght600Grad0Opsz48 from '../components/SolarPowerFill1Wght600Grad0Opsz48'
import IconSolarPowerFill1Wght700Grad0Opsz48 from '../components/SolarPowerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSolarPower = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSolarPowerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSolarPowerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSolarPowerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSolarPowerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSolarPowerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSolarPowerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSolarPowerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSolarPowerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSolarPowerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSolarPowerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSolarPowerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSolarPowerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSolarPowerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSolarPowerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
