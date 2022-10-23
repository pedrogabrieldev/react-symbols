import IconPlaylistAddCircleFill0Wght100Grad0Opsz48 from '../components/PlaylistAddCircleFill0Wght100Grad0Opsz48'
import IconPlaylistAddCircleFill0Wght200Grad0Opsz48 from '../components/PlaylistAddCircleFill0Wght200Grad0Opsz48'
import IconPlaylistAddCircleFill0Wght300Grad0Opsz48 from '../components/PlaylistAddCircleFill0Wght300Grad0Opsz48'
import IconPlaylistAddCircleFill0Wght400Grad0Opsz48 from '../components/PlaylistAddCircleFill0Wght400Grad0Opsz48'
import IconPlaylistAddCircleFill0Wght500Grad0Opsz48 from '../components/PlaylistAddCircleFill0Wght500Grad0Opsz48'
import IconPlaylistAddCircleFill0Wght600Grad0Opsz48 from '../components/PlaylistAddCircleFill0Wght600Grad0Opsz48'
import IconPlaylistAddCircleFill0Wght700Grad0Opsz48 from '../components/PlaylistAddCircleFill0Wght700Grad0Opsz48'
import IconPlaylistAddCircleFill1Wght100Grad0Opsz48 from '../components/PlaylistAddCircleFill1Wght100Grad0Opsz48'
import IconPlaylistAddCircleFill1Wght200Grad0Opsz48 from '../components/PlaylistAddCircleFill1Wght200Grad0Opsz48'
import IconPlaylistAddCircleFill1Wght300Grad0Opsz48 from '../components/PlaylistAddCircleFill1Wght300Grad0Opsz48'
import IconPlaylistAddCircleFill1Wght400Grad0Opsz48 from '../components/PlaylistAddCircleFill1Wght400Grad0Opsz48'
import IconPlaylistAddCircleFill1Wght500Grad0Opsz48 from '../components/PlaylistAddCircleFill1Wght500Grad0Opsz48'
import IconPlaylistAddCircleFill1Wght600Grad0Opsz48 from '../components/PlaylistAddCircleFill1Wght600Grad0Opsz48'
import IconPlaylistAddCircleFill1Wght700Grad0Opsz48 from '../components/PlaylistAddCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlaylistAddCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlaylistAddCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlaylistAddCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlaylistAddCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlaylistAddCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlaylistAddCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlaylistAddCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlaylistAddCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlaylistAddCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlaylistAddCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlaylistAddCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlaylistAddCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlaylistAddCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlaylistAddCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlaylistAddCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
