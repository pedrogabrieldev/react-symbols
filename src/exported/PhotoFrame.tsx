import IconPhotoFrameFill0Wght100Grad0Opsz48 from '../components/PhotoFrameFill0Wght100Grad0Opsz48'
import IconPhotoFrameFill0Wght200Grad0Opsz48 from '../components/PhotoFrameFill0Wght200Grad0Opsz48'
import IconPhotoFrameFill0Wght300Grad0Opsz48 from '../components/PhotoFrameFill0Wght300Grad0Opsz48'
import IconPhotoFrameFill0Wght400Grad0Opsz48 from '../components/PhotoFrameFill0Wght400Grad0Opsz48'
import IconPhotoFrameFill0Wght500Grad0Opsz48 from '../components/PhotoFrameFill0Wght500Grad0Opsz48'
import IconPhotoFrameFill0Wght600Grad0Opsz48 from '../components/PhotoFrameFill0Wght600Grad0Opsz48'
import IconPhotoFrameFill0Wght700Grad0Opsz48 from '../components/PhotoFrameFill0Wght700Grad0Opsz48'
import IconPhotoFrameFill1Wght100Grad0Opsz48 from '../components/PhotoFrameFill1Wght100Grad0Opsz48'
import IconPhotoFrameFill1Wght200Grad0Opsz48 from '../components/PhotoFrameFill1Wght200Grad0Opsz48'
import IconPhotoFrameFill1Wght300Grad0Opsz48 from '../components/PhotoFrameFill1Wght300Grad0Opsz48'
import IconPhotoFrameFill1Wght400Grad0Opsz48 from '../components/PhotoFrameFill1Wght400Grad0Opsz48'
import IconPhotoFrameFill1Wght500Grad0Opsz48 from '../components/PhotoFrameFill1Wght500Grad0Opsz48'
import IconPhotoFrameFill1Wght600Grad0Opsz48 from '../components/PhotoFrameFill1Wght600Grad0Opsz48'
import IconPhotoFrameFill1Wght700Grad0Opsz48 from '../components/PhotoFrameFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoFrame = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoFrameFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoFrameFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoFrameFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoFrameFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoFrameFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoFrameFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoFrameFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoFrameFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoFrameFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoFrameFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoFrameFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoFrameFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoFrameFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoFrameFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
