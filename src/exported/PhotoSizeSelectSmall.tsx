import IconPhotoSizeSelectSmallFill0Wght100Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill0Wght100Grad0Opsz48'
import IconPhotoSizeSelectSmallFill0Wght200Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill0Wght200Grad0Opsz48'
import IconPhotoSizeSelectSmallFill0Wght300Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill0Wght300Grad0Opsz48'
import IconPhotoSizeSelectSmallFill0Wght400Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill0Wght400Grad0Opsz48'
import IconPhotoSizeSelectSmallFill0Wght500Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill0Wght500Grad0Opsz48'
import IconPhotoSizeSelectSmallFill0Wght600Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill0Wght600Grad0Opsz48'
import IconPhotoSizeSelectSmallFill0Wght700Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill0Wght700Grad0Opsz48'
import IconPhotoSizeSelectSmallFill1Wght100Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill1Wght100Grad0Opsz48'
import IconPhotoSizeSelectSmallFill1Wght200Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill1Wght200Grad0Opsz48'
import IconPhotoSizeSelectSmallFill1Wght300Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill1Wght300Grad0Opsz48'
import IconPhotoSizeSelectSmallFill1Wght400Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill1Wght400Grad0Opsz48'
import IconPhotoSizeSelectSmallFill1Wght500Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill1Wght500Grad0Opsz48'
import IconPhotoSizeSelectSmallFill1Wght600Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill1Wght600Grad0Opsz48'
import IconPhotoSizeSelectSmallFill1Wght700Grad0Opsz48 from '../components/PhotoSizeSelectSmallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoSizeSelectSmall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoSizeSelectSmallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoSizeSelectSmallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoSizeSelectSmallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoSizeSelectSmallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoSizeSelectSmallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoSizeSelectSmallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoSizeSelectSmallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoSizeSelectSmallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoSizeSelectSmallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoSizeSelectSmallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoSizeSelectSmallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoSizeSelectSmallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoSizeSelectSmallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoSizeSelectSmallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
