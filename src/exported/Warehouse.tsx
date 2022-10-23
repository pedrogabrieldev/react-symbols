import IconWarehouseFill0Wght100Grad0Opsz48 from '../components/WarehouseFill0Wght100Grad0Opsz48'
import IconWarehouseFill0Wght200Grad0Opsz48 from '../components/WarehouseFill0Wght200Grad0Opsz48'
import IconWarehouseFill0Wght300Grad0Opsz48 from '../components/WarehouseFill0Wght300Grad0Opsz48'
import IconWarehouseFill0Wght400Grad0Opsz48 from '../components/WarehouseFill0Wght400Grad0Opsz48'
import IconWarehouseFill0Wght500Grad0Opsz48 from '../components/WarehouseFill0Wght500Grad0Opsz48'
import IconWarehouseFill0Wght600Grad0Opsz48 from '../components/WarehouseFill0Wght600Grad0Opsz48'
import IconWarehouseFill0Wght700Grad0Opsz48 from '../components/WarehouseFill0Wght700Grad0Opsz48'
import IconWarehouseFill1Wght100Grad0Opsz48 from '../components/WarehouseFill1Wght100Grad0Opsz48'
import IconWarehouseFill1Wght200Grad0Opsz48 from '../components/WarehouseFill1Wght200Grad0Opsz48'
import IconWarehouseFill1Wght300Grad0Opsz48 from '../components/WarehouseFill1Wght300Grad0Opsz48'
import IconWarehouseFill1Wght400Grad0Opsz48 from '../components/WarehouseFill1Wght400Grad0Opsz48'
import IconWarehouseFill1Wght500Grad0Opsz48 from '../components/WarehouseFill1Wght500Grad0Opsz48'
import IconWarehouseFill1Wght600Grad0Opsz48 from '../components/WarehouseFill1Wght600Grad0Opsz48'
import IconWarehouseFill1Wght700Grad0Opsz48 from '../components/WarehouseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWarehouse = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWarehouseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWarehouseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWarehouseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWarehouseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWarehouseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWarehouseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWarehouseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWarehouseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWarehouseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWarehouseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWarehouseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWarehouseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWarehouseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWarehouseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
