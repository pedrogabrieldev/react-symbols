import IconVideoStableFill0Wght100Grad0Opsz48 from '../components/VideoStableFill0Wght100Grad0Opsz48'
import IconVideoStableFill0Wght200Grad0Opsz48 from '../components/VideoStableFill0Wght200Grad0Opsz48'
import IconVideoStableFill0Wght300Grad0Opsz48 from '../components/VideoStableFill0Wght300Grad0Opsz48'
import IconVideoStableFill0Wght400Grad0Opsz48 from '../components/VideoStableFill0Wght400Grad0Opsz48'
import IconVideoStableFill0Wght500Grad0Opsz48 from '../components/VideoStableFill0Wght500Grad0Opsz48'
import IconVideoStableFill0Wght600Grad0Opsz48 from '../components/VideoStableFill0Wght600Grad0Opsz48'
import IconVideoStableFill0Wght700Grad0Opsz48 from '../components/VideoStableFill0Wght700Grad0Opsz48'
import IconVideoStableFill1Wght100Grad0Opsz48 from '../components/VideoStableFill1Wght100Grad0Opsz48'
import IconVideoStableFill1Wght200Grad0Opsz48 from '../components/VideoStableFill1Wght200Grad0Opsz48'
import IconVideoStableFill1Wght300Grad0Opsz48 from '../components/VideoStableFill1Wght300Grad0Opsz48'
import IconVideoStableFill1Wght400Grad0Opsz48 from '../components/VideoStableFill1Wght400Grad0Opsz48'
import IconVideoStableFill1Wght500Grad0Opsz48 from '../components/VideoStableFill1Wght500Grad0Opsz48'
import IconVideoStableFill1Wght600Grad0Opsz48 from '../components/VideoStableFill1Wght600Grad0Opsz48'
import IconVideoStableFill1Wght700Grad0Opsz48 from '../components/VideoStableFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoStable = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoStableFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoStableFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoStableFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoStableFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoStableFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoStableFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoStableFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoStableFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoStableFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoStableFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoStableFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoStableFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoStableFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoStableFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
