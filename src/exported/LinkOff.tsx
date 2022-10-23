import IconLinkOffFill0Wght100Grad0Opsz48 from '../components/LinkOffFill0Wght100Grad0Opsz48'
import IconLinkOffFill0Wght200Grad0Opsz48 from '../components/LinkOffFill0Wght200Grad0Opsz48'
import IconLinkOffFill0Wght300Grad0Opsz48 from '../components/LinkOffFill0Wght300Grad0Opsz48'
import IconLinkOffFill0Wght400Grad0Opsz48 from '../components/LinkOffFill0Wght400Grad0Opsz48'
import IconLinkOffFill0Wght500Grad0Opsz48 from '../components/LinkOffFill0Wght500Grad0Opsz48'
import IconLinkOffFill0Wght600Grad0Opsz48 from '../components/LinkOffFill0Wght600Grad0Opsz48'
import IconLinkOffFill0Wght700Grad0Opsz48 from '../components/LinkOffFill0Wght700Grad0Opsz48'
import IconLinkOffFill1Wght100Grad0Opsz48 from '../components/LinkOffFill1Wght100Grad0Opsz48'
import IconLinkOffFill1Wght200Grad0Opsz48 from '../components/LinkOffFill1Wght200Grad0Opsz48'
import IconLinkOffFill1Wght300Grad0Opsz48 from '../components/LinkOffFill1Wght300Grad0Opsz48'
import IconLinkOffFill1Wght400Grad0Opsz48 from '../components/LinkOffFill1Wght400Grad0Opsz48'
import IconLinkOffFill1Wght500Grad0Opsz48 from '../components/LinkOffFill1Wght500Grad0Opsz48'
import IconLinkOffFill1Wght600Grad0Opsz48 from '../components/LinkOffFill1Wght600Grad0Opsz48'
import IconLinkOffFill1Wght700Grad0Opsz48 from '../components/LinkOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLinkOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLinkOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLinkOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLinkOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLinkOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLinkOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLinkOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLinkOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLinkOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLinkOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLinkOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLinkOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLinkOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLinkOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLinkOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
