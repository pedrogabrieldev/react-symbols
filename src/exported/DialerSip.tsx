import IconDialerSipFill0Wght100Grad0Opsz48 from '../components/DialerSipFill0Wght100Grad0Opsz48'
import IconDialerSipFill0Wght200Grad0Opsz48 from '../components/DialerSipFill0Wght200Grad0Opsz48'
import IconDialerSipFill0Wght300Grad0Opsz48 from '../components/DialerSipFill0Wght300Grad0Opsz48'
import IconDialerSipFill0Wght400Grad0Opsz48 from '../components/DialerSipFill0Wght400Grad0Opsz48'
import IconDialerSipFill0Wght500Grad0Opsz48 from '../components/DialerSipFill0Wght500Grad0Opsz48'
import IconDialerSipFill0Wght600Grad0Opsz48 from '../components/DialerSipFill0Wght600Grad0Opsz48'
import IconDialerSipFill0Wght700Grad0Opsz48 from '../components/DialerSipFill0Wght700Grad0Opsz48'
import IconDialerSipFill1Wght100Grad0Opsz48 from '../components/DialerSipFill1Wght100Grad0Opsz48'
import IconDialerSipFill1Wght200Grad0Opsz48 from '../components/DialerSipFill1Wght200Grad0Opsz48'
import IconDialerSipFill1Wght300Grad0Opsz48 from '../components/DialerSipFill1Wght300Grad0Opsz48'
import IconDialerSipFill1Wght400Grad0Opsz48 from '../components/DialerSipFill1Wght400Grad0Opsz48'
import IconDialerSipFill1Wght500Grad0Opsz48 from '../components/DialerSipFill1Wght500Grad0Opsz48'
import IconDialerSipFill1Wght600Grad0Opsz48 from '../components/DialerSipFill1Wght600Grad0Opsz48'
import IconDialerSipFill1Wght700Grad0Opsz48 from '../components/DialerSipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDialerSip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDialerSipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDialerSipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDialerSipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDialerSipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDialerSipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDialerSipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDialerSipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDialerSipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDialerSipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDialerSipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDialerSipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDialerSipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDialerSipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDialerSipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
