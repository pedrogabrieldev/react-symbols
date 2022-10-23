import IconPhotoFilterFill0Wght100Grad0Opsz48 from '../components/PhotoFilterFill0Wght100Grad0Opsz48'
import IconPhotoFilterFill0Wght200Grad0Opsz48 from '../components/PhotoFilterFill0Wght200Grad0Opsz48'
import IconPhotoFilterFill0Wght300Grad0Opsz48 from '../components/PhotoFilterFill0Wght300Grad0Opsz48'
import IconPhotoFilterFill0Wght400Grad0Opsz48 from '../components/PhotoFilterFill0Wght400Grad0Opsz48'
import IconPhotoFilterFill0Wght500Grad0Opsz48 from '../components/PhotoFilterFill0Wght500Grad0Opsz48'
import IconPhotoFilterFill0Wght600Grad0Opsz48 from '../components/PhotoFilterFill0Wght600Grad0Opsz48'
import IconPhotoFilterFill0Wght700Grad0Opsz48 from '../components/PhotoFilterFill0Wght700Grad0Opsz48'
import IconPhotoFilterFill1Wght100Grad0Opsz48 from '../components/PhotoFilterFill1Wght100Grad0Opsz48'
import IconPhotoFilterFill1Wght200Grad0Opsz48 from '../components/PhotoFilterFill1Wght200Grad0Opsz48'
import IconPhotoFilterFill1Wght300Grad0Opsz48 from '../components/PhotoFilterFill1Wght300Grad0Opsz48'
import IconPhotoFilterFill1Wght400Grad0Opsz48 from '../components/PhotoFilterFill1Wght400Grad0Opsz48'
import IconPhotoFilterFill1Wght500Grad0Opsz48 from '../components/PhotoFilterFill1Wght500Grad0Opsz48'
import IconPhotoFilterFill1Wght600Grad0Opsz48 from '../components/PhotoFilterFill1Wght600Grad0Opsz48'
import IconPhotoFilterFill1Wght700Grad0Opsz48 from '../components/PhotoFilterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoFilter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoFilterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoFilterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoFilterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoFilterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoFilterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoFilterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoFilterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoFilterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoFilterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoFilterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoFilterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoFilterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoFilterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoFilterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
