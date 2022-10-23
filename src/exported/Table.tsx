import IconTableFill0Wght100Grad0Opsz48 from '../components/TableFill0Wght100Grad0Opsz48'
import IconTableFill0Wght200Grad0Opsz48 from '../components/TableFill0Wght200Grad0Opsz48'
import IconTableFill0Wght300Grad0Opsz48 from '../components/TableFill0Wght300Grad0Opsz48'
import IconTableFill0Wght400Grad0Opsz48 from '../components/TableFill0Wght400Grad0Opsz48'
import IconTableFill0Wght500Grad0Opsz48 from '../components/TableFill0Wght500Grad0Opsz48'
import IconTableFill0Wght600Grad0Opsz48 from '../components/TableFill0Wght600Grad0Opsz48'
import IconTableFill0Wght700Grad0Opsz48 from '../components/TableFill0Wght700Grad0Opsz48'
import IconTableFill1Wght100Grad0Opsz48 from '../components/TableFill1Wght100Grad0Opsz48'
import IconTableFill1Wght200Grad0Opsz48 from '../components/TableFill1Wght200Grad0Opsz48'
import IconTableFill1Wght300Grad0Opsz48 from '../components/TableFill1Wght300Grad0Opsz48'
import IconTableFill1Wght400Grad0Opsz48 from '../components/TableFill1Wght400Grad0Opsz48'
import IconTableFill1Wght500Grad0Opsz48 from '../components/TableFill1Wght500Grad0Opsz48'
import IconTableFill1Wght600Grad0Opsz48 from '../components/TableFill1Wght600Grad0Opsz48'
import IconTableFill1Wght700Grad0Opsz48 from '../components/TableFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTable = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTableFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTableFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTableFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTableFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTableFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTableFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTableFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTableFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTableFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTableFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTableFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTableFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTableFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTableFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
