import IconElectricScooterFill0Wght100Grad0Opsz48 from '../components/ElectricScooterFill0Wght100Grad0Opsz48'
import IconElectricScooterFill0Wght200Grad0Opsz48 from '../components/ElectricScooterFill0Wght200Grad0Opsz48'
import IconElectricScooterFill0Wght300Grad0Opsz48 from '../components/ElectricScooterFill0Wght300Grad0Opsz48'
import IconElectricScooterFill0Wght400Grad0Opsz48 from '../components/ElectricScooterFill0Wght400Grad0Opsz48'
import IconElectricScooterFill0Wght500Grad0Opsz48 from '../components/ElectricScooterFill0Wght500Grad0Opsz48'
import IconElectricScooterFill0Wght600Grad0Opsz48 from '../components/ElectricScooterFill0Wght600Grad0Opsz48'
import IconElectricScooterFill0Wght700Grad0Opsz48 from '../components/ElectricScooterFill0Wght700Grad0Opsz48'
import IconElectricScooterFill1Wght100Grad0Opsz48 from '../components/ElectricScooterFill1Wght100Grad0Opsz48'
import IconElectricScooterFill1Wght200Grad0Opsz48 from '../components/ElectricScooterFill1Wght200Grad0Opsz48'
import IconElectricScooterFill1Wght300Grad0Opsz48 from '../components/ElectricScooterFill1Wght300Grad0Opsz48'
import IconElectricScooterFill1Wght400Grad0Opsz48 from '../components/ElectricScooterFill1Wght400Grad0Opsz48'
import IconElectricScooterFill1Wght500Grad0Opsz48 from '../components/ElectricScooterFill1Wght500Grad0Opsz48'
import IconElectricScooterFill1Wght600Grad0Opsz48 from '../components/ElectricScooterFill1Wght600Grad0Opsz48'
import IconElectricScooterFill1Wght700Grad0Opsz48 from '../components/ElectricScooterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElectricScooter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElectricScooterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElectricScooterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElectricScooterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElectricScooterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElectricScooterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElectricScooterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElectricScooterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElectricScooterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElectricScooterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElectricScooterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElectricScooterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElectricScooterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElectricScooterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElectricScooterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
