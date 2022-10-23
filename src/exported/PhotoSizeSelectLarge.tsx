import IconPhotoSizeSelectLargeFill0Wght100Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill0Wght100Grad0Opsz48'
import IconPhotoSizeSelectLargeFill0Wght200Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill0Wght200Grad0Opsz48'
import IconPhotoSizeSelectLargeFill0Wght300Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill0Wght300Grad0Opsz48'
import IconPhotoSizeSelectLargeFill0Wght400Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill0Wght400Grad0Opsz48'
import IconPhotoSizeSelectLargeFill0Wght500Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill0Wght500Grad0Opsz48'
import IconPhotoSizeSelectLargeFill0Wght600Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill0Wght600Grad0Opsz48'
import IconPhotoSizeSelectLargeFill0Wght700Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill0Wght700Grad0Opsz48'
import IconPhotoSizeSelectLargeFill1Wght100Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill1Wght100Grad0Opsz48'
import IconPhotoSizeSelectLargeFill1Wght200Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill1Wght200Grad0Opsz48'
import IconPhotoSizeSelectLargeFill1Wght300Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill1Wght300Grad0Opsz48'
import IconPhotoSizeSelectLargeFill1Wght400Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill1Wght400Grad0Opsz48'
import IconPhotoSizeSelectLargeFill1Wght500Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill1Wght500Grad0Opsz48'
import IconPhotoSizeSelectLargeFill1Wght600Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill1Wght600Grad0Opsz48'
import IconPhotoSizeSelectLargeFill1Wght700Grad0Opsz48 from '../components/PhotoSizeSelectLargeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoSizeSelectLarge = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoSizeSelectLargeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoSizeSelectLargeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoSizeSelectLargeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoSizeSelectLargeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoSizeSelectLargeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoSizeSelectLargeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoSizeSelectLargeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoSizeSelectLargeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoSizeSelectLargeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoSizeSelectLargeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoSizeSelectLargeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoSizeSelectLargeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoSizeSelectLargeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoSizeSelectLargeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
