import IconPlaylistAddCheckCircleFill0Wght100Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill0Wght100Grad0Opsz48'
import IconPlaylistAddCheckCircleFill0Wght200Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill0Wght200Grad0Opsz48'
import IconPlaylistAddCheckCircleFill0Wght300Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill0Wght300Grad0Opsz48'
import IconPlaylistAddCheckCircleFill0Wght400Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill0Wght400Grad0Opsz48'
import IconPlaylistAddCheckCircleFill0Wght500Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill0Wght500Grad0Opsz48'
import IconPlaylistAddCheckCircleFill0Wght600Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill0Wght600Grad0Opsz48'
import IconPlaylistAddCheckCircleFill0Wght700Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill0Wght700Grad0Opsz48'
import IconPlaylistAddCheckCircleFill1Wght100Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill1Wght100Grad0Opsz48'
import IconPlaylistAddCheckCircleFill1Wght200Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill1Wght200Grad0Opsz48'
import IconPlaylistAddCheckCircleFill1Wght300Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill1Wght300Grad0Opsz48'
import IconPlaylistAddCheckCircleFill1Wght400Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill1Wght400Grad0Opsz48'
import IconPlaylistAddCheckCircleFill1Wght500Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill1Wght500Grad0Opsz48'
import IconPlaylistAddCheckCircleFill1Wght600Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill1Wght600Grad0Opsz48'
import IconPlaylistAddCheckCircleFill1Wght700Grad0Opsz48 from '../components/PlaylistAddCheckCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlaylistAddCheckCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlaylistAddCheckCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlaylistAddCheckCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlaylistAddCheckCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlaylistAddCheckCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlaylistAddCheckCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlaylistAddCheckCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlaylistAddCheckCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlaylistAddCheckCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlaylistAddCheckCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlaylistAddCheckCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlaylistAddCheckCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlaylistAddCheckCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlaylistAddCheckCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlaylistAddCheckCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
