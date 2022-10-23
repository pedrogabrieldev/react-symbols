import IconPlayCircleFill0Wght100Grad0Opsz48 from '../components/PlayCircleFill0Wght100Grad0Opsz48'
import IconPlayCircleFill0Wght200Grad0Opsz48 from '../components/PlayCircleFill0Wght200Grad0Opsz48'
import IconPlayCircleFill0Wght300Grad0Opsz48 from '../components/PlayCircleFill0Wght300Grad0Opsz48'
import IconPlayCircleFill0Wght400Grad0Opsz48 from '../components/PlayCircleFill0Wght400Grad0Opsz48'
import IconPlayCircleFill0Wght500Grad0Opsz48 from '../components/PlayCircleFill0Wght500Grad0Opsz48'
import IconPlayCircleFill0Wght600Grad0Opsz48 from '../components/PlayCircleFill0Wght600Grad0Opsz48'
import IconPlayCircleFill0Wght700Grad0Opsz48 from '../components/PlayCircleFill0Wght700Grad0Opsz48'
import IconPlayCircleFill1Wght100Grad0Opsz48 from '../components/PlayCircleFill1Wght100Grad0Opsz48'
import IconPlayCircleFill1Wght200Grad0Opsz48 from '../components/PlayCircleFill1Wght200Grad0Opsz48'
import IconPlayCircleFill1Wght300Grad0Opsz48 from '../components/PlayCircleFill1Wght300Grad0Opsz48'
import IconPlayCircleFill1Wght400Grad0Opsz48 from '../components/PlayCircleFill1Wght400Grad0Opsz48'
import IconPlayCircleFill1Wght500Grad0Opsz48 from '../components/PlayCircleFill1Wght500Grad0Opsz48'
import IconPlayCircleFill1Wght600Grad0Opsz48 from '../components/PlayCircleFill1Wght600Grad0Opsz48'
import IconPlayCircleFill1Wght700Grad0Opsz48 from '../components/PlayCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlayCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlayCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlayCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlayCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlayCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlayCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlayCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlayCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlayCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlayCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlayCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlayCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlayCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlayCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlayCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
