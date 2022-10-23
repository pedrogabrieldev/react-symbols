import IconPhotoAlbumFill0Wght100Grad0Opsz48 from '../components/PhotoAlbumFill0Wght100Grad0Opsz48'
import IconPhotoAlbumFill0Wght200Grad0Opsz48 from '../components/PhotoAlbumFill0Wght200Grad0Opsz48'
import IconPhotoAlbumFill0Wght300Grad0Opsz48 from '../components/PhotoAlbumFill0Wght300Grad0Opsz48'
import IconPhotoAlbumFill0Wght400Grad0Opsz48 from '../components/PhotoAlbumFill0Wght400Grad0Opsz48'
import IconPhotoAlbumFill0Wght500Grad0Opsz48 from '../components/PhotoAlbumFill0Wght500Grad0Opsz48'
import IconPhotoAlbumFill0Wght600Grad0Opsz48 from '../components/PhotoAlbumFill0Wght600Grad0Opsz48'
import IconPhotoAlbumFill0Wght700Grad0Opsz48 from '../components/PhotoAlbumFill0Wght700Grad0Opsz48'
import IconPhotoAlbumFill1Wght100Grad0Opsz48 from '../components/PhotoAlbumFill1Wght100Grad0Opsz48'
import IconPhotoAlbumFill1Wght200Grad0Opsz48 from '../components/PhotoAlbumFill1Wght200Grad0Opsz48'
import IconPhotoAlbumFill1Wght300Grad0Opsz48 from '../components/PhotoAlbumFill1Wght300Grad0Opsz48'
import IconPhotoAlbumFill1Wght400Grad0Opsz48 from '../components/PhotoAlbumFill1Wght400Grad0Opsz48'
import IconPhotoAlbumFill1Wght500Grad0Opsz48 from '../components/PhotoAlbumFill1Wght500Grad0Opsz48'
import IconPhotoAlbumFill1Wght600Grad0Opsz48 from '../components/PhotoAlbumFill1Wght600Grad0Opsz48'
import IconPhotoAlbumFill1Wght700Grad0Opsz48 from '../components/PhotoAlbumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoAlbum = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoAlbumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoAlbumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoAlbumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoAlbumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoAlbumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoAlbumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoAlbumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoAlbumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoAlbumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoAlbumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoAlbumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoAlbumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoAlbumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoAlbumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
