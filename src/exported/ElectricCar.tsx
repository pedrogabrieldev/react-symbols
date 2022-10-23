import IconElectricCarFill0Wght100Grad0Opsz48 from '../components/ElectricCarFill0Wght100Grad0Opsz48'
import IconElectricCarFill0Wght200Grad0Opsz48 from '../components/ElectricCarFill0Wght200Grad0Opsz48'
import IconElectricCarFill0Wght300Grad0Opsz48 from '../components/ElectricCarFill0Wght300Grad0Opsz48'
import IconElectricCarFill0Wght400Grad0Opsz48 from '../components/ElectricCarFill0Wght400Grad0Opsz48'
import IconElectricCarFill0Wght500Grad0Opsz48 from '../components/ElectricCarFill0Wght500Grad0Opsz48'
import IconElectricCarFill0Wght600Grad0Opsz48 from '../components/ElectricCarFill0Wght600Grad0Opsz48'
import IconElectricCarFill0Wght700Grad0Opsz48 from '../components/ElectricCarFill0Wght700Grad0Opsz48'
import IconElectricCarFill1Wght100Grad0Opsz48 from '../components/ElectricCarFill1Wght100Grad0Opsz48'
import IconElectricCarFill1Wght200Grad0Opsz48 from '../components/ElectricCarFill1Wght200Grad0Opsz48'
import IconElectricCarFill1Wght300Grad0Opsz48 from '../components/ElectricCarFill1Wght300Grad0Opsz48'
import IconElectricCarFill1Wght400Grad0Opsz48 from '../components/ElectricCarFill1Wght400Grad0Opsz48'
import IconElectricCarFill1Wght500Grad0Opsz48 from '../components/ElectricCarFill1Wght500Grad0Opsz48'
import IconElectricCarFill1Wght600Grad0Opsz48 from '../components/ElectricCarFill1Wght600Grad0Opsz48'
import IconElectricCarFill1Wght700Grad0Opsz48 from '../components/ElectricCarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElectricCar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElectricCarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElectricCarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElectricCarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElectricCarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElectricCarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElectricCarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElectricCarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElectricCarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElectricCarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElectricCarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElectricCarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElectricCarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElectricCarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElectricCarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
