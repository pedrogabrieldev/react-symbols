import IconPlaylistPlayFill0Wght100Grad0Opsz48 from '../components/PlaylistPlayFill0Wght100Grad0Opsz48'
import IconPlaylistPlayFill0Wght200Grad0Opsz48 from '../components/PlaylistPlayFill0Wght200Grad0Opsz48'
import IconPlaylistPlayFill0Wght300Grad0Opsz48 from '../components/PlaylistPlayFill0Wght300Grad0Opsz48'
import IconPlaylistPlayFill0Wght400Grad0Opsz48 from '../components/PlaylistPlayFill0Wght400Grad0Opsz48'
import IconPlaylistPlayFill0Wght500Grad0Opsz48 from '../components/PlaylistPlayFill0Wght500Grad0Opsz48'
import IconPlaylistPlayFill0Wght600Grad0Opsz48 from '../components/PlaylistPlayFill0Wght600Grad0Opsz48'
import IconPlaylistPlayFill0Wght700Grad0Opsz48 from '../components/PlaylistPlayFill0Wght700Grad0Opsz48'
import IconPlaylistPlayFill1Wght100Grad0Opsz48 from '../components/PlaylistPlayFill1Wght100Grad0Opsz48'
import IconPlaylistPlayFill1Wght200Grad0Opsz48 from '../components/PlaylistPlayFill1Wght200Grad0Opsz48'
import IconPlaylistPlayFill1Wght300Grad0Opsz48 from '../components/PlaylistPlayFill1Wght300Grad0Opsz48'
import IconPlaylistPlayFill1Wght400Grad0Opsz48 from '../components/PlaylistPlayFill1Wght400Grad0Opsz48'
import IconPlaylistPlayFill1Wght500Grad0Opsz48 from '../components/PlaylistPlayFill1Wght500Grad0Opsz48'
import IconPlaylistPlayFill1Wght600Grad0Opsz48 from '../components/PlaylistPlayFill1Wght600Grad0Opsz48'
import IconPlaylistPlayFill1Wght700Grad0Opsz48 from '../components/PlaylistPlayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlaylistPlay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlaylistPlayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlaylistPlayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlaylistPlayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlaylistPlayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlaylistPlayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlaylistPlayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlaylistPlayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlaylistPlayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlaylistPlayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlaylistPlayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlaylistPlayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlaylistPlayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlaylistPlayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlaylistPlayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
