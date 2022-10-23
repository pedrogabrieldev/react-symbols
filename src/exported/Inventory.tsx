import IconInventoryFill0Wght100Grad0Opsz48 from '../components/InventoryFill0Wght100Grad0Opsz48'
import IconInventoryFill0Wght200Grad0Opsz48 from '../components/InventoryFill0Wght200Grad0Opsz48'
import IconInventoryFill0Wght300Grad0Opsz48 from '../components/InventoryFill0Wght300Grad0Opsz48'
import IconInventoryFill0Wght400Grad0Opsz48 from '../components/InventoryFill0Wght400Grad0Opsz48'
import IconInventoryFill0Wght500Grad0Opsz48 from '../components/InventoryFill0Wght500Grad0Opsz48'
import IconInventoryFill0Wght600Grad0Opsz48 from '../components/InventoryFill0Wght600Grad0Opsz48'
import IconInventoryFill0Wght700Grad0Opsz48 from '../components/InventoryFill0Wght700Grad0Opsz48'
import IconInventoryFill1Wght100Grad0Opsz48 from '../components/InventoryFill1Wght100Grad0Opsz48'
import IconInventoryFill1Wght200Grad0Opsz48 from '../components/InventoryFill1Wght200Grad0Opsz48'
import IconInventoryFill1Wght300Grad0Opsz48 from '../components/InventoryFill1Wght300Grad0Opsz48'
import IconInventoryFill1Wght400Grad0Opsz48 from '../components/InventoryFill1Wght400Grad0Opsz48'
import IconInventoryFill1Wght500Grad0Opsz48 from '../components/InventoryFill1Wght500Grad0Opsz48'
import IconInventoryFill1Wght600Grad0Opsz48 from '../components/InventoryFill1Wght600Grad0Opsz48'
import IconInventoryFill1Wght700Grad0Opsz48 from '../components/InventoryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInventory = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInventoryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInventoryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInventoryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInventoryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInventoryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInventoryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInventoryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInventoryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInventoryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInventoryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInventoryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInventoryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInventoryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInventoryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
