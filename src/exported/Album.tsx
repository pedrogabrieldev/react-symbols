import IconAlbumFill0Wght100Grad0Opsz48 from '../components/AlbumFill0Wght100Grad0Opsz48'
import IconAlbumFill0Wght200Grad0Opsz48 from '../components/AlbumFill0Wght200Grad0Opsz48'
import IconAlbumFill0Wght300Grad0Opsz48 from '../components/AlbumFill0Wght300Grad0Opsz48'
import IconAlbumFill0Wght400Grad0Opsz48 from '../components/AlbumFill0Wght400Grad0Opsz48'
import IconAlbumFill0Wght500Grad0Opsz48 from '../components/AlbumFill0Wght500Grad0Opsz48'
import IconAlbumFill0Wght600Grad0Opsz48 from '../components/AlbumFill0Wght600Grad0Opsz48'
import IconAlbumFill0Wght700Grad0Opsz48 from '../components/AlbumFill0Wght700Grad0Opsz48'
import IconAlbumFill1Wght100Grad0Opsz48 from '../components/AlbumFill1Wght100Grad0Opsz48'
import IconAlbumFill1Wght200Grad0Opsz48 from '../components/AlbumFill1Wght200Grad0Opsz48'
import IconAlbumFill1Wght300Grad0Opsz48 from '../components/AlbumFill1Wght300Grad0Opsz48'
import IconAlbumFill1Wght400Grad0Opsz48 from '../components/AlbumFill1Wght400Grad0Opsz48'
import IconAlbumFill1Wght500Grad0Opsz48 from '../components/AlbumFill1Wght500Grad0Opsz48'
import IconAlbumFill1Wght600Grad0Opsz48 from '../components/AlbumFill1Wght600Grad0Opsz48'
import IconAlbumFill1Wght700Grad0Opsz48 from '../components/AlbumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlbum = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlbumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlbumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlbumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlbumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlbumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlbumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlbumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlbumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlbumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlbumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlbumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlbumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlbumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlbumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
