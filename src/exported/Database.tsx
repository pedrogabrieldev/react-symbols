import IconDatabaseFill0Wght100Grad0Opsz48 from '../components/DatabaseFill0Wght100Grad0Opsz48'
import IconDatabaseFill0Wght200Grad0Opsz48 from '../components/DatabaseFill0Wght200Grad0Opsz48'
import IconDatabaseFill0Wght300Grad0Opsz48 from '../components/DatabaseFill0Wght300Grad0Opsz48'
import IconDatabaseFill0Wght400Grad0Opsz48 from '../components/DatabaseFill0Wght400Grad0Opsz48'
import IconDatabaseFill0Wght500Grad0Opsz48 from '../components/DatabaseFill0Wght500Grad0Opsz48'
import IconDatabaseFill0Wght600Grad0Opsz48 from '../components/DatabaseFill0Wght600Grad0Opsz48'
import IconDatabaseFill0Wght700Grad0Opsz48 from '../components/DatabaseFill0Wght700Grad0Opsz48'
import IconDatabaseFill1Wght100Grad0Opsz48 from '../components/DatabaseFill1Wght100Grad0Opsz48'
import IconDatabaseFill1Wght200Grad0Opsz48 from '../components/DatabaseFill1Wght200Grad0Opsz48'
import IconDatabaseFill1Wght300Grad0Opsz48 from '../components/DatabaseFill1Wght300Grad0Opsz48'
import IconDatabaseFill1Wght400Grad0Opsz48 from '../components/DatabaseFill1Wght400Grad0Opsz48'
import IconDatabaseFill1Wght500Grad0Opsz48 from '../components/DatabaseFill1Wght500Grad0Opsz48'
import IconDatabaseFill1Wght600Grad0Opsz48 from '../components/DatabaseFill1Wght600Grad0Opsz48'
import IconDatabaseFill1Wght700Grad0Opsz48 from '../components/DatabaseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDatabase = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDatabaseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDatabaseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDatabaseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDatabaseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDatabaseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDatabaseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDatabaseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDatabaseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDatabaseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDatabaseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDatabaseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDatabaseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDatabaseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDatabaseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
