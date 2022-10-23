import IconWallpaperFill0Wght100Grad0Opsz48 from '../components/WallpaperFill0Wght100Grad0Opsz48'
import IconWallpaperFill0Wght200Grad0Opsz48 from '../components/WallpaperFill0Wght200Grad0Opsz48'
import IconWallpaperFill0Wght300Grad0Opsz48 from '../components/WallpaperFill0Wght300Grad0Opsz48'
import IconWallpaperFill0Wght400Grad0Opsz48 from '../components/WallpaperFill0Wght400Grad0Opsz48'
import IconWallpaperFill0Wght500Grad0Opsz48 from '../components/WallpaperFill0Wght500Grad0Opsz48'
import IconWallpaperFill0Wght600Grad0Opsz48 from '../components/WallpaperFill0Wght600Grad0Opsz48'
import IconWallpaperFill0Wght700Grad0Opsz48 from '../components/WallpaperFill0Wght700Grad0Opsz48'
import IconWallpaperFill1Wght100Grad0Opsz48 from '../components/WallpaperFill1Wght100Grad0Opsz48'
import IconWallpaperFill1Wght200Grad0Opsz48 from '../components/WallpaperFill1Wght200Grad0Opsz48'
import IconWallpaperFill1Wght300Grad0Opsz48 from '../components/WallpaperFill1Wght300Grad0Opsz48'
import IconWallpaperFill1Wght400Grad0Opsz48 from '../components/WallpaperFill1Wght400Grad0Opsz48'
import IconWallpaperFill1Wght500Grad0Opsz48 from '../components/WallpaperFill1Wght500Grad0Opsz48'
import IconWallpaperFill1Wght600Grad0Opsz48 from '../components/WallpaperFill1Wght600Grad0Opsz48'
import IconWallpaperFill1Wght700Grad0Opsz48 from '../components/WallpaperFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWallpaper = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWallpaperFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWallpaperFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWallpaperFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWallpaperFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWallpaperFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWallpaperFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWallpaperFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWallpaperFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWallpaperFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWallpaperFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWallpaperFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWallpaperFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWallpaperFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWallpaperFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
