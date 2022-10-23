import IconElectricMopedFill0Wght100Grad0Opsz48 from '../components/ElectricMopedFill0Wght100Grad0Opsz48'
import IconElectricMopedFill0Wght200Grad0Opsz48 from '../components/ElectricMopedFill0Wght200Grad0Opsz48'
import IconElectricMopedFill0Wght300Grad0Opsz48 from '../components/ElectricMopedFill0Wght300Grad0Opsz48'
import IconElectricMopedFill0Wght400Grad0Opsz48 from '../components/ElectricMopedFill0Wght400Grad0Opsz48'
import IconElectricMopedFill0Wght500Grad0Opsz48 from '../components/ElectricMopedFill0Wght500Grad0Opsz48'
import IconElectricMopedFill0Wght600Grad0Opsz48 from '../components/ElectricMopedFill0Wght600Grad0Opsz48'
import IconElectricMopedFill0Wght700Grad0Opsz48 from '../components/ElectricMopedFill0Wght700Grad0Opsz48'
import IconElectricMopedFill1Wght100Grad0Opsz48 from '../components/ElectricMopedFill1Wght100Grad0Opsz48'
import IconElectricMopedFill1Wght200Grad0Opsz48 from '../components/ElectricMopedFill1Wght200Grad0Opsz48'
import IconElectricMopedFill1Wght300Grad0Opsz48 from '../components/ElectricMopedFill1Wght300Grad0Opsz48'
import IconElectricMopedFill1Wght400Grad0Opsz48 from '../components/ElectricMopedFill1Wght400Grad0Opsz48'
import IconElectricMopedFill1Wght500Grad0Opsz48 from '../components/ElectricMopedFill1Wght500Grad0Opsz48'
import IconElectricMopedFill1Wght600Grad0Opsz48 from '../components/ElectricMopedFill1Wght600Grad0Opsz48'
import IconElectricMopedFill1Wght700Grad0Opsz48 from '../components/ElectricMopedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElectricMoped = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElectricMopedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElectricMopedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElectricMopedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElectricMopedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElectricMopedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElectricMopedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElectricMopedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElectricMopedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElectricMopedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElectricMopedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElectricMopedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElectricMopedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElectricMopedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElectricMopedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
