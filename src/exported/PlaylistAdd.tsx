import IconPlaylistAddFill0Wght100Grad0Opsz48 from '../components/PlaylistAddFill0Wght100Grad0Opsz48'
import IconPlaylistAddFill0Wght200Grad0Opsz48 from '../components/PlaylistAddFill0Wght200Grad0Opsz48'
import IconPlaylistAddFill0Wght300Grad0Opsz48 from '../components/PlaylistAddFill0Wght300Grad0Opsz48'
import IconPlaylistAddFill0Wght400Grad0Opsz48 from '../components/PlaylistAddFill0Wght400Grad0Opsz48'
import IconPlaylistAddFill0Wght500Grad0Opsz48 from '../components/PlaylistAddFill0Wght500Grad0Opsz48'
import IconPlaylistAddFill0Wght600Grad0Opsz48 from '../components/PlaylistAddFill0Wght600Grad0Opsz48'
import IconPlaylistAddFill0Wght700Grad0Opsz48 from '../components/PlaylistAddFill0Wght700Grad0Opsz48'
import IconPlaylistAddFill1Wght100Grad0Opsz48 from '../components/PlaylistAddFill1Wght100Grad0Opsz48'
import IconPlaylistAddFill1Wght200Grad0Opsz48 from '../components/PlaylistAddFill1Wght200Grad0Opsz48'
import IconPlaylistAddFill1Wght300Grad0Opsz48 from '../components/PlaylistAddFill1Wght300Grad0Opsz48'
import IconPlaylistAddFill1Wght400Grad0Opsz48 from '../components/PlaylistAddFill1Wght400Grad0Opsz48'
import IconPlaylistAddFill1Wght500Grad0Opsz48 from '../components/PlaylistAddFill1Wght500Grad0Opsz48'
import IconPlaylistAddFill1Wght600Grad0Opsz48 from '../components/PlaylistAddFill1Wght600Grad0Opsz48'
import IconPlaylistAddFill1Wght700Grad0Opsz48 from '../components/PlaylistAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlaylistAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlaylistAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlaylistAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlaylistAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlaylistAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlaylistAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlaylistAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlaylistAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlaylistAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlaylistAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlaylistAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlaylistAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlaylistAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlaylistAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlaylistAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
