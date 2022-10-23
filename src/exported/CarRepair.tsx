import IconCarRepairFill0Wght100Grad0Opsz48 from '../components/CarRepairFill0Wght100Grad0Opsz48'
import IconCarRepairFill0Wght200Grad0Opsz48 from '../components/CarRepairFill0Wght200Grad0Opsz48'
import IconCarRepairFill0Wght300Grad0Opsz48 from '../components/CarRepairFill0Wght300Grad0Opsz48'
import IconCarRepairFill0Wght400Grad0Opsz48 from '../components/CarRepairFill0Wght400Grad0Opsz48'
import IconCarRepairFill0Wght500Grad0Opsz48 from '../components/CarRepairFill0Wght500Grad0Opsz48'
import IconCarRepairFill0Wght600Grad0Opsz48 from '../components/CarRepairFill0Wght600Grad0Opsz48'
import IconCarRepairFill0Wght700Grad0Opsz48 from '../components/CarRepairFill0Wght700Grad0Opsz48'
import IconCarRepairFill1Wght100Grad0Opsz48 from '../components/CarRepairFill1Wght100Grad0Opsz48'
import IconCarRepairFill1Wght200Grad0Opsz48 from '../components/CarRepairFill1Wght200Grad0Opsz48'
import IconCarRepairFill1Wght300Grad0Opsz48 from '../components/CarRepairFill1Wght300Grad0Opsz48'
import IconCarRepairFill1Wght400Grad0Opsz48 from '../components/CarRepairFill1Wght400Grad0Opsz48'
import IconCarRepairFill1Wght500Grad0Opsz48 from '../components/CarRepairFill1Wght500Grad0Opsz48'
import IconCarRepairFill1Wght600Grad0Opsz48 from '../components/CarRepairFill1Wght600Grad0Opsz48'
import IconCarRepairFill1Wght700Grad0Opsz48 from '../components/CarRepairFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCarRepair = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCarRepairFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCarRepairFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCarRepairFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCarRepairFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCarRepairFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCarRepairFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCarRepairFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCarRepairFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCarRepairFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCarRepairFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCarRepairFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCarRepairFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCarRepairFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCarRepairFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
