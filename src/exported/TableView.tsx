import IconTableViewFill0Wght100Grad0Opsz48 from '../components/TableViewFill0Wght100Grad0Opsz48'
import IconTableViewFill0Wght200Grad0Opsz48 from '../components/TableViewFill0Wght200Grad0Opsz48'
import IconTableViewFill0Wght300Grad0Opsz48 from '../components/TableViewFill0Wght300Grad0Opsz48'
import IconTableViewFill0Wght400Grad0Opsz48 from '../components/TableViewFill0Wght400Grad0Opsz48'
import IconTableViewFill0Wght500Grad0Opsz48 from '../components/TableViewFill0Wght500Grad0Opsz48'
import IconTableViewFill0Wght600Grad0Opsz48 from '../components/TableViewFill0Wght600Grad0Opsz48'
import IconTableViewFill0Wght700Grad0Opsz48 from '../components/TableViewFill0Wght700Grad0Opsz48'
import IconTableViewFill1Wght100Grad0Opsz48 from '../components/TableViewFill1Wght100Grad0Opsz48'
import IconTableViewFill1Wght200Grad0Opsz48 from '../components/TableViewFill1Wght200Grad0Opsz48'
import IconTableViewFill1Wght300Grad0Opsz48 from '../components/TableViewFill1Wght300Grad0Opsz48'
import IconTableViewFill1Wght400Grad0Opsz48 from '../components/TableViewFill1Wght400Grad0Opsz48'
import IconTableViewFill1Wght500Grad0Opsz48 from '../components/TableViewFill1Wght500Grad0Opsz48'
import IconTableViewFill1Wght600Grad0Opsz48 from '../components/TableViewFill1Wght600Grad0Opsz48'
import IconTableViewFill1Wght700Grad0Opsz48 from '../components/TableViewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTableView = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTableViewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTableViewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTableViewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTableViewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTableViewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTableViewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTableViewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTableViewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTableViewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTableViewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTableViewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTableViewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTableViewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTableViewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
