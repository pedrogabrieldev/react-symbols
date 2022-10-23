import IconFavoriteFill0Wght100Grad0Opsz48 from '../components/FavoriteFill0Wght100Grad0Opsz48'
import IconFavoriteFill0Wght200Grad0Opsz48 from '../components/FavoriteFill0Wght200Grad0Opsz48'
import IconFavoriteFill0Wght300Grad0Opsz48 from '../components/FavoriteFill0Wght300Grad0Opsz48'
import IconFavoriteFill0Wght400Grad0Opsz48 from '../components/FavoriteFill0Wght400Grad0Opsz48'
import IconFavoriteFill0Wght500Grad0Opsz48 from '../components/FavoriteFill0Wght500Grad0Opsz48'
import IconFavoriteFill0Wght600Grad0Opsz48 from '../components/FavoriteFill0Wght600Grad0Opsz48'
import IconFavoriteFill0Wght700Grad0Opsz48 from '../components/FavoriteFill0Wght700Grad0Opsz48'
import IconFavoriteFill1Wght100Grad0Opsz48 from '../components/FavoriteFill1Wght100Grad0Opsz48'
import IconFavoriteFill1Wght200Grad0Opsz48 from '../components/FavoriteFill1Wght200Grad0Opsz48'
import IconFavoriteFill1Wght300Grad0Opsz48 from '../components/FavoriteFill1Wght300Grad0Opsz48'
import IconFavoriteFill1Wght400Grad0Opsz48 from '../components/FavoriteFill1Wght400Grad0Opsz48'
import IconFavoriteFill1Wght500Grad0Opsz48 from '../components/FavoriteFill1Wght500Grad0Opsz48'
import IconFavoriteFill1Wght600Grad0Opsz48 from '../components/FavoriteFill1Wght600Grad0Opsz48'
import IconFavoriteFill1Wght700Grad0Opsz48 from '../components/FavoriteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFavorite = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFavoriteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFavoriteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFavoriteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFavoriteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFavoriteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFavoriteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFavoriteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFavoriteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFavoriteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFavoriteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFavoriteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFavoriteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFavoriteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFavoriteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
