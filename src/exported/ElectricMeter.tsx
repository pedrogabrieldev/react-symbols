import IconElectricMeterFill0Wght100Grad0Opsz48 from '../components/ElectricMeterFill0Wght100Grad0Opsz48'
import IconElectricMeterFill0Wght200Grad0Opsz48 from '../components/ElectricMeterFill0Wght200Grad0Opsz48'
import IconElectricMeterFill0Wght300Grad0Opsz48 from '../components/ElectricMeterFill0Wght300Grad0Opsz48'
import IconElectricMeterFill0Wght400Grad0Opsz48 from '../components/ElectricMeterFill0Wght400Grad0Opsz48'
import IconElectricMeterFill0Wght500Grad0Opsz48 from '../components/ElectricMeterFill0Wght500Grad0Opsz48'
import IconElectricMeterFill0Wght600Grad0Opsz48 from '../components/ElectricMeterFill0Wght600Grad0Opsz48'
import IconElectricMeterFill0Wght700Grad0Opsz48 from '../components/ElectricMeterFill0Wght700Grad0Opsz48'
import IconElectricMeterFill1Wght100Grad0Opsz48 from '../components/ElectricMeterFill1Wght100Grad0Opsz48'
import IconElectricMeterFill1Wght200Grad0Opsz48 from '../components/ElectricMeterFill1Wght200Grad0Opsz48'
import IconElectricMeterFill1Wght300Grad0Opsz48 from '../components/ElectricMeterFill1Wght300Grad0Opsz48'
import IconElectricMeterFill1Wght400Grad0Opsz48 from '../components/ElectricMeterFill1Wght400Grad0Opsz48'
import IconElectricMeterFill1Wght500Grad0Opsz48 from '../components/ElectricMeterFill1Wght500Grad0Opsz48'
import IconElectricMeterFill1Wght600Grad0Opsz48 from '../components/ElectricMeterFill1Wght600Grad0Opsz48'
import IconElectricMeterFill1Wght700Grad0Opsz48 from '../components/ElectricMeterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElectricMeter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElectricMeterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElectricMeterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElectricMeterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElectricMeterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElectricMeterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElectricMeterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElectricMeterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElectricMeterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElectricMeterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElectricMeterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElectricMeterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElectricMeterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElectricMeterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElectricMeterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
