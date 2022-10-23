import IconElectricBikeFill0Wght100Grad0Opsz48 from '../components/ElectricBikeFill0Wght100Grad0Opsz48'
import IconElectricBikeFill0Wght200Grad0Opsz48 from '../components/ElectricBikeFill0Wght200Grad0Opsz48'
import IconElectricBikeFill0Wght300Grad0Opsz48 from '../components/ElectricBikeFill0Wght300Grad0Opsz48'
import IconElectricBikeFill0Wght400Grad0Opsz48 from '../components/ElectricBikeFill0Wght400Grad0Opsz48'
import IconElectricBikeFill0Wght500Grad0Opsz48 from '../components/ElectricBikeFill0Wght500Grad0Opsz48'
import IconElectricBikeFill0Wght600Grad0Opsz48 from '../components/ElectricBikeFill0Wght600Grad0Opsz48'
import IconElectricBikeFill0Wght700Grad0Opsz48 from '../components/ElectricBikeFill0Wght700Grad0Opsz48'
import IconElectricBikeFill1Wght100Grad0Opsz48 from '../components/ElectricBikeFill1Wght100Grad0Opsz48'
import IconElectricBikeFill1Wght200Grad0Opsz48 from '../components/ElectricBikeFill1Wght200Grad0Opsz48'
import IconElectricBikeFill1Wght300Grad0Opsz48 from '../components/ElectricBikeFill1Wght300Grad0Opsz48'
import IconElectricBikeFill1Wght400Grad0Opsz48 from '../components/ElectricBikeFill1Wght400Grad0Opsz48'
import IconElectricBikeFill1Wght500Grad0Opsz48 from '../components/ElectricBikeFill1Wght500Grad0Opsz48'
import IconElectricBikeFill1Wght600Grad0Opsz48 from '../components/ElectricBikeFill1Wght600Grad0Opsz48'
import IconElectricBikeFill1Wght700Grad0Opsz48 from '../components/ElectricBikeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElectricBike = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElectricBikeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElectricBikeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElectricBikeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElectricBikeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElectricBikeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElectricBikeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElectricBikeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElectricBikeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElectricBikeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElectricBikeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElectricBikeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElectricBikeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElectricBikeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElectricBikeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
