import IconFullscreenFill0Wght100Grad0Opsz48 from '../components/FullscreenFill0Wght100Grad0Opsz48'
import IconFullscreenFill0Wght200Grad0Opsz48 from '../components/FullscreenFill0Wght200Grad0Opsz48'
import IconFullscreenFill0Wght300Grad0Opsz48 from '../components/FullscreenFill0Wght300Grad0Opsz48'
import IconFullscreenFill0Wght400Grad0Opsz48 from '../components/FullscreenFill0Wght400Grad0Opsz48'
import IconFullscreenFill0Wght500Grad0Opsz48 from '../components/FullscreenFill0Wght500Grad0Opsz48'
import IconFullscreenFill0Wght600Grad0Opsz48 from '../components/FullscreenFill0Wght600Grad0Opsz48'
import IconFullscreenFill0Wght700Grad0Opsz48 from '../components/FullscreenFill0Wght700Grad0Opsz48'
import IconFullscreenFill1Wght100Grad0Opsz48 from '../components/FullscreenFill1Wght100Grad0Opsz48'
import IconFullscreenFill1Wght200Grad0Opsz48 from '../components/FullscreenFill1Wght200Grad0Opsz48'
import IconFullscreenFill1Wght300Grad0Opsz48 from '../components/FullscreenFill1Wght300Grad0Opsz48'
import IconFullscreenFill1Wght400Grad0Opsz48 from '../components/FullscreenFill1Wght400Grad0Opsz48'
import IconFullscreenFill1Wght500Grad0Opsz48 from '../components/FullscreenFill1Wght500Grad0Opsz48'
import IconFullscreenFill1Wght600Grad0Opsz48 from '../components/FullscreenFill1Wght600Grad0Opsz48'
import IconFullscreenFill1Wght700Grad0Opsz48 from '../components/FullscreenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFullscreen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFullscreenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFullscreenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFullscreenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFullscreenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFullscreenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFullscreenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFullscreenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFullscreenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFullscreenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFullscreenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFullscreenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFullscreenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFullscreenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFullscreenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
