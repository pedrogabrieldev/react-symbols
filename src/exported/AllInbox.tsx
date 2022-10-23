import IconAllInboxFill0Wght100Grad0Opsz48 from '../components/AllInboxFill0Wght100Grad0Opsz48'
import IconAllInboxFill0Wght200Grad0Opsz48 from '../components/AllInboxFill0Wght200Grad0Opsz48'
import IconAllInboxFill0Wght300Grad0Opsz48 from '../components/AllInboxFill0Wght300Grad0Opsz48'
import IconAllInboxFill0Wght400Grad0Opsz48 from '../components/AllInboxFill0Wght400Grad0Opsz48'
import IconAllInboxFill0Wght500Grad0Opsz48 from '../components/AllInboxFill0Wght500Grad0Opsz48'
import IconAllInboxFill0Wght600Grad0Opsz48 from '../components/AllInboxFill0Wght600Grad0Opsz48'
import IconAllInboxFill0Wght700Grad0Opsz48 from '../components/AllInboxFill0Wght700Grad0Opsz48'
import IconAllInboxFill1Wght100Grad0Opsz48 from '../components/AllInboxFill1Wght100Grad0Opsz48'
import IconAllInboxFill1Wght200Grad0Opsz48 from '../components/AllInboxFill1Wght200Grad0Opsz48'
import IconAllInboxFill1Wght300Grad0Opsz48 from '../components/AllInboxFill1Wght300Grad0Opsz48'
import IconAllInboxFill1Wght400Grad0Opsz48 from '../components/AllInboxFill1Wght400Grad0Opsz48'
import IconAllInboxFill1Wght500Grad0Opsz48 from '../components/AllInboxFill1Wght500Grad0Opsz48'
import IconAllInboxFill1Wght600Grad0Opsz48 from '../components/AllInboxFill1Wght600Grad0Opsz48'
import IconAllInboxFill1Wght700Grad0Opsz48 from '../components/AllInboxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAllInbox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAllInboxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAllInboxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAllInboxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAllInboxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAllInboxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAllInboxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAllInboxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAllInboxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAllInboxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAllInboxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAllInboxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAllInboxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAllInboxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAllInboxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
