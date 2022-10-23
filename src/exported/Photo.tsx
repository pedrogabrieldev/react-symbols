import IconPhotoFill0Wght100Grad0Opsz48 from '../components/PhotoFill0Wght100Grad0Opsz48'
import IconPhotoFill0Wght200Grad0Opsz48 from '../components/PhotoFill0Wght200Grad0Opsz48'
import IconPhotoFill0Wght300Grad0Opsz48 from '../components/PhotoFill0Wght300Grad0Opsz48'
import IconPhotoFill0Wght400Grad0Opsz48 from '../components/PhotoFill0Wght400Grad0Opsz48'
import IconPhotoFill0Wght500Grad0Opsz48 from '../components/PhotoFill0Wght500Grad0Opsz48'
import IconPhotoFill0Wght600Grad0Opsz48 from '../components/PhotoFill0Wght600Grad0Opsz48'
import IconPhotoFill0Wght700Grad0Opsz48 from '../components/PhotoFill0Wght700Grad0Opsz48'
import IconPhotoFill1Wght100Grad0Opsz48 from '../components/PhotoFill1Wght100Grad0Opsz48'
import IconPhotoFill1Wght200Grad0Opsz48 from '../components/PhotoFill1Wght200Grad0Opsz48'
import IconPhotoFill1Wght300Grad0Opsz48 from '../components/PhotoFill1Wght300Grad0Opsz48'
import IconPhotoFill1Wght400Grad0Opsz48 from '../components/PhotoFill1Wght400Grad0Opsz48'
import IconPhotoFill1Wght500Grad0Opsz48 from '../components/PhotoFill1Wght500Grad0Opsz48'
import IconPhotoFill1Wght600Grad0Opsz48 from '../components/PhotoFill1Wght600Grad0Opsz48'
import IconPhotoFill1Wght700Grad0Opsz48 from '../components/PhotoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
