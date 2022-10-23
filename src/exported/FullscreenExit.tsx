import IconFullscreenExitFill0Wght100Grad0Opsz48 from '../components/FullscreenExitFill0Wght100Grad0Opsz48'
import IconFullscreenExitFill0Wght200Grad0Opsz48 from '../components/FullscreenExitFill0Wght200Grad0Opsz48'
import IconFullscreenExitFill0Wght300Grad0Opsz48 from '../components/FullscreenExitFill0Wght300Grad0Opsz48'
import IconFullscreenExitFill0Wght400Grad0Opsz48 from '../components/FullscreenExitFill0Wght400Grad0Opsz48'
import IconFullscreenExitFill0Wght500Grad0Opsz48 from '../components/FullscreenExitFill0Wght500Grad0Opsz48'
import IconFullscreenExitFill0Wght600Grad0Opsz48 from '../components/FullscreenExitFill0Wght600Grad0Opsz48'
import IconFullscreenExitFill0Wght700Grad0Opsz48 from '../components/FullscreenExitFill0Wght700Grad0Opsz48'
import IconFullscreenExitFill1Wght100Grad0Opsz48 from '../components/FullscreenExitFill1Wght100Grad0Opsz48'
import IconFullscreenExitFill1Wght200Grad0Opsz48 from '../components/FullscreenExitFill1Wght200Grad0Opsz48'
import IconFullscreenExitFill1Wght300Grad0Opsz48 from '../components/FullscreenExitFill1Wght300Grad0Opsz48'
import IconFullscreenExitFill1Wght400Grad0Opsz48 from '../components/FullscreenExitFill1Wght400Grad0Opsz48'
import IconFullscreenExitFill1Wght500Grad0Opsz48 from '../components/FullscreenExitFill1Wght500Grad0Opsz48'
import IconFullscreenExitFill1Wght600Grad0Opsz48 from '../components/FullscreenExitFill1Wght600Grad0Opsz48'
import IconFullscreenExitFill1Wght700Grad0Opsz48 from '../components/FullscreenExitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFullscreenExit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFullscreenExitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFullscreenExitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFullscreenExitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFullscreenExitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFullscreenExitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFullscreenExitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFullscreenExitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFullscreenExitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFullscreenExitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFullscreenExitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFullscreenExitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFullscreenExitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFullscreenExitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFullscreenExitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
