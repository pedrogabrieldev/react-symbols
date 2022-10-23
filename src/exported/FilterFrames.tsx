import IconFilterFramesFill0Wght100Grad0Opsz48 from '../components/FilterFramesFill0Wght100Grad0Opsz48'
import IconFilterFramesFill0Wght200Grad0Opsz48 from '../components/FilterFramesFill0Wght200Grad0Opsz48'
import IconFilterFramesFill0Wght300Grad0Opsz48 from '../components/FilterFramesFill0Wght300Grad0Opsz48'
import IconFilterFramesFill0Wght400Grad0Opsz48 from '../components/FilterFramesFill0Wght400Grad0Opsz48'
import IconFilterFramesFill0Wght500Grad0Opsz48 from '../components/FilterFramesFill0Wght500Grad0Opsz48'
import IconFilterFramesFill0Wght600Grad0Opsz48 from '../components/FilterFramesFill0Wght600Grad0Opsz48'
import IconFilterFramesFill0Wght700Grad0Opsz48 from '../components/FilterFramesFill0Wght700Grad0Opsz48'
import IconFilterFramesFill1Wght100Grad0Opsz48 from '../components/FilterFramesFill1Wght100Grad0Opsz48'
import IconFilterFramesFill1Wght200Grad0Opsz48 from '../components/FilterFramesFill1Wght200Grad0Opsz48'
import IconFilterFramesFill1Wght300Grad0Opsz48 from '../components/FilterFramesFill1Wght300Grad0Opsz48'
import IconFilterFramesFill1Wght400Grad0Opsz48 from '../components/FilterFramesFill1Wght400Grad0Opsz48'
import IconFilterFramesFill1Wght500Grad0Opsz48 from '../components/FilterFramesFill1Wght500Grad0Opsz48'
import IconFilterFramesFill1Wght600Grad0Opsz48 from '../components/FilterFramesFill1Wght600Grad0Opsz48'
import IconFilterFramesFill1Wght700Grad0Opsz48 from '../components/FilterFramesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterFrames = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterFramesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterFramesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterFramesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterFramesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterFramesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterFramesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterFramesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterFramesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterFramesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterFramesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterFramesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterFramesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterFramesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterFramesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
