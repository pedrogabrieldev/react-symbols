import IconVideoCameraFrontOffFill0Wght100Grad0Opsz48 from '../components/VideoCameraFrontOffFill0Wght100Grad0Opsz48'
import IconVideoCameraFrontOffFill0Wght200Grad0Opsz48 from '../components/VideoCameraFrontOffFill0Wght200Grad0Opsz48'
import IconVideoCameraFrontOffFill0Wght300Grad0Opsz48 from '../components/VideoCameraFrontOffFill0Wght300Grad0Opsz48'
import IconVideoCameraFrontOffFill0Wght400Grad0Opsz48 from '../components/VideoCameraFrontOffFill0Wght400Grad0Opsz48'
import IconVideoCameraFrontOffFill0Wght500Grad0Opsz48 from '../components/VideoCameraFrontOffFill0Wght500Grad0Opsz48'
import IconVideoCameraFrontOffFill0Wght600Grad0Opsz48 from '../components/VideoCameraFrontOffFill0Wght600Grad0Opsz48'
import IconVideoCameraFrontOffFill0Wght700Grad0Opsz48 from '../components/VideoCameraFrontOffFill0Wght700Grad0Opsz48'
import IconVideoCameraFrontOffFill1Wght100Grad0Opsz48 from '../components/VideoCameraFrontOffFill1Wght100Grad0Opsz48'
import IconVideoCameraFrontOffFill1Wght200Grad0Opsz48 from '../components/VideoCameraFrontOffFill1Wght200Grad0Opsz48'
import IconVideoCameraFrontOffFill1Wght300Grad0Opsz48 from '../components/VideoCameraFrontOffFill1Wght300Grad0Opsz48'
import IconVideoCameraFrontOffFill1Wght400Grad0Opsz48 from '../components/VideoCameraFrontOffFill1Wght400Grad0Opsz48'
import IconVideoCameraFrontOffFill1Wght500Grad0Opsz48 from '../components/VideoCameraFrontOffFill1Wght500Grad0Opsz48'
import IconVideoCameraFrontOffFill1Wght600Grad0Opsz48 from '../components/VideoCameraFrontOffFill1Wght600Grad0Opsz48'
import IconVideoCameraFrontOffFill1Wght700Grad0Opsz48 from '../components/VideoCameraFrontOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoCameraFrontOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoCameraFrontOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoCameraFrontOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoCameraFrontOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoCameraFrontOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoCameraFrontOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoCameraFrontOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoCameraFrontOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoCameraFrontOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoCameraFrontOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoCameraFrontOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoCameraFrontOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoCameraFrontOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoCameraFrontOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoCameraFrontOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
