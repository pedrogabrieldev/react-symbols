import IconAddLinkFill0Wght100Grad0Opsz48 from '../components/AddLinkFill0Wght100Grad0Opsz48'
import IconAddLinkFill0Wght200Grad0Opsz48 from '../components/AddLinkFill0Wght200Grad0Opsz48'
import IconAddLinkFill0Wght300Grad0Opsz48 from '../components/AddLinkFill0Wght300Grad0Opsz48'
import IconAddLinkFill0Wght400Grad0Opsz48 from '../components/AddLinkFill0Wght400Grad0Opsz48'
import IconAddLinkFill0Wght500Grad0Opsz48 from '../components/AddLinkFill0Wght500Grad0Opsz48'
import IconAddLinkFill0Wght600Grad0Opsz48 from '../components/AddLinkFill0Wght600Grad0Opsz48'
import IconAddLinkFill0Wght700Grad0Opsz48 from '../components/AddLinkFill0Wght700Grad0Opsz48'
import IconAddLinkFill1Wght100Grad0Opsz48 from '../components/AddLinkFill1Wght100Grad0Opsz48'
import IconAddLinkFill1Wght200Grad0Opsz48 from '../components/AddLinkFill1Wght200Grad0Opsz48'
import IconAddLinkFill1Wght300Grad0Opsz48 from '../components/AddLinkFill1Wght300Grad0Opsz48'
import IconAddLinkFill1Wght400Grad0Opsz48 from '../components/AddLinkFill1Wght400Grad0Opsz48'
import IconAddLinkFill1Wght500Grad0Opsz48 from '../components/AddLinkFill1Wght500Grad0Opsz48'
import IconAddLinkFill1Wght600Grad0Opsz48 from '../components/AddLinkFill1Wght600Grad0Opsz48'
import IconAddLinkFill1Wght700Grad0Opsz48 from '../components/AddLinkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddLink = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddLinkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddLinkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddLinkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddLinkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddLinkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddLinkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddLinkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddLinkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddLinkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddLinkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddLinkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddLinkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddLinkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddLinkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
