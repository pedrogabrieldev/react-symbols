import IconCloseFullscreenFill0Wght100Grad0Opsz48 from '../components/CloseFullscreenFill0Wght100Grad0Opsz48'
import IconCloseFullscreenFill0Wght200Grad0Opsz48 from '../components/CloseFullscreenFill0Wght200Grad0Opsz48'
import IconCloseFullscreenFill0Wght300Grad0Opsz48 from '../components/CloseFullscreenFill0Wght300Grad0Opsz48'
import IconCloseFullscreenFill0Wght400Grad0Opsz48 from '../components/CloseFullscreenFill0Wght400Grad0Opsz48'
import IconCloseFullscreenFill0Wght500Grad0Opsz48 from '../components/CloseFullscreenFill0Wght500Grad0Opsz48'
import IconCloseFullscreenFill0Wght600Grad0Opsz48 from '../components/CloseFullscreenFill0Wght600Grad0Opsz48'
import IconCloseFullscreenFill0Wght700Grad0Opsz48 from '../components/CloseFullscreenFill0Wght700Grad0Opsz48'
import IconCloseFullscreenFill1Wght100Grad0Opsz48 from '../components/CloseFullscreenFill1Wght100Grad0Opsz48'
import IconCloseFullscreenFill1Wght200Grad0Opsz48 from '../components/CloseFullscreenFill1Wght200Grad0Opsz48'
import IconCloseFullscreenFill1Wght300Grad0Opsz48 from '../components/CloseFullscreenFill1Wght300Grad0Opsz48'
import IconCloseFullscreenFill1Wght400Grad0Opsz48 from '../components/CloseFullscreenFill1Wght400Grad0Opsz48'
import IconCloseFullscreenFill1Wght500Grad0Opsz48 from '../components/CloseFullscreenFill1Wght500Grad0Opsz48'
import IconCloseFullscreenFill1Wght600Grad0Opsz48 from '../components/CloseFullscreenFill1Wght600Grad0Opsz48'
import IconCloseFullscreenFill1Wght700Grad0Opsz48 from '../components/CloseFullscreenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloseFullscreen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloseFullscreenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloseFullscreenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloseFullscreenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloseFullscreenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloseFullscreenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloseFullscreenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloseFullscreenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloseFullscreenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloseFullscreenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloseFullscreenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloseFullscreenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloseFullscreenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloseFullscreenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloseFullscreenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
