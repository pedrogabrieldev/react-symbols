import IconScreenShareFill0Wght100Grad0Opsz48 from '../components/ScreenShareFill0Wght100Grad0Opsz48'
import IconScreenShareFill0Wght200Grad0Opsz48 from '../components/ScreenShareFill0Wght200Grad0Opsz48'
import IconScreenShareFill0Wght300Grad0Opsz48 from '../components/ScreenShareFill0Wght300Grad0Opsz48'
import IconScreenShareFill0Wght400Grad0Opsz48 from '../components/ScreenShareFill0Wght400Grad0Opsz48'
import IconScreenShareFill0Wght500Grad0Opsz48 from '../components/ScreenShareFill0Wght500Grad0Opsz48'
import IconScreenShareFill0Wght600Grad0Opsz48 from '../components/ScreenShareFill0Wght600Grad0Opsz48'
import IconScreenShareFill0Wght700Grad0Opsz48 from '../components/ScreenShareFill0Wght700Grad0Opsz48'
import IconScreenShareFill1Wght100Grad0Opsz48 from '../components/ScreenShareFill1Wght100Grad0Opsz48'
import IconScreenShareFill1Wght200Grad0Opsz48 from '../components/ScreenShareFill1Wght200Grad0Opsz48'
import IconScreenShareFill1Wght300Grad0Opsz48 from '../components/ScreenShareFill1Wght300Grad0Opsz48'
import IconScreenShareFill1Wght400Grad0Opsz48 from '../components/ScreenShareFill1Wght400Grad0Opsz48'
import IconScreenShareFill1Wght500Grad0Opsz48 from '../components/ScreenShareFill1Wght500Grad0Opsz48'
import IconScreenShareFill1Wght600Grad0Opsz48 from '../components/ScreenShareFill1Wght600Grad0Opsz48'
import IconScreenShareFill1Wght700Grad0Opsz48 from '../components/ScreenShareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenShare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenShareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenShareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenShareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenShareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenShareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenShareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenShareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenShareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenShareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenShareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenShareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenShareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenShareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenShareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
