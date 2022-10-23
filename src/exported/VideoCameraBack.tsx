import IconVideoCameraBackFill0Wght100Grad0Opsz48 from '../components/VideoCameraBackFill0Wght100Grad0Opsz48'
import IconVideoCameraBackFill0Wght200Grad0Opsz48 from '../components/VideoCameraBackFill0Wght200Grad0Opsz48'
import IconVideoCameraBackFill0Wght300Grad0Opsz48 from '../components/VideoCameraBackFill0Wght300Grad0Opsz48'
import IconVideoCameraBackFill0Wght400Grad0Opsz48 from '../components/VideoCameraBackFill0Wght400Grad0Opsz48'
import IconVideoCameraBackFill0Wght500Grad0Opsz48 from '../components/VideoCameraBackFill0Wght500Grad0Opsz48'
import IconVideoCameraBackFill0Wght600Grad0Opsz48 from '../components/VideoCameraBackFill0Wght600Grad0Opsz48'
import IconVideoCameraBackFill0Wght700Grad0Opsz48 from '../components/VideoCameraBackFill0Wght700Grad0Opsz48'
import IconVideoCameraBackFill1Wght100Grad0Opsz48 from '../components/VideoCameraBackFill1Wght100Grad0Opsz48'
import IconVideoCameraBackFill1Wght200Grad0Opsz48 from '../components/VideoCameraBackFill1Wght200Grad0Opsz48'
import IconVideoCameraBackFill1Wght300Grad0Opsz48 from '../components/VideoCameraBackFill1Wght300Grad0Opsz48'
import IconVideoCameraBackFill1Wght400Grad0Opsz48 from '../components/VideoCameraBackFill1Wght400Grad0Opsz48'
import IconVideoCameraBackFill1Wght500Grad0Opsz48 from '../components/VideoCameraBackFill1Wght500Grad0Opsz48'
import IconVideoCameraBackFill1Wght600Grad0Opsz48 from '../components/VideoCameraBackFill1Wght600Grad0Opsz48'
import IconVideoCameraBackFill1Wght700Grad0Opsz48 from '../components/VideoCameraBackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoCameraBack = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoCameraBackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoCameraBackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoCameraBackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoCameraBackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoCameraBackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoCameraBackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoCameraBackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoCameraBackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoCameraBackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoCameraBackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoCameraBackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoCameraBackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoCameraBackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoCameraBackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
