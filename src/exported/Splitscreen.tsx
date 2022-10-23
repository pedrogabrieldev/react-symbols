import IconSplitscreenFill0Wght100Grad0Opsz48 from '../components/SplitscreenFill0Wght100Grad0Opsz48'
import IconSplitscreenFill0Wght200Grad0Opsz48 from '../components/SplitscreenFill0Wght200Grad0Opsz48'
import IconSplitscreenFill0Wght300Grad0Opsz48 from '../components/SplitscreenFill0Wght300Grad0Opsz48'
import IconSplitscreenFill0Wght400Grad0Opsz48 from '../components/SplitscreenFill0Wght400Grad0Opsz48'
import IconSplitscreenFill0Wght500Grad0Opsz48 from '../components/SplitscreenFill0Wght500Grad0Opsz48'
import IconSplitscreenFill0Wght600Grad0Opsz48 from '../components/SplitscreenFill0Wght600Grad0Opsz48'
import IconSplitscreenFill0Wght700Grad0Opsz48 from '../components/SplitscreenFill0Wght700Grad0Opsz48'
import IconSplitscreenFill1Wght100Grad0Opsz48 from '../components/SplitscreenFill1Wght100Grad0Opsz48'
import IconSplitscreenFill1Wght200Grad0Opsz48 from '../components/SplitscreenFill1Wght200Grad0Opsz48'
import IconSplitscreenFill1Wght300Grad0Opsz48 from '../components/SplitscreenFill1Wght300Grad0Opsz48'
import IconSplitscreenFill1Wght400Grad0Opsz48 from '../components/SplitscreenFill1Wght400Grad0Opsz48'
import IconSplitscreenFill1Wght500Grad0Opsz48 from '../components/SplitscreenFill1Wght500Grad0Opsz48'
import IconSplitscreenFill1Wght600Grad0Opsz48 from '../components/SplitscreenFill1Wght600Grad0Opsz48'
import IconSplitscreenFill1Wght700Grad0Opsz48 from '../components/SplitscreenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSplitscreen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSplitscreenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSplitscreenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSplitscreenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSplitscreenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSplitscreenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSplitscreenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSplitscreenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSplitscreenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSplitscreenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSplitscreenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSplitscreenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSplitscreenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSplitscreenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSplitscreenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
