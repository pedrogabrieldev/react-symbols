import IconViewColumnFill0Wght100Grad0Opsz48 from '../components/ViewColumnFill0Wght100Grad0Opsz48'
import IconViewColumnFill0Wght200Grad0Opsz48 from '../components/ViewColumnFill0Wght200Grad0Opsz48'
import IconViewColumnFill0Wght300Grad0Opsz48 from '../components/ViewColumnFill0Wght300Grad0Opsz48'
import IconViewColumnFill0Wght400Grad0Opsz48 from '../components/ViewColumnFill0Wght400Grad0Opsz48'
import IconViewColumnFill0Wght500Grad0Opsz48 from '../components/ViewColumnFill0Wght500Grad0Opsz48'
import IconViewColumnFill0Wght600Grad0Opsz48 from '../components/ViewColumnFill0Wght600Grad0Opsz48'
import IconViewColumnFill0Wght700Grad0Opsz48 from '../components/ViewColumnFill0Wght700Grad0Opsz48'
import IconViewColumnFill1Wght100Grad0Opsz48 from '../components/ViewColumnFill1Wght100Grad0Opsz48'
import IconViewColumnFill1Wght200Grad0Opsz48 from '../components/ViewColumnFill1Wght200Grad0Opsz48'
import IconViewColumnFill1Wght300Grad0Opsz48 from '../components/ViewColumnFill1Wght300Grad0Opsz48'
import IconViewColumnFill1Wght400Grad0Opsz48 from '../components/ViewColumnFill1Wght400Grad0Opsz48'
import IconViewColumnFill1Wght500Grad0Opsz48 from '../components/ViewColumnFill1Wght500Grad0Opsz48'
import IconViewColumnFill1Wght600Grad0Opsz48 from '../components/ViewColumnFill1Wght600Grad0Opsz48'
import IconViewColumnFill1Wght700Grad0Opsz48 from '../components/ViewColumnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewColumn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewColumnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewColumnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewColumnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewColumnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewColumnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewColumnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewColumnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewColumnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewColumnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewColumnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewColumnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewColumnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewColumnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewColumnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
