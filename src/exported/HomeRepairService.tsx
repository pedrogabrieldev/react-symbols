import IconHomeRepairServiceFill0Wght100Grad0Opsz48 from '../components/HomeRepairServiceFill0Wght100Grad0Opsz48'
import IconHomeRepairServiceFill0Wght200Grad0Opsz48 from '../components/HomeRepairServiceFill0Wght200Grad0Opsz48'
import IconHomeRepairServiceFill0Wght300Grad0Opsz48 from '../components/HomeRepairServiceFill0Wght300Grad0Opsz48'
import IconHomeRepairServiceFill0Wght400Grad0Opsz48 from '../components/HomeRepairServiceFill0Wght400Grad0Opsz48'
import IconHomeRepairServiceFill0Wght500Grad0Opsz48 from '../components/HomeRepairServiceFill0Wght500Grad0Opsz48'
import IconHomeRepairServiceFill0Wght600Grad0Opsz48 from '../components/HomeRepairServiceFill0Wght600Grad0Opsz48'
import IconHomeRepairServiceFill0Wght700Grad0Opsz48 from '../components/HomeRepairServiceFill0Wght700Grad0Opsz48'
import IconHomeRepairServiceFill1Wght100Grad0Opsz48 from '../components/HomeRepairServiceFill1Wght100Grad0Opsz48'
import IconHomeRepairServiceFill1Wght200Grad0Opsz48 from '../components/HomeRepairServiceFill1Wght200Grad0Opsz48'
import IconHomeRepairServiceFill1Wght300Grad0Opsz48 from '../components/HomeRepairServiceFill1Wght300Grad0Opsz48'
import IconHomeRepairServiceFill1Wght400Grad0Opsz48 from '../components/HomeRepairServiceFill1Wght400Grad0Opsz48'
import IconHomeRepairServiceFill1Wght500Grad0Opsz48 from '../components/HomeRepairServiceFill1Wght500Grad0Opsz48'
import IconHomeRepairServiceFill1Wght600Grad0Opsz48 from '../components/HomeRepairServiceFill1Wght600Grad0Opsz48'
import IconHomeRepairServiceFill1Wght700Grad0Opsz48 from '../components/HomeRepairServiceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeRepairService = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeRepairServiceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeRepairServiceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeRepairServiceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeRepairServiceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeRepairServiceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeRepairServiceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeRepairServiceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeRepairServiceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeRepairServiceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeRepairServiceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeRepairServiceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeRepairServiceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeRepairServiceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeRepairServiceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
