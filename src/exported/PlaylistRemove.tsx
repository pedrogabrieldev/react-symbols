import IconPlaylistRemoveFill0Wght100Grad0Opsz48 from '../components/PlaylistRemoveFill0Wght100Grad0Opsz48'
import IconPlaylistRemoveFill0Wght200Grad0Opsz48 from '../components/PlaylistRemoveFill0Wght200Grad0Opsz48'
import IconPlaylistRemoveFill0Wght300Grad0Opsz48 from '../components/PlaylistRemoveFill0Wght300Grad0Opsz48'
import IconPlaylistRemoveFill0Wght400Grad0Opsz48 from '../components/PlaylistRemoveFill0Wght400Grad0Opsz48'
import IconPlaylistRemoveFill0Wght500Grad0Opsz48 from '../components/PlaylistRemoveFill0Wght500Grad0Opsz48'
import IconPlaylistRemoveFill0Wght600Grad0Opsz48 from '../components/PlaylistRemoveFill0Wght600Grad0Opsz48'
import IconPlaylistRemoveFill0Wght700Grad0Opsz48 from '../components/PlaylistRemoveFill0Wght700Grad0Opsz48'
import IconPlaylistRemoveFill1Wght100Grad0Opsz48 from '../components/PlaylistRemoveFill1Wght100Grad0Opsz48'
import IconPlaylistRemoveFill1Wght200Grad0Opsz48 from '../components/PlaylistRemoveFill1Wght200Grad0Opsz48'
import IconPlaylistRemoveFill1Wght300Grad0Opsz48 from '../components/PlaylistRemoveFill1Wght300Grad0Opsz48'
import IconPlaylistRemoveFill1Wght400Grad0Opsz48 from '../components/PlaylistRemoveFill1Wght400Grad0Opsz48'
import IconPlaylistRemoveFill1Wght500Grad0Opsz48 from '../components/PlaylistRemoveFill1Wght500Grad0Opsz48'
import IconPlaylistRemoveFill1Wght600Grad0Opsz48 from '../components/PlaylistRemoveFill1Wght600Grad0Opsz48'
import IconPlaylistRemoveFill1Wght700Grad0Opsz48 from '../components/PlaylistRemoveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlaylistRemove = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlaylistRemoveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlaylistRemoveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlaylistRemoveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlaylistRemoveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlaylistRemoveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlaylistRemoveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlaylistRemoveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlaylistRemoveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlaylistRemoveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlaylistRemoveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlaylistRemoveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlaylistRemoveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlaylistRemoveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlaylistRemoveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
