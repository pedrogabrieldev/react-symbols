import IconLinkFill0Wght100Grad0Opsz48 from '../components/LinkFill0Wght100Grad0Opsz48'
import IconLinkFill0Wght200Grad0Opsz48 from '../components/LinkFill0Wght200Grad0Opsz48'
import IconLinkFill0Wght300Grad0Opsz48 from '../components/LinkFill0Wght300Grad0Opsz48'
import IconLinkFill0Wght400Grad0Opsz48 from '../components/LinkFill0Wght400Grad0Opsz48'
import IconLinkFill0Wght500Grad0Opsz48 from '../components/LinkFill0Wght500Grad0Opsz48'
import IconLinkFill0Wght600Grad0Opsz48 from '../components/LinkFill0Wght600Grad0Opsz48'
import IconLinkFill0Wght700Grad0Opsz48 from '../components/LinkFill0Wght700Grad0Opsz48'
import IconLinkFill1Wght100Grad0Opsz48 from '../components/LinkFill1Wght100Grad0Opsz48'
import IconLinkFill1Wght200Grad0Opsz48 from '../components/LinkFill1Wght200Grad0Opsz48'
import IconLinkFill1Wght300Grad0Opsz48 from '../components/LinkFill1Wght300Grad0Opsz48'
import IconLinkFill1Wght400Grad0Opsz48 from '../components/LinkFill1Wght400Grad0Opsz48'
import IconLinkFill1Wght500Grad0Opsz48 from '../components/LinkFill1Wght500Grad0Opsz48'
import IconLinkFill1Wght600Grad0Opsz48 from '../components/LinkFill1Wght600Grad0Opsz48'
import IconLinkFill1Wght700Grad0Opsz48 from '../components/LinkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLink = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLinkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLinkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLinkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLinkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLinkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLinkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLinkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLinkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLinkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLinkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLinkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLinkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLinkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLinkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
