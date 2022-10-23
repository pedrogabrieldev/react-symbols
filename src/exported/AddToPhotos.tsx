import IconAddToPhotosFill0Wght100Grad0Opsz48 from '../components/AddToPhotosFill0Wght100Grad0Opsz48'
import IconAddToPhotosFill0Wght200Grad0Opsz48 from '../components/AddToPhotosFill0Wght200Grad0Opsz48'
import IconAddToPhotosFill0Wght300Grad0Opsz48 from '../components/AddToPhotosFill0Wght300Grad0Opsz48'
import IconAddToPhotosFill0Wght400Grad0Opsz48 from '../components/AddToPhotosFill0Wght400Grad0Opsz48'
import IconAddToPhotosFill0Wght500Grad0Opsz48 from '../components/AddToPhotosFill0Wght500Grad0Opsz48'
import IconAddToPhotosFill0Wght600Grad0Opsz48 from '../components/AddToPhotosFill0Wght600Grad0Opsz48'
import IconAddToPhotosFill0Wght700Grad0Opsz48 from '../components/AddToPhotosFill0Wght700Grad0Opsz48'
import IconAddToPhotosFill1Wght100Grad0Opsz48 from '../components/AddToPhotosFill1Wght100Grad0Opsz48'
import IconAddToPhotosFill1Wght200Grad0Opsz48 from '../components/AddToPhotosFill1Wght200Grad0Opsz48'
import IconAddToPhotosFill1Wght300Grad0Opsz48 from '../components/AddToPhotosFill1Wght300Grad0Opsz48'
import IconAddToPhotosFill1Wght400Grad0Opsz48 from '../components/AddToPhotosFill1Wght400Grad0Opsz48'
import IconAddToPhotosFill1Wght500Grad0Opsz48 from '../components/AddToPhotosFill1Wght500Grad0Opsz48'
import IconAddToPhotosFill1Wght600Grad0Opsz48 from '../components/AddToPhotosFill1Wght600Grad0Opsz48'
import IconAddToPhotosFill1Wght700Grad0Opsz48 from '../components/AddToPhotosFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddToPhotos = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddToPhotosFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddToPhotosFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddToPhotosFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddToPhotosFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddToPhotosFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddToPhotosFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddToPhotosFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddToPhotosFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddToPhotosFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddToPhotosFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddToPhotosFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddToPhotosFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddToPhotosFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddToPhotosFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
