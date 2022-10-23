import IconSipFill0Wght100Grad0Opsz48 from '../components/SipFill0Wght100Grad0Opsz48'
import IconSipFill0Wght200Grad0Opsz48 from '../components/SipFill0Wght200Grad0Opsz48'
import IconSipFill0Wght300Grad0Opsz48 from '../components/SipFill0Wght300Grad0Opsz48'
import IconSipFill0Wght400Grad0Opsz48 from '../components/SipFill0Wght400Grad0Opsz48'
import IconSipFill0Wght500Grad0Opsz48 from '../components/SipFill0Wght500Grad0Opsz48'
import IconSipFill0Wght600Grad0Opsz48 from '../components/SipFill0Wght600Grad0Opsz48'
import IconSipFill0Wght700Grad0Opsz48 from '../components/SipFill0Wght700Grad0Opsz48'
import IconSipFill1Wght100Grad0Opsz48 from '../components/SipFill1Wght100Grad0Opsz48'
import IconSipFill1Wght200Grad0Opsz48 from '../components/SipFill1Wght200Grad0Opsz48'
import IconSipFill1Wght300Grad0Opsz48 from '../components/SipFill1Wght300Grad0Opsz48'
import IconSipFill1Wght400Grad0Opsz48 from '../components/SipFill1Wght400Grad0Opsz48'
import IconSipFill1Wght500Grad0Opsz48 from '../components/SipFill1Wght500Grad0Opsz48'
import IconSipFill1Wght600Grad0Opsz48 from '../components/SipFill1Wght600Grad0Opsz48'
import IconSipFill1Wght700Grad0Opsz48 from '../components/SipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
