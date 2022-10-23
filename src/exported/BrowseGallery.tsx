import IconBrowseGalleryFill0Wght100Grad0Opsz48 from '../components/BrowseGalleryFill0Wght100Grad0Opsz48'
import IconBrowseGalleryFill0Wght200Grad0Opsz48 from '../components/BrowseGalleryFill0Wght200Grad0Opsz48'
import IconBrowseGalleryFill0Wght300Grad0Opsz48 from '../components/BrowseGalleryFill0Wght300Grad0Opsz48'
import IconBrowseGalleryFill0Wght400Grad0Opsz48 from '../components/BrowseGalleryFill0Wght400Grad0Opsz48'
import IconBrowseGalleryFill0Wght500Grad0Opsz48 from '../components/BrowseGalleryFill0Wght500Grad0Opsz48'
import IconBrowseGalleryFill0Wght600Grad0Opsz48 from '../components/BrowseGalleryFill0Wght600Grad0Opsz48'
import IconBrowseGalleryFill0Wght700Grad0Opsz48 from '../components/BrowseGalleryFill0Wght700Grad0Opsz48'
import IconBrowseGalleryFill1Wght100Grad0Opsz48 from '../components/BrowseGalleryFill1Wght100Grad0Opsz48'
import IconBrowseGalleryFill1Wght200Grad0Opsz48 from '../components/BrowseGalleryFill1Wght200Grad0Opsz48'
import IconBrowseGalleryFill1Wght300Grad0Opsz48 from '../components/BrowseGalleryFill1Wght300Grad0Opsz48'
import IconBrowseGalleryFill1Wght400Grad0Opsz48 from '../components/BrowseGalleryFill1Wght400Grad0Opsz48'
import IconBrowseGalleryFill1Wght500Grad0Opsz48 from '../components/BrowseGalleryFill1Wght500Grad0Opsz48'
import IconBrowseGalleryFill1Wght600Grad0Opsz48 from '../components/BrowseGalleryFill1Wght600Grad0Opsz48'
import IconBrowseGalleryFill1Wght700Grad0Opsz48 from '../components/BrowseGalleryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrowseGallery = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrowseGalleryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrowseGalleryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrowseGalleryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrowseGalleryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrowseGalleryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrowseGalleryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrowseGalleryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrowseGalleryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrowseGalleryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrowseGalleryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrowseGalleryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrowseGalleryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrowseGalleryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrowseGalleryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
