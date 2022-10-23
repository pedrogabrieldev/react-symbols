import IconMediaLinkFill0Wght100Grad0Opsz48 from '../components/MediaLinkFill0Wght100Grad0Opsz48'
import IconMediaLinkFill0Wght200Grad0Opsz48 from '../components/MediaLinkFill0Wght200Grad0Opsz48'
import IconMediaLinkFill0Wght300Grad0Opsz48 from '../components/MediaLinkFill0Wght300Grad0Opsz48'
import IconMediaLinkFill0Wght400Grad0Opsz48 from '../components/MediaLinkFill0Wght400Grad0Opsz48'
import IconMediaLinkFill0Wght500Grad0Opsz48 from '../components/MediaLinkFill0Wght500Grad0Opsz48'
import IconMediaLinkFill0Wght600Grad0Opsz48 from '../components/MediaLinkFill0Wght600Grad0Opsz48'
import IconMediaLinkFill0Wght700Grad0Opsz48 from '../components/MediaLinkFill0Wght700Grad0Opsz48'
import IconMediaLinkFill1Wght100Grad0Opsz48 from '../components/MediaLinkFill1Wght100Grad0Opsz48'
import IconMediaLinkFill1Wght200Grad0Opsz48 from '../components/MediaLinkFill1Wght200Grad0Opsz48'
import IconMediaLinkFill1Wght300Grad0Opsz48 from '../components/MediaLinkFill1Wght300Grad0Opsz48'
import IconMediaLinkFill1Wght400Grad0Opsz48 from '../components/MediaLinkFill1Wght400Grad0Opsz48'
import IconMediaLinkFill1Wght500Grad0Opsz48 from '../components/MediaLinkFill1Wght500Grad0Opsz48'
import IconMediaLinkFill1Wght600Grad0Opsz48 from '../components/MediaLinkFill1Wght600Grad0Opsz48'
import IconMediaLinkFill1Wght700Grad0Opsz48 from '../components/MediaLinkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMediaLink = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMediaLinkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMediaLinkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMediaLinkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMediaLinkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMediaLinkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMediaLinkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMediaLinkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMediaLinkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMediaLinkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMediaLinkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMediaLinkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMediaLinkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMediaLinkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMediaLinkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
