import IconTableRowsFill0Wght100Grad0Opsz48 from '../components/TableRowsFill0Wght100Grad0Opsz48'
import IconTableRowsFill0Wght200Grad0Opsz48 from '../components/TableRowsFill0Wght200Grad0Opsz48'
import IconTableRowsFill0Wght300Grad0Opsz48 from '../components/TableRowsFill0Wght300Grad0Opsz48'
import IconTableRowsFill0Wght400Grad0Opsz48 from '../components/TableRowsFill0Wght400Grad0Opsz48'
import IconTableRowsFill0Wght500Grad0Opsz48 from '../components/TableRowsFill0Wght500Grad0Opsz48'
import IconTableRowsFill0Wght600Grad0Opsz48 from '../components/TableRowsFill0Wght600Grad0Opsz48'
import IconTableRowsFill0Wght700Grad0Opsz48 from '../components/TableRowsFill0Wght700Grad0Opsz48'
import IconTableRowsFill1Wght100Grad0Opsz48 from '../components/TableRowsFill1Wght100Grad0Opsz48'
import IconTableRowsFill1Wght200Grad0Opsz48 from '../components/TableRowsFill1Wght200Grad0Opsz48'
import IconTableRowsFill1Wght300Grad0Opsz48 from '../components/TableRowsFill1Wght300Grad0Opsz48'
import IconTableRowsFill1Wght400Grad0Opsz48 from '../components/TableRowsFill1Wght400Grad0Opsz48'
import IconTableRowsFill1Wght500Grad0Opsz48 from '../components/TableRowsFill1Wght500Grad0Opsz48'
import IconTableRowsFill1Wght600Grad0Opsz48 from '../components/TableRowsFill1Wght600Grad0Opsz48'
import IconTableRowsFill1Wght700Grad0Opsz48 from '../components/TableRowsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTableRows = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTableRowsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTableRowsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTableRowsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTableRowsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTableRowsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTableRowsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTableRowsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTableRowsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTableRowsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTableRowsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTableRowsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTableRowsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTableRowsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTableRowsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
