import IconPlaylistAddCheckFill0Wght100Grad0Opsz48 from '../components/PlaylistAddCheckFill0Wght100Grad0Opsz48'
import IconPlaylistAddCheckFill0Wght200Grad0Opsz48 from '../components/PlaylistAddCheckFill0Wght200Grad0Opsz48'
import IconPlaylistAddCheckFill0Wght300Grad0Opsz48 from '../components/PlaylistAddCheckFill0Wght300Grad0Opsz48'
import IconPlaylistAddCheckFill0Wght400Grad0Opsz48 from '../components/PlaylistAddCheckFill0Wght400Grad0Opsz48'
import IconPlaylistAddCheckFill0Wght500Grad0Opsz48 from '../components/PlaylistAddCheckFill0Wght500Grad0Opsz48'
import IconPlaylistAddCheckFill0Wght600Grad0Opsz48 from '../components/PlaylistAddCheckFill0Wght600Grad0Opsz48'
import IconPlaylistAddCheckFill0Wght700Grad0Opsz48 from '../components/PlaylistAddCheckFill0Wght700Grad0Opsz48'
import IconPlaylistAddCheckFill1Wght100Grad0Opsz48 from '../components/PlaylistAddCheckFill1Wght100Grad0Opsz48'
import IconPlaylistAddCheckFill1Wght200Grad0Opsz48 from '../components/PlaylistAddCheckFill1Wght200Grad0Opsz48'
import IconPlaylistAddCheckFill1Wght300Grad0Opsz48 from '../components/PlaylistAddCheckFill1Wght300Grad0Opsz48'
import IconPlaylistAddCheckFill1Wght400Grad0Opsz48 from '../components/PlaylistAddCheckFill1Wght400Grad0Opsz48'
import IconPlaylistAddCheckFill1Wght500Grad0Opsz48 from '../components/PlaylistAddCheckFill1Wght500Grad0Opsz48'
import IconPlaylistAddCheckFill1Wght600Grad0Opsz48 from '../components/PlaylistAddCheckFill1Wght600Grad0Opsz48'
import IconPlaylistAddCheckFill1Wght700Grad0Opsz48 from '../components/PlaylistAddCheckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlaylistAddCheck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlaylistAddCheckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlaylistAddCheckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlaylistAddCheckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlaylistAddCheckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlaylistAddCheckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlaylistAddCheckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlaylistAddCheckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlaylistAddCheckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlaylistAddCheckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlaylistAddCheckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlaylistAddCheckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlaylistAddCheckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlaylistAddCheckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlaylistAddCheckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
