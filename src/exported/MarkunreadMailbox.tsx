import IconMarkunreadMailboxFill0Wght100Grad0Opsz48 from '../components/MarkunreadMailboxFill0Wght100Grad0Opsz48'
import IconMarkunreadMailboxFill0Wght200Grad0Opsz48 from '../components/MarkunreadMailboxFill0Wght200Grad0Opsz48'
import IconMarkunreadMailboxFill0Wght300Grad0Opsz48 from '../components/MarkunreadMailboxFill0Wght300Grad0Opsz48'
import IconMarkunreadMailboxFill0Wght400Grad0Opsz48 from '../components/MarkunreadMailboxFill0Wght400Grad0Opsz48'
import IconMarkunreadMailboxFill0Wght500Grad0Opsz48 from '../components/MarkunreadMailboxFill0Wght500Grad0Opsz48'
import IconMarkunreadMailboxFill0Wght600Grad0Opsz48 from '../components/MarkunreadMailboxFill0Wght600Grad0Opsz48'
import IconMarkunreadMailboxFill0Wght700Grad0Opsz48 from '../components/MarkunreadMailboxFill0Wght700Grad0Opsz48'
import IconMarkunreadMailboxFill1Wght100Grad0Opsz48 from '../components/MarkunreadMailboxFill1Wght100Grad0Opsz48'
import IconMarkunreadMailboxFill1Wght200Grad0Opsz48 from '../components/MarkunreadMailboxFill1Wght200Grad0Opsz48'
import IconMarkunreadMailboxFill1Wght300Grad0Opsz48 from '../components/MarkunreadMailboxFill1Wght300Grad0Opsz48'
import IconMarkunreadMailboxFill1Wght400Grad0Opsz48 from '../components/MarkunreadMailboxFill1Wght400Grad0Opsz48'
import IconMarkunreadMailboxFill1Wght500Grad0Opsz48 from '../components/MarkunreadMailboxFill1Wght500Grad0Opsz48'
import IconMarkunreadMailboxFill1Wght600Grad0Opsz48 from '../components/MarkunreadMailboxFill1Wght600Grad0Opsz48'
import IconMarkunreadMailboxFill1Wght700Grad0Opsz48 from '../components/MarkunreadMailboxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMarkunreadMailbox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMarkunreadMailboxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMarkunreadMailboxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMarkunreadMailboxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMarkunreadMailboxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMarkunreadMailboxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMarkunreadMailboxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMarkunreadMailboxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMarkunreadMailboxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMarkunreadMailboxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMarkunreadMailboxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMarkunreadMailboxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMarkunreadMailboxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMarkunreadMailboxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMarkunreadMailboxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
