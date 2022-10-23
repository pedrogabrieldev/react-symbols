import IconTireRepairFill0Wght100Grad0Opsz48 from '../components/TireRepairFill0Wght100Grad0Opsz48'
import IconTireRepairFill0Wght200Grad0Opsz48 from '../components/TireRepairFill0Wght200Grad0Opsz48'
import IconTireRepairFill0Wght300Grad0Opsz48 from '../components/TireRepairFill0Wght300Grad0Opsz48'
import IconTireRepairFill0Wght400Grad0Opsz48 from '../components/TireRepairFill0Wght400Grad0Opsz48'
import IconTireRepairFill0Wght500Grad0Opsz48 from '../components/TireRepairFill0Wght500Grad0Opsz48'
import IconTireRepairFill0Wght600Grad0Opsz48 from '../components/TireRepairFill0Wght600Grad0Opsz48'
import IconTireRepairFill0Wght700Grad0Opsz48 from '../components/TireRepairFill0Wght700Grad0Opsz48'
import IconTireRepairFill1Wght100Grad0Opsz48 from '../components/TireRepairFill1Wght100Grad0Opsz48'
import IconTireRepairFill1Wght200Grad0Opsz48 from '../components/TireRepairFill1Wght200Grad0Opsz48'
import IconTireRepairFill1Wght300Grad0Opsz48 from '../components/TireRepairFill1Wght300Grad0Opsz48'
import IconTireRepairFill1Wght400Grad0Opsz48 from '../components/TireRepairFill1Wght400Grad0Opsz48'
import IconTireRepairFill1Wght500Grad0Opsz48 from '../components/TireRepairFill1Wght500Grad0Opsz48'
import IconTireRepairFill1Wght600Grad0Opsz48 from '../components/TireRepairFill1Wght600Grad0Opsz48'
import IconTireRepairFill1Wght700Grad0Opsz48 from '../components/TireRepairFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTireRepair = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTireRepairFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTireRepairFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTireRepairFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTireRepairFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTireRepairFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTireRepairFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTireRepairFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTireRepairFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTireRepairFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTireRepairFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTireRepairFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTireRepairFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTireRepairFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTireRepairFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
