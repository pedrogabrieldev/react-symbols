import IconElectricBoltFill0Wght100Grad0Opsz48 from '../components/ElectricBoltFill0Wght100Grad0Opsz48'
import IconElectricBoltFill0Wght200Grad0Opsz48 from '../components/ElectricBoltFill0Wght200Grad0Opsz48'
import IconElectricBoltFill0Wght300Grad0Opsz48 from '../components/ElectricBoltFill0Wght300Grad0Opsz48'
import IconElectricBoltFill0Wght400Grad0Opsz48 from '../components/ElectricBoltFill0Wght400Grad0Opsz48'
import IconElectricBoltFill0Wght500Grad0Opsz48 from '../components/ElectricBoltFill0Wght500Grad0Opsz48'
import IconElectricBoltFill0Wght600Grad0Opsz48 from '../components/ElectricBoltFill0Wght600Grad0Opsz48'
import IconElectricBoltFill0Wght700Grad0Opsz48 from '../components/ElectricBoltFill0Wght700Grad0Opsz48'
import IconElectricBoltFill1Wght100Grad0Opsz48 from '../components/ElectricBoltFill1Wght100Grad0Opsz48'
import IconElectricBoltFill1Wght200Grad0Opsz48 from '../components/ElectricBoltFill1Wght200Grad0Opsz48'
import IconElectricBoltFill1Wght300Grad0Opsz48 from '../components/ElectricBoltFill1Wght300Grad0Opsz48'
import IconElectricBoltFill1Wght400Grad0Opsz48 from '../components/ElectricBoltFill1Wght400Grad0Opsz48'
import IconElectricBoltFill1Wght500Grad0Opsz48 from '../components/ElectricBoltFill1Wght500Grad0Opsz48'
import IconElectricBoltFill1Wght600Grad0Opsz48 from '../components/ElectricBoltFill1Wght600Grad0Opsz48'
import IconElectricBoltFill1Wght700Grad0Opsz48 from '../components/ElectricBoltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElectricBolt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElectricBoltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElectricBoltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElectricBoltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElectricBoltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElectricBoltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElectricBoltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElectricBoltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElectricBoltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElectricBoltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElectricBoltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElectricBoltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElectricBoltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElectricBoltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElectricBoltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
