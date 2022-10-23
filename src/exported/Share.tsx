import IconShareFill0Wght100Grad0Opsz48 from '../components/ShareFill0Wght100Grad0Opsz48'
import IconShareFill0Wght200Grad0Opsz48 from '../components/ShareFill0Wght200Grad0Opsz48'
import IconShareFill0Wght300Grad0Opsz48 from '../components/ShareFill0Wght300Grad0Opsz48'
import IconShareFill0Wght400Grad0Opsz48 from '../components/ShareFill0Wght400Grad0Opsz48'
import IconShareFill0Wght500Grad0Opsz48 from '../components/ShareFill0Wght500Grad0Opsz48'
import IconShareFill0Wght600Grad0Opsz48 from '../components/ShareFill0Wght600Grad0Opsz48'
import IconShareFill0Wght700Grad0Opsz48 from '../components/ShareFill0Wght700Grad0Opsz48'
import IconShareFill1Wght100Grad0Opsz48 from '../components/ShareFill1Wght100Grad0Opsz48'
import IconShareFill1Wght200Grad0Opsz48 from '../components/ShareFill1Wght200Grad0Opsz48'
import IconShareFill1Wght300Grad0Opsz48 from '../components/ShareFill1Wght300Grad0Opsz48'
import IconShareFill1Wght400Grad0Opsz48 from '../components/ShareFill1Wght400Grad0Opsz48'
import IconShareFill1Wght500Grad0Opsz48 from '../components/ShareFill1Wght500Grad0Opsz48'
import IconShareFill1Wght600Grad0Opsz48 from '../components/ShareFill1Wght600Grad0Opsz48'
import IconShareFill1Wght700Grad0Opsz48 from '../components/ShareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
