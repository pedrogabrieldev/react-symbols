import IconElectricRickshawFill0Wght100Grad0Opsz48 from '../components/ElectricRickshawFill0Wght100Grad0Opsz48'
import IconElectricRickshawFill0Wght200Grad0Opsz48 from '../components/ElectricRickshawFill0Wght200Grad0Opsz48'
import IconElectricRickshawFill0Wght300Grad0Opsz48 from '../components/ElectricRickshawFill0Wght300Grad0Opsz48'
import IconElectricRickshawFill0Wght400Grad0Opsz48 from '../components/ElectricRickshawFill0Wght400Grad0Opsz48'
import IconElectricRickshawFill0Wght500Grad0Opsz48 from '../components/ElectricRickshawFill0Wght500Grad0Opsz48'
import IconElectricRickshawFill0Wght600Grad0Opsz48 from '../components/ElectricRickshawFill0Wght600Grad0Opsz48'
import IconElectricRickshawFill0Wght700Grad0Opsz48 from '../components/ElectricRickshawFill0Wght700Grad0Opsz48'
import IconElectricRickshawFill1Wght100Grad0Opsz48 from '../components/ElectricRickshawFill1Wght100Grad0Opsz48'
import IconElectricRickshawFill1Wght200Grad0Opsz48 from '../components/ElectricRickshawFill1Wght200Grad0Opsz48'
import IconElectricRickshawFill1Wght300Grad0Opsz48 from '../components/ElectricRickshawFill1Wght300Grad0Opsz48'
import IconElectricRickshawFill1Wght400Grad0Opsz48 from '../components/ElectricRickshawFill1Wght400Grad0Opsz48'
import IconElectricRickshawFill1Wght500Grad0Opsz48 from '../components/ElectricRickshawFill1Wght500Grad0Opsz48'
import IconElectricRickshawFill1Wght600Grad0Opsz48 from '../components/ElectricRickshawFill1Wght600Grad0Opsz48'
import IconElectricRickshawFill1Wght700Grad0Opsz48 from '../components/ElectricRickshawFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElectricRickshaw = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElectricRickshawFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElectricRickshawFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElectricRickshawFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElectricRickshawFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElectricRickshawFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElectricRickshawFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElectricRickshawFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElectricRickshawFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElectricRickshawFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElectricRickshawFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElectricRickshawFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElectricRickshawFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElectricRickshawFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElectricRickshawFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
