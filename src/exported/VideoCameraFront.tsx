import IconVideoCameraFrontFill0Wght100Grad0Opsz48 from '../components/VideoCameraFrontFill0Wght100Grad0Opsz48'
import IconVideoCameraFrontFill0Wght200Grad0Opsz48 from '../components/VideoCameraFrontFill0Wght200Grad0Opsz48'
import IconVideoCameraFrontFill0Wght300Grad0Opsz48 from '../components/VideoCameraFrontFill0Wght300Grad0Opsz48'
import IconVideoCameraFrontFill0Wght400Grad0Opsz48 from '../components/VideoCameraFrontFill0Wght400Grad0Opsz48'
import IconVideoCameraFrontFill0Wght500Grad0Opsz48 from '../components/VideoCameraFrontFill0Wght500Grad0Opsz48'
import IconVideoCameraFrontFill0Wght600Grad0Opsz48 from '../components/VideoCameraFrontFill0Wght600Grad0Opsz48'
import IconVideoCameraFrontFill0Wght700Grad0Opsz48 from '../components/VideoCameraFrontFill0Wght700Grad0Opsz48'
import IconVideoCameraFrontFill1Wght100Grad0Opsz48 from '../components/VideoCameraFrontFill1Wght100Grad0Opsz48'
import IconVideoCameraFrontFill1Wght200Grad0Opsz48 from '../components/VideoCameraFrontFill1Wght200Grad0Opsz48'
import IconVideoCameraFrontFill1Wght300Grad0Opsz48 from '../components/VideoCameraFrontFill1Wght300Grad0Opsz48'
import IconVideoCameraFrontFill1Wght400Grad0Opsz48 from '../components/VideoCameraFrontFill1Wght400Grad0Opsz48'
import IconVideoCameraFrontFill1Wght500Grad0Opsz48 from '../components/VideoCameraFrontFill1Wght500Grad0Opsz48'
import IconVideoCameraFrontFill1Wght600Grad0Opsz48 from '../components/VideoCameraFrontFill1Wght600Grad0Opsz48'
import IconVideoCameraFrontFill1Wght700Grad0Opsz48 from '../components/VideoCameraFrontFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoCameraFront = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoCameraFrontFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoCameraFrontFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoCameraFrontFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoCameraFrontFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoCameraFrontFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoCameraFrontFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoCameraFrontFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoCameraFrontFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoCameraFrontFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoCameraFrontFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoCameraFrontFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoCameraFrontFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoCameraFrontFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoCameraFrontFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
